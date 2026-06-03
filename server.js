const express = require('express');
const nodemailer = require('nodemailer');
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

// Configurar Nodemailer con Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Endpoint para recibir datos del formulario de contacto
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;
    const to = process.env.CONTACT_EMAIL || 'team@Nexxts.es';

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: to,
      replyTo: email,
      subject: `Contacto desde Nexxts - ${name} - ${service || 'Consulta'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #8B4513; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">✦ Nexxts</h1>
            <p style="margin: 5px 0 0; opacity: 0.9;">Nuevo mensaje de contacto</p>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #333;">Nombre</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #333;">Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #555;">${email}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #333;">Empresa</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #555;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #333;">Servicio</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #555;">${service || 'No especificado'}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Mensaje:</h3>
              <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8B4513; color: #555; line-height: 1.6;">${message}</p>
            </div>
          </div>
          <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Enviado desde Nexxts.es — Páginas Web en Quito, Ecuador</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.json({ 
      success: true, 
      message: '¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.' 
    });
  } catch (error) {
    console.error('Error al enviar email:', error);
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
    const to = process.env.CONTACT_EMAIL || 'team@Nexxts.es';

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: to,
      replyTo: email,
      subject: 'Nuevo suscriptor desde Nexxts',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #8B4513; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">✦ Nexxts</h1>
            <p style="margin: 5px 0 0; opacity: 0.9;">Nuevo lead interesado</p>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <p style="color: #555; font-size: 16px;">Una persona ha mostrado interés en los servicios de Nexxts:</p>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8B4513;">
              <strong>Email:</strong> ${email}
            </p>
          </div>
          <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Enviado desde Nexxts.es</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.json({ 
      success: true, 
      message: '¡Gracias! Te contactaremos pronto.' 
    });
  } catch (error) {
    console.error('Error al enviar email:', error);
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
});