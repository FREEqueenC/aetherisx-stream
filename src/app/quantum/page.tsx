"use client";

import { useState } from "react";
import Link from "next/link";
import QuantumVisualizer from "@/components/QuantumVisualizer";

const auditModules = [
  {
    id: "coherence",
    name: "Quantum Coherence",
    description: "Monitor AI decision coherence across parallel inference pathways",
    status: "active",
    score: 97.3,
    proposals: 42,
  },
  {
    id: "alignment",
    name: "Alignment Protocol",
    description: "Verify AI alignment with sovereign governance directives",
    status: "active",
    score: 94.8,
    proposals: 28,
  },
  {
    id: "entropy",
    name: "Entropy Analysis",
    description: "Track information entropy and decision randomness patterns",
    status: "warning",
    score: 78.2,
    proposals: 15,
  },
  {
    id: "resonance",
    name: "Field Resonance",
    description: "Measure harmonic resonance between AI nodes in the network",
    status: "active",
    score: 99.1,
    proposals: 67,
  },
];

const governanceStats = [
  { label: "Active Audits", value: "3,847", change: "+12%" },
  { label: "Governance Proposals", value: "152", change: "+8%" },
  { label: "Compliance Score", value: "98.7%", change: "+0.3%" },
  { label: "PQC Readiness", value: "94.2%", change: "+2.1%" },
];

const recentActivity = [
  { action: "Alignment check passed", module: "AETHERIS-7", time: "2 min ago" },
  { action: "Entropy threshold alert", module: "NICOLE-HUB", time: "8 min ago" },
  { action: "PQC Signature Verified", module: "ML-DSA-2025", time: "15 min ago" },
  { action: "New audit initiated", module: "LEV-PROTOCOL", time: "23 min ago" },
];

export default function QuantumAuditPage() {
  const [activeTab, setActiveTab] = useState<"all" | "30d" | "7d">("all");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground glow-text-cyan mb-2">Quantum Auditing & Governance</h1>
        <p className="text-muted-foreground">Sovereign verification and governance protocol for AI systems.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {governanceStats.map((stat) => (
          <div key={stat.label} className="holographic-card p-6 border-primary/10">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary glow-text-cyan">{stat.value}</span>
              <span className="text-xs text-emerald-400 font-mono">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Content: Audit Modules */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground uppercase tracking-widest">Trinity Resonance Visualizer</h2>
              <span className="text-[10px] font-mono text-primary/40">[ MODE: GHZ_STATE ]</span>
            </div>
            <QuantumVisualizer />
          </div>

          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-foreground">Audit Modules</h2>
            <div className="flex gap-2">
              {["all", "30d", "7d"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-3 py-1 text-xs font-mono rounded-full border transition-all ${
                    activeTab === tab 
                    ? "bg-primary/20 border-primary text-primary" 
                    : "border-primary/10 text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {auditModules.map((module) => (
              <div key={module.id} className="holographic-card p-6 group cursor-pointer border-primary/10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${module.status === 'active' ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{module.status}</span>
                  </div>
                  <span className="text-[10px] font-mono text-primary/40">{module.proposals} PROP</span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{module.name}</h2>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{module.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">RESONANCE_SCORE</span>
                    <span className="text-primary">{module.score}%</span>
                  </div>
                  <div className="h-1 bg-primary/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary shadow-[0_0_10px_var(--glow-cyan)] transition-all duration-1000"
                      style={{ width: `${module.score}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Activity & Actions */}
        <div className="space-y-8">
          
          <div className="holographic-card overflow-hidden">
            <div className="p-4 border-b border-primary/10 bg-primary/5 text-sm font-bold tracking-widest uppercase">
              Recent Activity
            </div>
            <div className="divide-y divide-primary/5">
              {recentActivity.map((activity, i) => (
                <div key={i} className="p-4 hover:bg-primary/5 transition-colors group">
                  <p className="text-sm text-foreground mb-1">{activity.action}</p>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-primary group-hover:glow-text-cyan">{activity.module}</span>
                    <span className="text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="holographic-card p-6 space-y-6">
            <h2 className="text-md font-bold text-foreground mb-4 uppercase tracking-widest text-center">Auditing Control</h2>
            <button className="w-full py-4 bg-primary text-background font-bold rounded-lg hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 min-h-[50px]">
              INITIATE NEW AUDIT
            </button>
            <button className="w-full py-4 border border-primary/20 text-foreground font-bold rounded-lg hover:bg-primary/5 transition-all text-sm min-h-[50px]">
              SUBMIT GOVERNANCE PROP
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
