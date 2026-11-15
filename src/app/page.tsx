import { SITE_CONFIG } from "@/lib/config";
import HackMDNote from "@/components/HackMDNote";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Services", href: "/services", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { name: "Intelligence", href: "/ai", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Quantum", href: "/quantum", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.394l-1.154.908a2 2 0 01-2.016.326L1 16.5V5l.512-.256a2 2 0 011.524 0L6.05 6.262a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517L17.95 6.29a2 2 0 001.183-.394l1.154-.908a2 2 0 012.016-.326L23 5.5V17l-.512.256a2 2 0 01-1.524 0l-1.536-.768z" },
  { name: "Archives", href: "/archives", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { name: "Upgrade", href: "/upgrade", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function Home() {
  const manifestoId = SITE_CONFIG.hackmd.manifestoNoteId;

  return (
    <main className="min-h-screen flex flex-col items-center p-6 sm:p-24 relative overflow-hidden">
      
      {/* Decorative Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      {/* Hero Content */}
      <div className="text-center relative z-10 max-w-4xl mt-12 sm:mt-24">
        
        {/* Logo Integration */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            <Image 
              src="/logo-variation.jpg" 
              alt="Aetheris Logo" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-4 inline-block px-4 py-1 rounded-full bg-white/5 border border-primary/20 backdrop-blur-md">
          <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase">Status: High Resonance Detected</span>
        </div>
        
        <h1 className="text-6xl sm:text-8xl font-black mb-6 tracking-tighter uppercase">
          <span className="block glow-text-cyan">Aetheris</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">Hub</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 font-mono uppercase tracking-widest opacity-60">
          Sovereign Intelligence | Quantum Auditing | Gnostic Orchestration
        </p>

        {/* Action Callout for High-Ticket Services */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <Link 
            href="/services" 
            className="px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-widest font-bold bg-primary text-background shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-[1.03] transition-all"
          >
            Engineering Services &amp; SOW Builder &rarr;
          </Link>
          <a 
            href="https://levityprotocol.cloud" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-widest font-bold bg-white/5 border border-primary/30 text-primary hover:bg-primary/10 transition-all"
          >
            Levity Protocol (Base L2) &rarr;
          </a>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-24">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="holographic-card group p-6 hover:border-primary/50 flex flex-col items-center gap-4 border-white/5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/20 transition-all border border-primary/10">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] group-hover:glow-text-cyan">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Visual Intelligence Gallery */}
        <div className="max-w-6xl mx-auto mb-24 w-full">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-xs font-mono text-primary uppercase tracking-[0.5em]">[ VISUAL_INTELLIGENCE_GALLERY ]</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { src: "/research/luminous-mainframe.png", label: "Luminous Mainframe" },
              { src: "/research/matter-diagnostic.png", label: "Matter Diagnostic" },
              { src: "/research/angels-ai-concept.png", label: "Angels as AI" },
              { src: "/research/intelligence-hierarchy.png", label: "Intel Hierarchy" },
              { src: "/research/brain-vacuum.png", label: "Brain-Vacuum" },
            ].map((img, i) => (
              <div key={i} className="holographic-card group aspect-square relative overflow-hidden p-1 border-white/5">
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-primary/10">
                  <Image 
                    src={img.src} 
                    alt={img.label} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <span className="text-[8px] font-mono text-primary uppercase tracking-widest">{img.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Research / Manifesto */}
        {manifestoId && (
          <div className="max-w-4xl mx-auto text-left holographic-card p-12 border-primary/10">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xs font-mono text-primary uppercase tracking-[0.5em]">[ FEATURED_RESEARCH ]</h2>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <HackMDNote noteId={manifestoId} />
          </div>
        )}

        {/* Footer Telemetry */}
        <div className="mt-24 mb-12 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-12 font-mono text-[9px] text-primary/30 uppercase tracking-[0.4em]">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full animate-ping" />
              27.32 GHz Active
            </div>
            <div>528 Hz Verified</div>
            <div>PQC Secure Link</div>
          </div>
          
          <div className="flex items-center gap-8 font-mono text-[8px] text-primary/20 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Resonance</Link>
          </div>
        </div>
      </div>

    </main>
  );
}
