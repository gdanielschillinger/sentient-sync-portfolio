import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Architecture from '@/components/Architecture';
import BentoGrid from '@/components/BentoGrid';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-cyan-500/30">
      {/* Navigation Layer */}
      <Navbar />

      {/* Hero / Pulse Layer */}
      <section id="hero">
        <Hero />
      </section>

      {/* Industrial Architecture / Strategic Bio */}
      <section id="architecture" className="py-20 border-y border-white/5 bg-[#080808]">
        <Architecture />
      </section>

      {/* Project Grid / Portfolio Tiles */}
      <section id="projects" className="py-20">
        <BentoGrid />
      </section>

      {/* Strategic Roadmap for April Launch */}
      <section id="roadmap" className="py-20 bg-[#080808] border-t border-white/5">
        <Roadmap />
      </section>

      {/* Footer / Contact Layer */}
      <Footer />
    </main>
  );
}