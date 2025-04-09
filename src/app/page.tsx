import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ProcessVisualization from './components/ProcessVisualization';
import ImpactDashboard from './components/ImpactDashboard';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <ProcessVisualization />
      <ImpactDashboard />
      <Footer />
    </main>
  );
}
