const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    const { name, email, company, service, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Faltan campos requeridos (nombre, email, mensaje).' 
      });
    }

    const result = await pool.query(
      `INSERT INTO contact_messages (full_name, email, company, service_interest, message, status)
       VALUES ($1, $2, $3, $4, $5, 'pending')
       RETURNING id`,
      [name, email, company || null, service || null, message]
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

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dev-studio-landing.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor Nexxts corriendo en http://localhost:${PORT}`);
  console.log('Usando PostgreSQL para almacenar mensajes');
});