import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export default function MarketPrices() {
  const products = [
    {
      name: 'Maíz',
      price: '₡18,500',
      unit: 'por quintal',
      change: '+5.2%',
      trend: 'up',
      market: 'Mercado Oriental',
    },
    {
      name: 'Frijol Rojo',
      price: '₡45,800',
      unit: 'por quintal',
      change: '+2.1%',
      trend: 'up',
      market: 'Mercado Roberto Huembes',
    },
    {
      name: 'Café Pergamino',
      price: '₡2,850',
      unit: 'por libra',
      change: '-1.8%',
      trend: 'down',
      market: 'CECOCAFEN',
    },
    {
      name: 'Arroz',
      price: '₡24,200',
      unit: 'por quintal',
      change: '+3.4%',
      trend: 'up',
      market: 'Mercado Mayoreo',
    },
    {
      name: 'Plátano',
      price: '₡8,500',
      unit: 'por ciento',
      change: '0.0%',
      trend: 'stable',
      market: 'Mercado Israel Lewites',
    },
    {
      name: 'Cebolla',
      price: '₡35,600',
      unit: 'por quintal',
      change: '+8.7%',
      trend: 'up',
      market: 'Mercado Oriental',
    },
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600 bg-green-100';
      case 'down':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      default:
        return '➡️';
    }
  };

  return (
    <section
      id='precios'
      className='bg-gradient-to-br from-gray-50 to-green-50 py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-4xl font-bold text-gray-800 md:text-5xl'>
            Precios de Mercado
            <span className='text-green-600'> en Tiempo Real</span>
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Mantente informado sobre los precios actuales de los principales
            productos agrícolas en los mercados de Nicaragua.
          </p>
          <Badge className='mt-4 bg-green-100 px-4 py-2 text-sm text-green-800'>
            Actualizado hace 15 minutos
          </Badge>
        </div>

        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product, index) => (
            <Card
              key={index}
              className='group bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <CardHeader className='pb-3'>
                <div className='flex items-start justify-between'>
                  <CardTitle className='text-lg font-bold text-gray-800'>
                    {product.name}
                  </CardTitle>
                  <Badge
                    className={`${getTrendColor(product.trend)} font-semibold`}
                  >
                    {getTrendIcon(product.trend)} {product.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  <div>
                    <div className='mb-1 text-3xl font-bold text-green-600'>
                      {product.price}
                    </div>
                    <div className='text-sm text-gray-600'>{product.unit}</div>
                  </div>
                  <div className='border-t border-gray-100 pt-2'>
                    <div className='text-sm text-gray-500'>
                      📍 {product.market}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <p className='mb-4 text-gray-600'>
            ¿Necesitas información sobre otros productos?
          </p>
          <button className='rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700'>
            Ver Todos los Precios
          </button>
        </div>
      </div>
    </section>
  );
}
