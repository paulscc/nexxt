import { useNavigate } from 'react-router-dom';
import PageFooter from '../components/PageFooter';
import FloatingNavBar from '../components/FloatingNavBar';

function LegalLayout({ title, content }: { title: string; content: string[] }) {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen text-stone-800">
      <div className="fixed top-6 left-6 z-50">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 text-stone-700 font-custom text-[10px] tracking-widest uppercase hover:bg-white transition-all shadow-md cursor-pointer">← BACK</button>
      </div>
      <main className="w-full flex flex-col bg-gradient-to-b from-white via-stone-100 via-stone-200 via-stone-300 to-stone-950">
        <section className="p-3 md:p-6 lg:p-8 min-h-[30vh] flex items-center justify-center bg-gradient-to-b from-white to-stone-100">
          <div className="relative w-full max-w-4xl mx-auto rounded-[32px] md:rounded-[48px] bg-[#ececec] overflow-hidden p-10 md:p-16 shadow-lg text-center">
            <h1 className="font-custom text-4xl sm:text-5xl md:text-6xl text-stone-950 uppercase tracking-normal leading-none">{title}</h1>
          </div>
        </section>
        <section className="py-16 px-4 md:px-8">
          <div className="w-full max-w-3xl mx-auto">
            {content.map((paragraph, i) => (
              <p key={i} className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed mb-4">{paragraph}</p>
            ))}
          </div>
        </section>
        <FloatingNavBar />
        <PageFooter />
      </main>
    </div>
  );
}

export function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      content={[
        "En Nexxts, nos tomamos muy en serio la privacidad de tus datos. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.",
        "Recopilación de datos: Recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico y número de teléfono cuando llenas nuestros formularios de contacto.",
        "Uso de datos: Utilizamos tus datos únicamente para responder a tus consultas, enviarte cotizaciones y mejorar nuestros servicios. No compartimos tu información con terceros sin tu consentimiento explícito.",
        "Cookies: Nuestro sitio utiliza cookies esenciales para el funcionamiento básico. Puedes configurar tu navegador para rechazar las cookies, aunque esto podría afectar la funcionalidad del sitio.",
        "Seguridad: Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra accesos no autorizados.",
        "Tus derechos: Tienes derecho a acceder, rectificar o eliminar tus datos personales en cualquier momento. Contáctanos a team@nexxts.es para ejercer estos derechos.",
        "Última actualización: Enero 2026."
      ]}
    />
  );
}

export function TerminosPage() {
  return (
    <LegalLayout
      title="Términos de Servicio"
      content={[
        "Bienvenido a Nexxts. Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones.",
        "Servicios: Nexxts ofrece servicios de desarrollo web, inteligencia artificial, machine learning y consultoría tecnológica. El alcance específico de cada proyecto se define en un contrato independiente.",
        "Propiedad intelectual: Todo el código, diseño y materiales desarrollados por Nexxts son propiedad de Nexxts hasta que se realice el pago completo del proyecto, momento en el cual la propiedad se transfiere al cliente.",
        "Plazos de entrega: Los plazos acordados son estimaciones basadas en la información disponible al inicio del proyecto. Cambios en el alcance pueden afectar estos plazos.",
        "Pagos: Los términos de pago se especifican en cada contrato. El incumplimiento de pagos puede resultar en la suspensión de los servicios.",
        "Confidencialidad: Ambas partes se comprometen a mantener la confidencialidad de la información compartida durante el proyecto.",
        "Responsabilidad: Nexxts no se hace responsable por daños indirectos o pérdidas de datos. Nuestra responsabilidad máxima se limita al monto total pagado por los servicios.",
        "Estos términos pueden ser actualizados periódicamente. Te notificaremos sobre cambios significativos."
      ]}
    />
  );
}

export function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      content={[
        "Esta política de cookies explica qué son las cookies y cómo las utilizamos en nuestro sitio web.",
        "¿Qué son las cookies?: Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para mejorar tu experiencia de navegación.",
        "Cookies esenciales: Utilizamos cookies técnicas necesarias para el funcionamiento básico del sitio, como mantener tu sesión activa.",
        "Cookies de análisis: Utilizamos herramientas como Google Analytics para entender cómo los visitantes interactúan con nuestro sitio, lo que nos ayuda a mejorar su funcionamiento.",
        "Cookies de terceros: Algunas páginas pueden incluir contenido de terceros (como videos incrustados) que pueden establecer sus propias cookies.",
        "Control de cookies: Puedes controlar y/o eliminar las cookies según tu criterio. Puedes eliminar todas las cookies almacenadas en tu dispositivo y configurar la mayoría de los navegadores para que las bloqueen.",
        "Si tienes preguntas sobre nuestra política de cookies, contáctanos a team@nexxts.es.",
        "Última actualización: Enero 2026."
      ]}
    />
  );
}