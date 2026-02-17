import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Architecture from '@/components/Architecture';
import BentoGrid from '@/components/BentoGrid';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Architecture />
      <BentoGrid />
      <Roadmap />
      <Footer />
    </main>
  );
}