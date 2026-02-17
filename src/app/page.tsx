import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'

export default function Home() {
  return (
    // The bg-[#050505] ensures the Obsidian black theme is seamless
    <main className="min-h-screen bg-[#050505]">
      {/* This is the Section 1: The "Wow" Visual */}
      <Hero />
      
      {/* This is Section 2: Your Technical Dashboard */}
      <BentoGrid />
      
      {/* Footer / Contact Section can go here later */}
    </main>
  );
}