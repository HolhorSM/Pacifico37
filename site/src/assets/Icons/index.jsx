
import gym from './gym.png'
import cold from './cold.png'
import shower from './shower.png'
import segurity from './segurity.png'
import tenis from './tenis.png'
import padel from './padel.png'
import pool from './pool.png'

export const icon = {
    gym,
    cold,
    shower,
    segurity,
    tenis,
    padel,
    pool
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15v4M16 15v4" />
        </svg>
      ),
      title: "Vista Panorámica",
      description: "Disfruta de impresionantes vistas al océano Pacífico desde todas las habitaciones principales."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>
      ),
      title: "Ubicación Premium",
      description: "Situada en una de las zonas más exclusivas de la costa, con acceso directo a la playa."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Arquitectura Moderna",
      description: "Diseño contemporáneo con acabados de lujo y espacios amplios perfectamente distribuidos."
    }
  ];

  export const testimonials = [
    {
      name: "María González",
      role: "Propietaria anterior",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      text: "Vivir en esta propiedad fue una experiencia increíble. Las vistas al mar y la tranquilidad del lugar hacen que cada día se sienta como unas vacaciones."
    },
    {
      name: "Carlos Mendoza",
      role: "Vecino de la zona",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Es una de las mejores inversiones que he visto en la zona. La ubicación es perfecta y la calidad de construcción es excepcional."
    }
  ];