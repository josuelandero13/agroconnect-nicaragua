import { useState, useEffect } from 'react';
import { Menu, X } from './ui/icon';
import { NavLink, MobileNavLink } from './ui/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white py-2 shadow-md'
          : 'bg-white/95 py-4 shadow-sm backdrop-blur-sm'
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-md transition-shadow hover:shadow-lg'>
              <span className='text-xl font-bold text-white'>A</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:space-x-2'>
              <span className='text-2xl font-bold text-gray-800 transition-colors hover:text-green-600'>
                AgroConnect
              </span>
              <span className='hidden text-sm font-medium text-green-600 sm:block'>
                Nicaragua
              </span>
            </div>
          </div>

          <nav className='hidden items-center space-x-6 md:flex lg:space-x-8'>
            <NavLink href='#inicio' onClick={closeMenu}>
              Inicio
            </NavLink>
            <NavLink href='#precios' onClick={closeMenu}>
              Precios
            </NavLink>
            <NavLink href='#clima' onClick={closeMenu}>
              Clima
            </NavLink>
            <NavLink href='#mercado' onClick={closeMenu}>
              Mercado
            </NavLink>
            <NavLink href='#contacto' onClick={closeMenu}>
              Contacto
            </NavLink>
            <button className='transform rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-5 py-2.5 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:from-green-700 hover:to-green-600 hover:shadow-lg'>
              Ingresar
            </button>
          </nav>

          <button
            className='rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:outline-none md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Menú'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6 text-gray-700' />
            ) : (
              <Menu className='h-6 w-6 text-gray-700' />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className='animate-slide-down mt-4 pb-4 md:hidden'>
            <div className='flex flex-col space-y-3'>
              <MobileNavLink href='#inicio' onClick={closeMenu}>
                Inicio
              </MobileNavLink>
              <MobileNavLink href='#precios' onClick={closeMenu}>
                Precios
              </MobileNavLink>
              <MobileNavLink href='#clima' onClick={closeMenu}>
                Clima
              </MobileNavLink>
              <MobileNavLink href='#mercado' onClick={closeMenu}>
                Mercado
              </MobileNavLink>
              <MobileNavLink href='#contacto' onClick={closeMenu}>
                Contacto
              </MobileNavLink>
              <button className='mt-2 rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-4 py-3 font-medium text-white shadow-md transition-all hover:shadow-lg'>
                Ingresar
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
