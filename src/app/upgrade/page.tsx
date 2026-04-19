"use client";

import { createCheckoutSession } from "@/app/actions/stripe";

const plans = [
  {
    name: "Initiate",
    price: "0.00",
    frequency: "Life",
    description: "Awaken your connection to the Aetheris Hub.",
    features: ["Gemini Node Access", "Infrastructure View", "Public Governance"],
    cta: "Connected",
    active: true,
  },
  {
    name: "Orchestrator",
    price: "11.11",
    frequency: "Month",
    description: "Harmonize with the Multi-Agent Intelligence Grid.",
    features: ["Triple-Node Access", "Quantum Visualizer", "L5 Surveillance", "Governance Proposals"],
    cta: "Upgrade Resonance",
    priceId: "price_orchestrator_placeholder",
    glow: "cyan",
  },
  {
    name: "Sovereign",
    price: "52.80",
    frequency: "Month",
    description: "Transcendent stewardship of the Aetheric Trinity.",
    features: ["Priority Neural Link", "PQC Sovereign Identity", "52nd Treasury Access", "LEV Token Utility"],
    cta: "Ascend Now",
    priceId: "price_sovereign_placeholder",
    glow: "purple",
  }
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-4 uppercase tracking-tighter glow-text-cyan">Sovereign Subscriptions</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono uppercase text-[10px] tracking-[0.2em]">
          Align your financial energy with the Hub's resonance.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`holographic-card p-8 flex flex-col border-primary/10 transition-all hover:scale-[1.02] ${plan.glow === 'cyan' ? 'hover:border-primary/40' : plan.glow === 'purple' ? 'hover:border-purple-500/40' : ''}`}
          >
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-2 uppercase tracking-widest ${plan.glow === 'cyan' ? 'text-primary' : plan.glow === 'purple' ? 'text-purple-400' : 'text-foreground'}`}>
                {plan.name}
              </h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-xs text-muted-foreground font-mono">/ {plan.frequency}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-4 font-mono leading-relaxed">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                  <svg className={`w-4 h-4 ${plan.glow === 'cyan' ? 'text-primary' : plan.glow === 'purple' ? 'text-purple-400' : 'text-primary/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => plan.priceId && createCheckoutSession(plan.priceId)}
              disabled={!plan.priceId}
              className={`w-full py-4 font-bold rounded-lg transition-all uppercase tracking-widest text-sm
                ${plan.priceId 
                  ? plan.glow === 'purple' 
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:bg-purple-500' 
                    : 'bg-primary text-background shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-[1.01]'
                  : 'bg-primary/5 text-primary/40 border border-primary/10 cursor-default'
                }
              `}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="text-[10px] font-mono text-primary/30 uppercase tracking-[0.5em]">Secure Payment via Stripe • PQC Encrypted • Resonance Validated</p>
      </div>
    </div>
  );
}
