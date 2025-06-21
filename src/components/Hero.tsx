import { Button } from './ui/Button';
import ArrowDown from './ui/ArrowDown';

export default function Hero() {
  return (
    <section
      id='inicio'
      className='relative flex min-h-screen items-center justify-center overflow-hidden'
    >
      <div className='animate-gradient-shift absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-blue-600'></div>

      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full bg-white/10 blur-xl'
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 6 + 4}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      <div className='relative z-10 container mx-auto px-4 text-center text-white'>
        <div className='animate-fade-in-up mx-auto max-w-4xl'>
          <h1 className='mb-4 text-5xl leading-tight font-bold md:mb-6 md:text-7xl lg:text-8xl'>
            <span className='animate-text-glow bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent'>
              AgroConnect
            </span>
            <br />
            <span className='bg-gradient-to-r from-green-100 to-green-300 bg-clip-text text-3xl font-medium text-transparent md:text-4xl lg:text-5xl'>
              Nicaragua
            </span>
          </h1>

          <p className='mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-green-50 drop-shadow-lg md:text-2xl lg:text-3xl'>
            Conectamos a productores agrícolas directamente con compradores,
            eliminando intermediarios y mejorando los ingresos del campo
            nicaragüense.
          </p>

          <div className='mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mb-16'>
            <Button
              size='lg'
              variant='outline'
              className='border-2 border-white px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-green-600 hover:shadow-white/20'
            >
              Comenzar Ahora
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-2 border-white px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-green-600 hover:shadow-white/20'
            >
              Ver Demo
            </Button>
          </div>

          <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 text-center md:grid-cols-3'>
            <div className='rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20'>
              <h3 className='mb-2 text-3xl font-bold text-white'>500+</h3>
              <p className='font-medium text-green-100'>
                Productores Conectados
              </p>
            </div>
            <div className='rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20'>
              <h3 className='mb-2 text-3xl font-bold text-white'>50+</h3>
              <p className='font-medium text-green-100'>Compradores Activos</p>
            </div>
            <div className='rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20'>
              <h3 className='mb-2 text-3xl font-bold text-white'>₡2M+</h3>
              <p className='font-medium text-green-100'>En Transacciones</p>
            </div>
          </div>
        </div>
      </div>

      <div className='animate-bounce-slow absolute bottom-8 left-1/2 -translate-x-1/2 transform text-white'>
        <ArrowDown className='h-10 w-10 opacity-80 transition-opacity hover:opacity-100' />
      </div>
    </section>
  );
}
