export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-800 py-16 text-white'>
      <div className='container mx-auto px-4'>
        <div className='mb-8 grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='col-span-1 md:col-span-2'>
            <div className='mb-4 flex items-center space-x-2'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600'>
                <span className='text-lg font-bold text-white'>A</span>
              </div>
              <div>
                <span className='text-2xl font-bold'>AgroConnect</span>
                <span className='ml-2 text-green-400'>Nicaragua</span>
              </div>
            </div>
            <p className='mb-4 max-w-md text-gray-300'>
              Conectando el campo nicaragüense con mejores oportunidades de
              mercado, tecnología climática avanzada y herramientas para el
              crecimiento sostenible.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 transition-colors hover:text-green-400'
              >
                📘 Facebook
              </a>
              <a
                href='#'
                className='text-gray-400 transition-colors hover:text-green-400'
              >
                📞 WhatsApp
              </a>
              <a
                href='#'
                className='text-gray-400 transition-colors hover:text-green-400'
              >
                📧 Email
              </a>
            </div>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold text-green-400'>
              Enlaces Rápidos
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#inicio'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href='#precios'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Precios de Mercado
                </a>
              </li>
              <li>
                <a
                  href='#clima'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Alertas Climáticas
                </a>
              </li>
              <li>
                <a
                  href='#mercado'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Marketplace
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 text-lg font-semibold text-green-400'>
              Soporte
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Capacitaciones
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 transition-colors hover:text-white'
                >
                  Manual de Usuario
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row'>
          <p className='mb-4 text-sm text-gray-400 md:mb-0'>
            © {currentYear} AgroConnect Nicaragua. Todos los derechos
            reservados.
          </p>
          <div className='flex space-x-6 text-sm'>
            <a
              href='#'
              className='text-gray-400 transition-colors hover:text-white'
            >
              Términos de Uso
            </a>
            <a
              href='#'
              className='text-gray-400 transition-colors hover:text-white'
            >
              Política de Privacidad
            </a>
            <a
              href='#'
              className='text-gray-400 transition-colors hover:text-white'
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
