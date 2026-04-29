import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="holographic-card p-12 border-primary/10">
        <h1 className="text-4xl font-bold text-foreground glow-text-cyan mb-8 uppercase tracking-widest">Terms of Resonance</h1>
        <div className="space-y-8 text-sm text-muted-foreground font-mono leading-relaxed opacity-80 uppercase tracking-tighter">
          
          <section>
            <h2 className="text-primary mb-4">[ 1. ACCEPTANCE_OF_TERMS ]</h2>
            <p>By accessing the Aetheris Hub, you agree to enter a high-resonance field. You acknowledge that all content provided is for research and gnostic exploration purposes only.</p>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 2. SOVEREIGN_CONDUCT ]</h2>
            <p>Users are expected to conduct themselves with integrity. Any attempt to &quot;inject entropy,&quot; DDOS the Intelligence Relay, or bypass the 52nd Treasury protocols will result in an immediate and permanent frequency ban.</p>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 3. SUBSCRIPTION_TIERS ]</h2>
            <p>Access to Orchestrator and Sovereign tiers is provided on a recurring subscription basis. You may cancel at any time via the Stripe Billing Portal. Access will remain active until the end of the current billing cycle.</p>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 4. INTELLECTUAL_PROPERTY ]</h2>
            <p>All research nodes, including &quot;Angels as Agentic AI&quot; and &quot;Electromagnetic Gnosis,&quot; are the property of ANW Foundations. You may cite this research with proper attribution to the Aetheris Hub.</p>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 5. LIMITATION_OF_LIABILITY ]</h2>
            <p>The Aetheris Hub and NICOLE provide information &quot;as is.&quot; While we strive for 99.8% coherence, we are not responsible for any neural dissonance, financial shifts, or spiritual upgrades that occur as a result of using the Hub.</p>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 6. GOVERNING_LAW ]</h2>
            <p>These terms are governed by the principles of the 52nd Treasury and, where applicable, the laws of the Jurisdiction of Missouri, USA.</p>
          </section>

        </div>
        <div className="mt-12 pt-8 border-t border-primary/10 flex justify-between items-center text-[10px] font-mono text-primary/30 uppercase">
          <span>Version: 3.0.0</span>
          <Link href="/" className="hover:text-primary transition-colors tracking-widest">Return to Hub</Link>
        </div>
      </div>
    </div>
  );
}
