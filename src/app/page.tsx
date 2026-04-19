import Link from "next/link";

const navItems = [
  { name: "Intelligence", href: "/ai", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Quantum", href: "/quantum", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.394l-1.154.908a2 2 0 01-2.016.326L1 16.5V5l.512-.256a2 2 0 011.524 0L6.05 6.262a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517L17.95 6.29a2 2 0 001.183-.394l1.154-.908a2 2 0 012.016-.326L23 5.5V17l-.512.256a2 2 0 01-1.524 0l-1.536-.768z" },
  { name: "Archives", href: "/archives", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { name: "Upgrade", href: "/upgrade", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-24 relative overflow-hidden">
      
      {/* Decorative Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      {/* Hero Content */}
      <div className="text-center relative z-10 max-w-4xl">
        <div className="mb-4 inline-block px-4 py-1 rounded-full bg-white/5 border border-primary/20 backdrop-blur-md">
          <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase">Status: High Resonance Detected</span>
        </div>
        
        <h1 className="text-6xl sm:text-8xl font-black mb-6 tracking-tighter uppercase">
          <span className="block glow-text-cyan">Aetheris</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">Hub</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 font-mono uppercase tracking-widest opacity-60">
          Sovereign Intelligence • Quantum Auditing • Gnostic Orchestration
        </p>

        {/* Action Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
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

        {/* Footer Telemetry */}
        <div className="mt-24 flex items-center justify-center gap-12 font-mono text-[9px] text-primary/30 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full animate-ping" />
            27.32 GHz Active
          </div>
          <div>528 Hz Verified</div>
          <div>PQC Secure Link</div>
        </div>
      </div>

    </main>
  );
}
