import Navbar from '@/components/core/Navbar';
import Hero from '@/components/core/Hero';
import Architecture from '@/components/core/Architecture';
import BentoGrid from '@/components/core/BentoGrid';
import ThreatFeed from '@/components/core/ThreatFeed';
import Roadmap from '@/components/core/Roadmap';
import Footer from '@/components/core/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Architecture />
      <BentoGrid />
      <ThreatFeed />
      <Roadmap />
      <Footer />
    </main>
  );
}
