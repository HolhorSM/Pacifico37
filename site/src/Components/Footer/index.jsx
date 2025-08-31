import React from 'react'

export default function Footer() {
  const footerNavs = [
    {
      label: "About",
      items: [
        { href: '/', name: 'Inicio' },
       
      ]
    },
    {
      label: "",
      items: [
        {href: '/', name: 'Inicio'}
      ]
    }
  ];

  const socialMedia = [
    {
      href: 'https://facebook.com/pacifico37',
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      href: 'https://instagram.com/pacifico37',
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.283C4.151 14.81 3.621 13.539 3.621 12.017s.53-2.793 1.505-3.705C5.999 7.519 7.152 7.029 8.449 7.029s2.448.49 3.323 1.283c.975.912 1.505 2.183 1.505 3.705s-.53 2.793-1.505 3.705c-.875.793-2.026 1.266-3.323 1.266zm7.424 0c-1.297 0-2.448-.49-3.323-1.283-.975-.912-1.505-2.183-1.505-3.705s.53-2.793 1.505-3.705c.875-.793 2.026-1.283 3.323-1.283s2.448.49 3.323 1.283c.975.912 1.505 2.183 1.505 3.705s-.53 2.793-1.505 3.705c-.875.793-2.026 1.266-3.323 1.266z"/>
        </svg>
      )
    },
    {
      href: 'https://youtube.com/@pacifico37',
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      href: 'https://wa.me/528123456789',
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
        </svg>
      )
    }
  ];

  const contactInfo = {
    address: "Av. Costera Miguel Alemán 37, Zona Hotelera, Acapulco, Guerrero",
    phone: "+52 (744) 123-4567",
    email: "info@pacifico37.mx",
    hours: "Lun - Dom: 9:00 AM - 8:00 PM"
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l18-18M9 9l12-12M21 3L9 15" />
                </svg>
              </div>
              <span className="text-2xl font-bold">
                Pacifico<span className="text-blue-400">37</span>
              </span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Tu oportunidad de vivir frente al océano Pacífico en una de las ubicaciones 
              más exclusivas de la costa mexicana. Donde el lujo se encuentra con la naturaleza.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-300 text-sm">{contactInfo.email}</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Síguenos en redes sociales</p>
              <div className="flex space-x-3">
                {socialMedia.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerNavs.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-6 text-white">
                {section.label}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

  
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Pacifico37. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}