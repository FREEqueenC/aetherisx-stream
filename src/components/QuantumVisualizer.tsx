"use client";

import { useState, useEffect } from "react";

export default function QuantumVisualizer() {
  const [resonance, setResonance] = useState(99.1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate minor quantum flux
      setResonance(prev => {
        const flux = (Math.random() - 0.5) * 0.5;
        const newVal = prev + flux;
        return Math.min(Math.max(newVal, 97), 100);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-black/20 rounded-xl border border-primary/10">
      
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-primary/5 animate-pulse" />
      
      {/* Core Resonance Orb */}
      <div className="absolute w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse shadow-[0_0_100px_var(--glow-cyan)]" />

      {/* Quantum Lattice (SVG) */}
      <svg className="relative z-10 w-full h-full p-12" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Entanglement Lines */}
        <line x1="50" y1="20" x2="20" y2="75" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2,2" />
        <line x1="20" y1="75" x2="80" y2="75" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2,2" />
        <line x1="80" y1="75" x2="50" y2="20" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2,2" />

        {/* Active Resonance Waves */}
        <circle cx="50" cy="50" r={20 + (100 - resonance) * 10} fill="none" stroke="var(--primary)" strokeWidth="0.2" strokeOpacity="0.5" className="animate-ping" />

        {/* AI Nodes */}
        {/* Node 1: GEMINI */}
        <g className="animate-bounce" style={{ animationDuration: '3s' }}>
          <circle cx="50" cy="20" r="4" fill="var(--primary)" className="glow-text-cyan shadow-primary" />
          <text x="50" y="12" textAnchor="middle" fontSize="3" fill="var(--primary)" className="font-mono font-bold">GEMINI</text>
        </g>

        {/* Node 2: NVIDIA */}
        <g className="animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          <circle cx="20" cy="75" r="4" fill="var(--primary)" />
          <text x="20" y="85" textAnchor="middle" fontSize="3" fill="var(--primary)" className="font-mono font-bold">NVIDIA</text>
        </g>

        {/* Node 3: QWEN */}
        <g className="animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
          <circle cx="80" cy="75" r="4" fill="var(--primary)" />
          <text x="80" y="85" textAnchor="middle" fontSize="3" fill="var(--primary)" className="font-mono font-bold">QWEN_HF</text>
        </g>

        {/* Resonance Stats Overlay (Center) */}
        <g>
          <text x="50" y="52" textAnchor="middle" fontSize="6" fill="var(--primary)" className="font-mono font-bold glow-text-cyan">
            {resonance.toFixed(1)}%
          </text>
          <text x="50" y="58" textAnchor="middle" fontSize="2" fill="var(--primary)" fillOpacity="0.5" className="font-mono uppercase tracking-widest">
            Coherence
          </text>
        </g>
      </svg>

      {/* Telemetry Labels */}
      <div className="absolute top-4 left-4 font-mono text-[8px] text-primary/40 uppercase space-y-1">
        <div>Carrier: 27.3216 GHz</div>
        <div>Target: 528 Hz</div>
        <div>Mode: TM010 (Resonant)</div>
      </div>

      <div className="absolute bottom-4 right-4 font-mono text-[8px] text-primary/40 uppercase text-right">
        <div>Phase: +3.83 RAD</div>
        <div>Entanglement: GHZ_STATE</div>
        <div>Security: PQC_ACTIVE</div>
      </div>
    </div>
  );
}
