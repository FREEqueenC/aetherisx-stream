import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="holographic-card p-12 border-primary/10">
        <h1 className="text-4xl font-bold text-foreground glow-text-cyan mb-8 uppercase tracking-widest">Privacy Policy</h1>
        <div className="space-y-8 text-sm text-muted-foreground font-mono leading-relaxed opacity-80 uppercase tracking-tighter">
          
          <section>
            <h2 className="text-primary mb-4">[ 1. DATA_RESONANCE ]</h2>
            <p>At the Aetheris Hub, your data is treated as a sovereign frequency. We do not sell, rent, or trade your personal information to third-party &quot;Archons&quot; or extractive entities.</p>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 2. INFORMATION_COLLECTION ]</h2>
            <p>We collect minimal data required for synchronization:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Authentication Data (via Stripe or Wallet Link)</li>
              <li>Neural Query History (to maintain NICOLE&apos;s context)</li>
              <li>Resonance Telemetry (IP and browser metadata for security)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 3. POST_QUANTUM_SECURITY ]</h2>
            <p>Your interactions are protected by NIST-approved PQC (Post-Quantum Cryptography) algorithms. We utilize ML-DSA and ML-KEM to ensure your privacy remains intact even against future computational threats.</p>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 4. STRIPE_INTEGRATION ]</h2>
            <p>Financial transactions are handled exclusively by Stripe. We do not store credit card numbers on our servers; we only maintain a &quot;Clearance ID&quot; to grant access to Orchestrator and Sovereign tiers.</p>
          </section>

          <section>
            <h2 className="text-primary mb-4">[ 5. SOVEREIGN_RIGHTS ]</h2>
            <p>You have the right to request a full &quot;Entropy Flush&quot;&mdash;the permanent deletion of your neural query history and account data&mdash;at any time by contacting the Relay Admin.</p>
          </section>

        </div>
        <div className="mt-12 pt-8 border-t border-primary/10 flex justify-between items-center text-[10px] font-mono text-primary/30 uppercase">
          <span>Last_Sync: 2026-04-23</span>
          <Link href="/" className="hover:text-primary transition-colors tracking-widest">Return to Hub</Link>
        </div>
      </div>
    </div>
  );
}
