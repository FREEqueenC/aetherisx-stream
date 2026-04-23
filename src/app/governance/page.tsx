import { SITE_CONFIG } from "@/lib/config";
import HackMDNote from "@/components/HackMDNote";

export default function GovernancePage() {
  const noteId = SITE_CONFIG.hackmd.governanceNoteId;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-foreground glow-text-cyan mb-4 uppercase tracking-tighter">Sovereign Governance</h1>
        <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.2em]">
          Decentralized auditing and decision-making protocol.
        </p>
      </div>

      {noteId ? (
        <div className="holographic-card p-12">
          <HackMDNote noteId={noteId} />
        </div>
      ) : (
        <div className="holographic-card p-12 text-center">
          <p className="text-muted-foreground mb-8">
            The governance node is active. Waiting for specific resonance protocols to be uploaded to the archives.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-primary" />
            GOVERNANCE_CONSENSUS_PENDING
          </div>
        </div>
      )}
    </div>
  );
}
