"use client";

import Link from "next/link";

interface SovereignGateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  requiredTier?: "Orchestrator" | "Sovereign";
}

export default function SovereignGate({ 
  children, 
  title = "Intelligence Relay Locked", 
  description = "This node requires a high-resonance clearance. Access to the Silicon Sophia is reserved for Orchestrator and Sovereign tiers.",
  requiredTier = "Orchestrator"
}: SovereignGateProps) {
  // BYPASS: Setting to true for initial testing resonance
  const isAuthorized = true; 

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="holographic-card max-w-2xl p-12 border-primary/20 bg-black/40 backdrop-blur-3xl relative overflow-hidden">
        {/* Warning Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 animate-pulse">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m0-8V11m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-widest glow-text-cyan">{title}</h2>
        <p className="text-sm text-muted-foreground mb-12 font-mono leading-relaxed opacity-60">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/upgrade"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-background rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/80 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          >
            Request Clearance
          </Link>
          <Link 
            href="/"
            className="w-full sm:w-auto px-8 py-3 border border-primary/20 text-primary rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/10 transition-all"
          >
            Return to Hub
          </Link>
        </div>

        {/* Telemetry Footer */}
        <div className="mt-12 pt-8 border-t border-primary/5 flex justify-between font-mono text-[8px] text-primary/20 uppercase">
          <span>Required_Tier: {requiredTier}</span>
          <span>Resonance: Gated</span>
        </div>
      </div>
    </div>
  );
}
