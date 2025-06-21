import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function Features() {
  const features = [
    {
      title: 'Mercado Directo',
      description:
        'Conecta directamente con compradores sin intermediarios, obteniendo mejores precios por tus productos.',
      icon: '🤝',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Precios en Tiempo Real',
      description:
        'Accede a precios actualizados de productos básicos como maíz, frijol, café y más.',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Alertas Climáticas',
      description:
        'Recibe alertas tempranas sobre condiciones climáticas y recomendaciones para tu cultivo.',
      icon: '🌤️',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Logística Optimizada',
      description:
        'Coordinación eficiente de recojo y transporte basada en geolocalización.',
      icon: '🚛',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Calidad de Suelo',
      description:
        'Reportes y recomendaciones sobre calidad de suelo y optimización de riego.',
      icon: '🌱',
      color: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Red de Cooperativas',
      description:
        'Conecta con cooperativas locales y amplía tu red de distribución.',
      icon: '🏘️',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section className='bg-white py-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-4xl font-bold text-gray-800 md:text-5xl'>
            Todo lo que necesitas para
            <span className='text-green-600'> hacer crecer tu negocio</span>
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Una plataforma integral diseñada específicamente para las
            necesidades de los productores agrícolas nicaragüenses.
          </p>
        </div>

        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='group border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'
            >
              <CardHeader className='text-center'>
                <div
                  className={`mx-auto h-16 w-16 rounded-full bg-gradient-to-r ${feature.color} mb-4 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <CardTitle className='text-xl font-bold text-gray-800'>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-center leading-relaxed text-gray-600'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
