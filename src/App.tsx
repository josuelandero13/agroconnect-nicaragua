import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WeatherAlerts from './components/WeatherAlerts';
import MarketPrices from './components/MarketPrices';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <WeatherAlerts />
        <MarketPrices />
      </main>
      <Footer />
    </>
  );
}

export default App;
