import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Demo from '@/components/Demo';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-teal-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Demo />
      <Waitlist />
      <Footer />
    </main>
  );
}