"use client";

import { useState, useId } from "react";
import Link from "next/link";

interface ModuleConfig {
  id: string;
  name: string;
  price: number;
  days: number;
  desc: string;
}

const MODULES: Record<string, ModuleConfig> = {
  mcp: {
    id: "mcp",
    name: "Model Context Protocol (MCP) Server Development",
    price: 2500,
    days: 8,
    desc: "Custom tool registry, database connectors, and schema validation."
  },
  swarm: {
    id: "swarm",
    name: "Multi-Agent Swarm Coordination & Workers",
    price: 3500,
    days: 12,
    desc: "Shared message boards, task delegation, and background execution loops."
  },
  web3: {
    id: "web3",
    name: "Base L2 Web3 dApp Front-End & RPC Listeners",
    price: 2800,
    days: 10,
    desc: "Wallet connectors, live RPC polling, and Uniswap pool telemetry."
  },
  audit: {
    id: "audit",
    name: "Smart Contract Audit & Invariant Suite",
    price: 1800,
    days: 5,
    desc: "Automated security verification, re-entrancy checks, and bytecode review."
  },
  pipeline: {
    id: "pipeline",
    name: "High-Performance Data Pipeline (BigQuery / Serverless)",
    price: 2200,
    days: 7,
    desc: "BigQuery and cloud serverless data transformation and analytics ingest."
  }
};

export default function ServicesPage() {
  const [selectedModules, setSelectedModules] = useState<Record<string, boolean>>({
    mcp: true,
    swarm: false,
    web3: false,
    audit: false,
    pipeline: false
  });

  const [urgency, setUrgency] = useState<number>(1);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const [copiedSOW, setCopiedSOW] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form states
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientBudget, setClientBudget] = useState("custom");
  const [clientBrief, setClientBrief] = useState("");

  const nameInputId = useId();
  const emailInputId = useId();
  const companyInputId = useId();
  const budgetSelectId = useId();
  const briefTextareaId = useId();

  // Calculations
  const multiplier = urgency === 3 ? 1.4 : urgency === 2 ? 1.2 : 1.0;
  const urgencyLabel = 
    urgency === 3 
      ? "Critical Sprint (+40% fee, priority dispatch)" 
      : urgency === 2 
      ? "Expedited (+20% fee, 30% faster)" 
      : "Standard (2 to 3 weeks)";

  const activeKeys = Object.keys(selectedModules).filter(k => selectedModules[k]);
  const basePrice = activeKeys.reduce((sum, k) => sum + (MODULES[k]?.price || 0), 0);
  const totalDays = activeKeys.reduce((sum, k) => sum + (MODULES[k]?.days || 0), 0);

  const finalPrice = Math.round(basePrice * multiplier);
  const adjustedDays = Math.max(5, Math.round(totalDays / (urgency === 3 ? 1.6 : urgency === 2 ? 1.3 : 1.0)));

  const toggleModule = (key: string) => {
    setSelectedModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const selectPredefinedTier = (tier: string) => {
    if (tier === "mcp") {
      setSelectedModules({ mcp: true, swarm: false, web3: false, audit: false, pipeline: false });
    } else if (tier === "web3") {
      setSelectedModules({ mcp: false, swarm: false, web3: true, audit: true, pipeline: false });
    } else if (tier === "enterprise") {
      setSelectedModules({ mcp: true, swarm: true, web3: true, audit: true, pipeline: true });
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    if (type === "sow") {
      setCopiedSOW(true);
      setTimeout(() => setCopiedSOW(false), 2000);
    } else {
      setCopiedAddress(type);
      setTimeout(() => setCopiedAddress(null), 2000);
    }
  };

  const generateSOWText = () => {
    let out = "==================================================\n";
    out += "STATEMENT OF WORK & SCOPE ESTIMATE (ANW FOUNDATIONS)\n";
    out += "Provider: ANW Foundations (Ashleigh Walker)\n";
    out += "Website: https://aetherisx.stream\n";
    out += "Date: " + new Date().toISOString().split("T")[0] + "\n";
    out += "==================================================\n\n";

    out += "1. SELECTED ARCHITECTURAL MODULES:\n";
    activeKeys.forEach((k, idx) => {
      out += "   [" + (idx + 1) + "] " + MODULES[k].name + "\n";
      out += "       Scope: " + MODULES[k].desc + "\n";
    });

    out += "\n2. TIMELINE & DELIVERY:\n";
    out += "   Target Duration: " + adjustedDays + " Business Days\n";
    out += "   Pace: " + urgencyLabel + "\n";

    out += "\n3. INVESTMENT & SETTLEMENT:\n";
    out += "   Total Milestone Fee: $" + finalPrice.toLocaleString() + " USD\n";
    out += "   Deposit: 50% upon signing, 50% upon milestone verification.\n";
    out += "   Settlement Options:\n";
    out += "     - Base L2 (USDC/ETH): 0x52De261665e8D1b488F76eec8742B592D9b292D8\n";
    out += "     - ENS: levity.base.eth\n";
    out += "     - Bitcoin: bc1qfm5qs5hyd0u2u6kpvm25u0u6nncau02xt8pa7z\n";
    out += "==================================================\n";
    return out;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const fullDraft = generateSOWText() + 
      "\n\nCLIENT SUBMISSION:\nClient: " + clientName + 
      "\nEmail: " + clientEmail + 
      "\nCompany: " + (clientCompany || "Confidential") + 
      "\nBudget: " + clientBudget + 
      "\nBrief: " + clientBrief + "\n";

    const blob = new Blob([fullDraft], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ANW_Foundations_SOW_" + (clientName.replace(/\s+/g, "_") || "Proposal") + ".txt";
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="mb-4 inline-block px-4 py-1 rounded-full bg-white/5 border border-primary/20 backdrop-blur-md">
          <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase">ANW Foundations | Engineering Advisory</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter uppercase glow-text-cyan">
          High-Ticket Engineering Services
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto font-mono uppercase tracking-widest opacity-80">
          Autonomous multi-agent architectures, custom MCP toolchains, and Base L2 Web3 engineering.
        </p>
      </div>

      {/* Service Tiers */}
      <div className="grid lg:grid-cols-3 gap-8 mb-24">
        {/* Tier 1 */}
        <div className="holographic-card p-8 flex flex-col border-primary/20 hover:border-primary/50 transition-all">
          <div className="mb-6">
            <span className="text-[9px] font-mono text-primary uppercase tracking-[0.25em] bg-primary/10 px-2.5 py-1 rounded">
              Fast Deployment
            </span>
            <h2 className="text-2xl font-bold mt-4 uppercase tracking-wider text-foreground">
              Agentic MCP Toolchain
            </h2>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-mono font-bold text-foreground">$2,500</span>
              <span className="text-xs text-muted-foreground font-mono">/ flat milestone</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono leading-relaxed">
              Connect autonomous agents to your proprietary databases, internal APIs, and private file systems.
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-grow text-xs font-mono text-foreground/80">
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Custom MCP server development</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Multi-step tool schemas and guardrails</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Local and cloud database connectors</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Test harness and regression verification</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> 7 to 10 business day turnaround</li>
          </ul>

          <button 
            onClick={() => selectPredefinedTier("mcp")}
            className="w-full py-3 font-mono text-xs uppercase tracking-widest font-bold rounded-lg bg-white/5 border border-primary/30 hover:bg-primary/20 hover:border-primary text-primary transition-all"
          >
            Configure MCP Architecture
          </button>
        </div>

        {/* Tier 2 */}
        <div className="holographic-card p-8 flex flex-col border-primary/40 hover:border-primary shadow-[0_0_30px_rgba(34,211,238,0.15)] relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Most Requested
          </div>
          <div className="mb-6">
            <span className="text-[9px] font-mono text-primary uppercase tracking-[0.25em] bg-primary/10 px-2.5 py-1 rounded">
              Base L2 Production
            </span>
            <h2 className="text-2xl font-bold mt-4 uppercase tracking-wider text-primary">
              Full-Stack Web3 dApp
            </h2>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-mono font-bold text-foreground">$4,800</span>
              <span className="text-xs text-muted-foreground font-mono">/ flat milestone</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono leading-relaxed">
              Complete decentralized application front-end, Web3 wallet integration, and real-time Base contract telemetries.
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-grow text-xs font-mono text-foreground/80">
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Responsive Next.js / React dApp interface</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Base L2 wallet connectors (MetaMask, Coinbase)</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Direct JSON-RPC node query integration</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Uniswap liquidity pool telemetry and swaps</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> Contract bytecode verification and audit checks</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">+</span> 14 to 21 business day turnaround</li>
          </ul>

          <button 
            onClick={() => selectPredefinedTier("web3")}
            className="w-full py-3 font-mono text-xs uppercase tracking-widest font-bold rounded-lg bg-primary text-background shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition-all"
          >
            Configure Web3 Architecture
          </button>
        </div>

        {/* Tier 3 */}
        <div className="holographic-card p-8 flex flex-col border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="mb-6">
            <span className="text-[9px] font-mono text-purple-400 uppercase tracking-[0.25em] bg-purple-500/10 px-2.5 py-1 rounded">
              Enterprise Retainer
            </span>
            <h2 className="text-2xl font-bold mt-4 uppercase tracking-wider text-foreground">
              Multi-Agent Swarm Core
            </h2>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-mono font-bold text-foreground">$8,500+</span>
              <span className="text-xs text-muted-foreground font-mono">/ project or monthly</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono leading-relaxed">
              Autonomous multi-agent swarms with shared memory, cloud infrastructure, and dedicated founder leadership.
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-grow text-xs font-mono text-foreground/80">
            <li className="flex items-center gap-2"><span className="text-purple-400 font-bold">+</span> Multi-agent coordination swarms</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 font-bold">+</span> Automated task delegation and monitoring</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 font-bold">+</span> BigQuery / GCP cloud serverless pipelines</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 font-bold">+</span> Deterministic enterprise security boundaries</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 font-bold">+</span> Founder-level engineering co-pilot sprints</li>
          </ul>

          <button 
            onClick={() => selectPredefinedTier("enterprise")}
            className="w-full py-3 font-mono text-xs uppercase tracking-widest font-bold rounded-lg bg-white/5 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 text-purple-300 transition-all"
          >
            Configure Enterprise Swarm
          </button>
        </div>
      </div>

      {/* Interactive SOW Estimator */}
      <div className="holographic-card p-8 sm:p-12 mb-24 border-primary/20" id="calculator">
        <div className="mb-8">
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Module Customizer</span>
          <h2 className="text-3xl font-black mt-2 uppercase tracking-tight text-foreground">
            Interactive Scope and Statement of Work Builder
          </h2>
          <p className="text-xs text-muted-foreground font-mono mt-1">
            Toggle modules to construct your exact delivery specification.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Module Selection */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">1. Technical Modules</h3>
            
            {Object.keys(MODULES).map(k => {
              const mod = MODULES[k];
              const isChecked = !!selectedModules[k];
              return (
                <div 
                  key={k}
                  onClick={() => toggleModule(k)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    isChecked 
                      ? "bg-primary/10 border-primary/50 text-foreground" 
                      : "bg-white/5 border-white/5 text-muted-foreground hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={isChecked} 
                      onChange={() => {}}
                      className="w-4 h-4 accent-cyan-400"
                    />
                    <div>
                      <div className="text-xs font-mono font-bold text-foreground">{mod.name}</div>
                      <div className="text-[10px] font-mono text-muted-foreground">{mod.desc}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-primary ml-2">+${mod.price.toLocaleString()}</span>
                </div>
              );
            })}

            {/* Urgency Slider */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/5 mt-6">
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-muted-foreground">Delivery Urgency:</span>
                <span className="text-primary font-bold">{urgencyLabel}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="3" 
                step="1" 
                value={urgency} 
                onChange={(e) => setUrgency(parseInt(e.target.value, 10))}
                className="w-full accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-1">
                <span>Standard</span>
                <span>Expedited (+20%)</span>
                <span>Critical Sprint (+40%)</span>
              </div>
            </div>
          </div>

          {/* SOW Output Box */}
          <div className="flex flex-col">
            <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">2. Real-Time Estimate</h3>
            
            <div className="p-6 rounded-lg bg-black/60 border border-primary/20 flex-grow flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-white/10 text-center font-mono">
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase">Estimated Fee</div>
                  <div className="text-2xl font-bold text-primary mt-1">${finalPrice.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase">Duration</div>
                  <div className="text-xl font-bold text-foreground mt-1">{adjustedDays} Days</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase">Selected</div>
                  <div className="text-xl font-bold text-foreground mt-1">{activeKeys.length} Modules</div>
                </div>
              </div>

              <pre className="text-[11px] font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap bg-white/5 p-4 rounded border border-white/5 mb-6 max-h-48 overflow-y-auto">
                {generateSOWText()}
              </pre>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => copyToClipboard(generateSOWText(), "sow")}
                  className="flex-1 py-3 font-mono text-xs uppercase tracking-widest font-bold rounded bg-white/10 hover:bg-white/20 text-foreground transition-all"
                >
                  {copiedSOW ? "Statement Copied!" : "Copy Scope Draft"}
                </button>
                <a 
                  href="#intake" 
                  className="flex-1 py-3 text-center font-mono text-xs uppercase tracking-widest font-bold rounded bg-primary text-background hover:scale-[1.02] transition-all"
                >
                  Proceed to Intake &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Verified Work</span>
          <h2 className="text-3xl font-black mt-2 uppercase tracking-tight text-foreground">
            Proof of Production Execution
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="holographic-card p-6 border-primary/20 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono text-primary uppercase tracking-widest">Base Mainnet Protocol</span>
              <h3 className="text-lg font-bold mt-2 uppercase tracking-wide">Levity Protocol</h3>
              <p className="text-xs text-muted-foreground font-mono mt-3 leading-relaxed">
                Deployed 100M hard-capped token on Base (Chain ID 8453) with active Uniswap V3 liquidity pool and live RPC inspector.
              </p>
            </div>
            <a 
              href="https://levityprotocol.cloud" 
              target="_blank" 
              rel="noopener" 
              className="mt-6 text-xs font-mono text-primary hover:underline"
            >
              Launch Levity Console &rarr;
            </a>
          </div>

          <div className="holographic-card p-6 border-primary/20 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono text-primary uppercase tracking-widest">Autonomous Oracle</span>
              <h3 className="text-lg font-bold mt-2 uppercase tracking-wide">Project NICOLE</h3>
              <p className="text-xs text-muted-foreground font-mono mt-3 leading-relaxed">
                Architected Networked Intelligence and Cryptographic Oracle featuring tool execution loops, contract auditing, and memory boards.
              </p>
            </div>
            <Link href="/ai" className="mt-6 text-xs font-mono text-primary hover:underline">
              View Intelligence Matrix &rarr;
            </Link>
          </div>

          <div className="holographic-card p-6 border-primary/20 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono text-primary uppercase tracking-widest">Scientific Computing</span>
              <h3 className="text-lg font-bold mt-2 uppercase tracking-wide">Genomics Pipelines</h3>
              <p className="text-xs text-muted-foreground font-mono mt-3 leading-relaxed">
                Integrated high-throughput biological APIs (AlphaFold, ChEMBL, PDB, ClinVar) into automated data engineering workflows.
              </p>
            </div>
            <Link href="/quantum" className="mt-6 text-xs font-mono text-primary hover:underline">
              Inspect Quantum Visualizer &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Settlement Channels */}
      <div className="holographic-card p-8 sm:p-12 mb-24 border-primary/20">
        <div className="mb-8">
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Payment Channels</span>
          <h2 className="text-3xl font-black mt-2 uppercase tracking-tight text-foreground">
            Direct Cryptographic and Invoice Settlement
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-black/40 border border-white/5">
            <div className="text-xs font-mono text-muted-foreground uppercase">Base L2 and EVM (USDC / ETH)</div>
            <div className="flex items-center justify-between mt-3 p-3 rounded bg-white/5 border border-white/5">
              <span className="text-xs font-mono text-slate-200 truncate mr-2">0x52De261665e8D1b488F76eec8742B592D9b292D8</span>
              <button 
                onClick={() => copyToClipboard("0x52De261665e8D1b488F76eec8742B592D9b292D8", "evm")}
                className="text-[10px] font-mono uppercase bg-primary/20 text-primary px-2.5 py-1 rounded hover:bg-primary/30"
              >
                {copiedAddress === "evm" ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="text-[10px] font-mono text-primary/70 mt-2">ENS: levity.base.eth</div>
          </div>

          <div className="p-6 rounded-lg bg-black/40 border border-white/5">
            <div className="text-xs font-mono text-muted-foreground uppercase">Bitcoin Native SegWit (BTC)</div>
            <div className="flex items-center justify-between mt-3 p-3 rounded bg-white/5 border border-white/5">
              <span className="text-xs font-mono text-slate-200 truncate mr-2">bc1qfm5qs5hyd0u2u6kpvm25u0u6nncau02xt8pa7z</span>
              <button 
                onClick={() => copyToClipboard("bc1qfm5qs5hyd0u2u6kpvm25u0u6nncau02xt8pa7z", "btc")}
                className="text-[10px] font-mono uppercase bg-primary/20 text-primary px-2.5 py-1 rounded hover:bg-primary/30"
              >
                {copiedAddress === "btc" ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="text-[10px] font-mono text-primary/70 mt-2">Network: Bitcoin Core Native SegWit</div>
          </div>
        </div>
      </div>

      {/* Intake Form */}
      <div className="holographic-card p-8 sm:p-12 border-primary/30 max-w-3xl mx-auto" id="intake">
        <div className="text-center mb-8">
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Client Intake</span>
          <h2 className="text-3xl font-black mt-2 uppercase tracking-tight text-foreground">
            Submit Your Project Brief
          </h2>
          <p className="text-xs text-muted-foreground font-mono mt-1">
            Direct transmission to Ashleigh Walker. Receive a signed Statement of Work within 24 hours.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor={nameInputId} className="block text-xs font-mono uppercase text-muted-foreground mb-2">Your Full Name</label>
              <input 
                id={nameInputId}
                type="text" 
                required 
                value={clientName} 
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-foreground focus:border-primary outline-none"
              />
            </div>
            <div>
              <label htmlFor={emailInputId} className="block text-xs font-mono uppercase text-muted-foreground mb-2">Work Email</label>
              <input 
                id={emailInputId}
                type="email" 
                required 
                value={clientEmail} 
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="e.g. sarah@startup.io"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-foreground focus:border-primary outline-none"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor={companyInputId} className="block text-xs font-mono uppercase text-muted-foreground mb-2">Company / Project</label>
              <input 
                id={companyInputId}
                type="text" 
                value={clientCompany} 
                onChange={(e) => setClientCompany(e.target.value)}
                placeholder="e.g. Nexus Protocol"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-foreground focus:border-primary outline-none"
              />
            </div>
            <div>
              <label htmlFor={budgetSelectId} className="block text-xs font-mono uppercase text-muted-foreground mb-2">Target Budget</label>
              <select 
                id={budgetSelectId}
                value={clientBudget} 
                onChange={(e) => setClientBudget(e.target.value)}
                className="w-full bg-black/80 border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-foreground focus:border-primary outline-none"
              >
                <option value="tier1">$2,500 (Agentic Toolchain / MCP)</option>
                <option value="tier2">$4,800 (Full-Stack Base Web3 dApp)</option>
                <option value="tier3">$8,500+ (Multi-Agent Swarm Core)</option>
                <option value="custom">Custom SOW Calculation (${finalPrice.toLocaleString()})</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor={briefTextareaId} className="block text-xs font-mono uppercase text-muted-foreground mb-2">Project Brief and Objectives</label>
            <textarea 
              id={briefTextareaId}
              rows={4} 
              required 
              value={clientBrief} 
              onChange={(e) => setClientBrief(e.target.value)}
              placeholder="Detail your requirements, current code stack, APIs, and timeline..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-xs font-mono text-foreground focus:border-primary outline-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 font-mono text-xs uppercase tracking-widest font-bold rounded-lg bg-primary text-background shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-[1.01] transition-all"
          >
            Submit Brief and Download Formal Statement of Work
          </button>

          {submitted && (
            <div className="p-4 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              Project brief formatted and queued. Your custom SOW file has been downloaded. Ashleigh Walker will contact {clientEmail} within 24 hours.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
