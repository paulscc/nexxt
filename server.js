const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');
const https = require('https');
const geoip = require('geoip-lite');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ── Cronjob: hacer ping a la web cada 5 min para mantener Render activo ──
const PING_URL = 'https://cronbloj.onrender.com/ping';
const PING_INTERVAL = 5 * 60 * 1000; // 5 minutos

function doPing() {
  https.get(PING_URL, (resp) => {
    let data = '';
    resp.on('data', chunk => data += chunk);
    resp.on('end', () => {
      console.log(`[${new Date().toISOString()}] Ping exitoso a ${PING_URL} → ${resp.statusCode}`);
    });
  }).on('error', (err) => {
    console.error(`[${new Date().toISOString()}] Error en ping: ${err.message}`);
  });
}

// Primer ping a los 10 segundos de iniciar el servidor, luego cada 5 min
setTimeout(() => {
  doPing();
  setInterval(doPing, PING_INTERVAL);
}, 10000);

console.log(`Cronjob configurado: ping cada 5 min a ${PING_URL}`);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para trackear visitas a páginas
app.use((req, res, next) => {
  // Solo trackear páginas HTML, ignorar peticiones a assets, CSS, JS, etc.
  const path = req.path;
  
  // Ignorar archivos estáticos y endpoints API
  if (!path.startsWith('/api') && !path.startsWith('/send-email') && !path.startsWith('/subscribe') && !path.match(/\.(css|js|png|jpg|gif|svg|webp|ico|json|txt)$/)) {
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip || req.connection?.remoteAddress;
    const userAgent = req.headers['user-agent'] || null;
    const referrer = req.headers['referer'] || null;
    const visitedUrl = path;

    // Guardar asíncronamente sin bloquear la respuesta
    pool.query(
      `INSERT INTO web_visits (ip_address, user_agent, referrer, visited_url)
       VALUES ($1, $2, $3, $4)`,
      [ip, userAgent, referrer, visitedUrl]
    ).catch(err => {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error guardando visita:', err.message);
      }
    });
  }
  next();
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Configurar conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.Dbnhost,
  ssl: process.env.Dbnhost && process.env.Dbnhost.includes('ssl') ? { rejectUnauthorized: false } : false
});

// Verificar conexión a la base de datos
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error conectando a PostgreSQL:', err.message);
  } else {
    console.log('Conectado a PostgreSQL correctamente');
  }
});

// Endpoint para guardar mensajes de contacto
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, company, phone, contactMethod, service, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Faltan campos requeridos (nombre, email, mensaje).' 
      });
    }

    const result = await pool.query(
      `INSERT INTO contact_messages (full_name, email, company, phone, preferred_contact_method, service_interest, message, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')
       RETURNING id`,
      [name, email, company || null, phone || null, contactMethod || null, service || null, message]
    );
    
    console.log(`Mensaje guardado con ID: ${result.rows[0].id}`);
    
    res.json({ 
      success: true, 
      message: '¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.' 
    });
  } catch (error) {
    console.error('Error al guardar mensaje:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.' 
    });
  }
});

// Endpoint para formularios simples (solo email)
app.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'El email es requerido.' 
      });
    }

    const result = await pool.query(
      `INSERT INTO contact_messages (full_name, email, message, service_interest, status)
       VALUES ($1, $2, $3, $4, 'pending')
       RETURNING id`,
      ['Lead vía web', email, 'Interesado en servicios de Nexxts (lead desde formulario CTA)', 'Web']
    );
    
    console.log(`Lead guardado con ID: ${result.rows[0].id}`);
    
    res.json({ 
      success: true, 
      message: '¡Gracias! Te contactaremos pronto.' 
    });
  } catch (error) {
    console.error('Error al guardar lead:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Hubo un error. Por favor intenta de nuevo.' 
    });
  }
});

// Endpoint para detectar ubicación del visitante
app.get('/api/location', (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip || req.connection?.remoteAddress;
  
  // Ignorar IPs locales
  if (ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1' || ip?.startsWith('192.168.') || ip?.startsWith('10.')) {
    return res.json({ city: null, region: null });
  }
  
  const geo = geoip.lookup(ip);
  
  if (geo) {
    res.json({ city: geo.city, region: geo.region });
  } else {
    res.json({ city: null, region: null });
  }
});

// Ruta principal - versión clásica
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para la nueva versión Studio
app.use('/studio', express.static(path.join(__dirname, 'studio')));

app.listen(PORT, () => {
  console.log(`Servidor Nexxts corriendo en http://localhost:${PORT}`);
  console.log('Usando PostgreSQL para almacenar mensajes');
});