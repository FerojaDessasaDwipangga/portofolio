import Hero from '../components/features/Hero';
import PortfolioShowcase from '../components/features/PortfolioShowcase';
import CareerJourney from '../components/features/CareerJourney';
import ContactSection from '../components/features/ContactSection';

export default function HomePage() {
  return (
    <div className="space-y-32 pb-20 overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Portfolio Showcase (Tabbed Skills) */}
      <section className="container mx-auto px-4">
        <PortfolioShowcase />
      </section>

      {/* 3. Career Journey */}
      <section className="container mx-auto px-4">
        <CareerJourney />
      </section>

      {/* 4. Contact & Comments */}
      <section className="container mx-auto px-4">
        <ContactSection />
      </section>
    </div>
  );
}
