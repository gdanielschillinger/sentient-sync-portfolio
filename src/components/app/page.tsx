import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Architecture from '@/components/Architecture';
import BentoGrid from '@/components/BentoGrid';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-cyan-500/30">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="architecture" className="py-20 border-y border-white/5 bg-[#080808]">
        <Architecture />
      </section>
      <section id="projects" className="py-20">
        <BentoGrid />
      </section>
      <section id="roadmap" className="py-20 bg-[#080808] border-t border-white/5">
        <Roadmap />
      </section>
      <Footer />
    </main>
  );
}