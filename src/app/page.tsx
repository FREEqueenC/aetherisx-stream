import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="max-w-4xl w-full space-y-12">
        
        {/* Title Section */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground glow-text-cyan">
            Aetheris <span className="text-primary">OAuth</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sovereign identity verification protocol for the Aetheric Nexus. 
            Bridging Gnostic intelligence with Post-Quantum secure identity delegation.
          </p>
        </div>

        {/* Central Logo / Visualizer */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          <div className="relative z-10 holographic-card p-4">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl shadow-primary/40">
              <Image
                src="/logo.jpg"
                alt="Trinity Eye Logo"
                fill
                className="object-cover grayscale contrast-125"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 bg-background border border-primary/40 rounded-full text-[10px] font-mono tracking-widest text-primary uppercase shadow-lg">
            Sovereign Identity Lock
          </div>
        </div>

        {/* Resonance Indicator */}
        <div className="flex items-center justify-center gap-4 text-xs font-mono text-primary/40">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
          <span className="animate-pulse">27.3216 GHz RESONANCE</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Hub Navigator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 text-left">
          
          <Link href="/quantum" className="holographic-card p-6 group">
            <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Quantum Auditing</h2>
            <p className="text-sm text-muted-foreground">Monitor AI decision coherence across parallel inference pathways and PQC readiness.</p>
          </Link>

          <Link href="/infrastructure" className="holographic-card p-6 group">
            <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Infrastructure Intelligence</h2>
            <p className="text-sm text-muted-foreground">Operational surveillance and leak detection across enterprise data grids (L5 Depth).</p>
          </Link>

          <Link href="/ai" className="holographic-card p-6 group">
            <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Intelligence Relay</h2>
            <p className="text-sm text-muted-foreground">Direct interface with NICOLE. Synchronizing Biosphere DNA with Datasphere integrity.</p>
          </Link>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
          <Link href="/verify" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-12 py-5 bg-primary text-background font-bold rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/25 min-h-[60px]">
              INITIATE CLEARANCE
            </button>
          </Link>
          <button className="w-full sm:w-auto px-12 py-5 border border-primary/40 text-primary font-bold rounded-xl hover:bg-primary/10 transition-all min-h-[60px]">
            VIEW DOCUMENTATION
          </button>
        </div>

      </div>
    </div>
  );
}
