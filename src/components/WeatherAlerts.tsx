import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const WeatherAlerts = () => {
  const alerts = [
    {
      type: 'Lluvia Intensa',
      severity: 'Alta',
      location: 'Región Pacífico',
      time: 'Próximas 6 horas',
      description:
        'Se esperan lluvias intensas que podrían afectar cultivos de maíz y frijol.',
      recommendation:
        'Suspenda actividades de campo y proteja cultivos sensibles.',
      icon: '🌧️',
      color: 'border-red-200 bg-red-50',
    },
    {
      type: 'Sequía Prolongada',
      severity: 'Media',
      location: 'Región Norte',
      time: 'Próximos 5 días',
      description:
        'Condiciones secas persistentes en zona de producción cafetalera.',
      recommendation:
        'Implemente sistemas de riego y conserve agua disponible.',
      icon: '☀️',
      color: 'border-yellow-200 bg-yellow-50',
    },
    {
      type: 'Vientos Fuertes',
      severity: 'Baja',
      location: 'Región Central',
      time: 'Esta tarde',
      description:
        'Vientos de hasta 45 km/h podrían afectar cultivos altos como plátano.',
      recommendation:
        'Asegure estructuras y proteja cultivos vulnerables al viento.',
      icon: '💨',
      color: 'border-blue-200 bg-blue-50',
    },
  ];

  const forecast = [
    { day: 'Hoy', temp: '28°C', condition: 'Parcialmente nublado', icon: '⛅' },
    { day: 'Mañana', temp: '31°C', condition: 'Soleado', icon: '☀️' },
    { day: 'Viernes', temp: '26°C', condition: 'Lluvia ligera', icon: '🌦️' },
    { day: 'Sábado', temp: '29°C', condition: 'Nublado', icon: '☁️' },
    { day: 'Domingo', temp: '30°C', condition: 'Soleado', icon: '☀️' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alta':
        return 'bg-red-100 text-red-800';
      case 'Media':
        return 'bg-yellow-100 text-yellow-800';
      case 'Baja':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id='clima' className='bg-white py-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-4xl font-bold text-gray-800 md:text-5xl'>
            Alertas Climáticas y
            <span className='text-blue-600'> Pronóstico Agrícola</span>
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Recibe alertas tempranas y recomendaciones específicas para proteger
            tus cultivos y optimizar tu producción agrícola.
          </p>
        </div>

        <div className='mb-16'>
          <h3 className='mb-8 text-center text-2xl font-bold text-gray-800'>
            🚨 Alertas Activas
          </h3>
          <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3'>
            {alerts.map((alert, index) => (
              <Card
                key={index}
                className={`${alert.color} border-2 transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader className='pb-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <span className='text-2xl'>{alert.icon}</span>
                      <CardTitle className='text-lg font-bold text-gray-800'>
                        {alert.type}
                      </CardTitle>
                    </div>
                    <Badge
                      className={`${getSeverityColor(alert.severity)} font-semibold`}
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-2 text-sm text-gray-600'>
                    <div>
                      📍 <strong>Ubicación:</strong> {alert.location}
                    </div>
                    <div>
                      ⏰ <strong>Tiempo:</strong> {alert.time}
                    </div>
                  </div>
                  <p className='text-sm leading-relaxed text-gray-700'>
                    {alert.description}
                  </p>
                  <div className='rounded-lg border bg-white/70 p-3'>
                    <p className='mb-1 text-sm font-medium text-gray-800'>
                      💡 Recomendación:
                    </p>
                    <p className='text-sm text-gray-700'>
                      {alert.recommendation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className='mb-8 text-center text-2xl font-bold text-gray-800'>
            📅 Pronóstico de 5 Días
          </h3>
          <Card className='mx-auto max-w-4xl bg-gradient-to-r from-blue-50 to-green-50'>
            <CardContent className='p-6'>
              <div className='grid grid-cols-5 gap-4'>
                {forecast.map((day, index) => (
                  <div key={index} className='space-y-3 text-center'>
                    <div className='font-semibold text-gray-800'>{day.day}</div>
                    <div className='text-4xl'>{day.icon}</div>
                    <div className='text-2xl font-bold text-blue-600'>
                      {day.temp}
                    </div>
                    <div className='text-sm leading-tight text-gray-600'>
                      {day.condition}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mt-12 text-center'>
          <Button className='bg-blue-600 px-8 py-3 text-lg text-white hover:bg-blue-700'>
            Personalizar Alertas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeatherAlerts;
