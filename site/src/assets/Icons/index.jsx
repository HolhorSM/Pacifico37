
import gym from './gym.svg'
import cold from './cold.svg'
import shower from './shower.svg'
import segurity from './segurity.svg'
import tenis from './tenis.svg'
import padel from './padel.svg'
import pool from './pool.svg'
import airbnb from "./airbnb.svg"

export const icon = {
    gym,
    cold,
    shower,
    segurity,
    tenis,
    padel,
    pool,
    airbnb
}
export const features = [
   {
  icon: icon.gym,
  title: "GYM privado",
  desc: "Terrasol cuenta con un gimnasio totalmente equipado y con entrenador personal para ayudarte a alcanzar tu maximo potencial.",
},
{
  icon: icon.pool,
  title: "Albercas",
  desc: "Disfruta de dos albercas con camastros, mesas y palapa, pensadas para tu descanso y comodidad.",
},
{
  icon: icon.tenis,
  title: "Cancha de tenis",
  desc: "Practica o diviertete en nuestra cancha de tenis disponible para todos los huespedes.",
},
{
  icon: icon.cold,
  title: "AC",
  desc: "Pacifico 37 ofrece alojamiento completamente climatizado para tu confort en cualquier temporada.",
},
{
  icon: icon.segurity,
  title: "Seguridad",
  desc: "Contamos con un equipo de guardias y dos casetas de vigilancia para garantizar tu seguridad día y noche.",
},
{
  icon: icon.padel,
  title: "Cancha de padel",
  desc: "Los amantes del pádel también encontrarán su espacio en nuestra cancha dedicada a este deporte.",
},

  ];

export const propertyFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18v6H3v-6zM5 12V8a2 2 0 012-2h10a2 2 0 012 2v4M5 18v2M19 18v2" />
</svg>
      ),
      title: "Amueblado",
      description: "Pacifico 37 ya esta equipada con muebles para que desde el dia 1 puedas relajarte sin preocuparte por lo demas."
    },
    {
      icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18v10H3V10zM7 6h10v4H7V6zM9 13h6v7H9v-7zM12 16v4" />
</svg>
      ),
      title: "Superficie de terreno y construncion",
      description: "Esta propiedad esta en una superficie de 96 Mts² y costruida en 70 Mts²."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Arquitectura Moderna",
      description: "Diseño Moderno y agradable a la vista para que te sientas en casa."
    }
  ];

  export const testimonials = [
    {
      name: "Alanna Sophía",
      role: "Huesped anterior",
      text: "Excelente lugar para hospedarse, es bastante tranquilo y adecuado para ir en familia, las albercas bastante limpias. El departamento muy limpio y acogedor. Yoshio fue un anfitrión increíble, muy atento siempre a las dudas y bastante amigable, fue muy ameno poder hospedarse ahí gracias a la confianza que él nos daba. RECOMENDADO 100%"
    },
    {
      name: "Jorge",
      role: "Huesped anterior",
     
      text: "Excelente ubicación del Airbnb, muy buena comunicación del anfitrión! Residencial muy bonito con albercas limpias."
    }
  ];