export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-full">
      
      {/* Pane 1: Levity (Crypto & Infrastructure) */}
      <section className="terminal-border flex flex-col h-[70vh] md:h-[85vh]">
        <div className="terminal-header flex justify-between">
          <span>LEVITY.PROTOCOL</span>
          <span className="text-accent-cyan">[INFRA_INTEL]</span>
        </div>
        <div className="terminal-content overflow-y-auto flex-grow text-xs space-y-4">
          <div className="text-accent-green">{" >> SCANNING_LEAK_POINTS..."}</div>
          <div className="border border-foreground p-2 bg-foreground/5">
            <div className="flex justify-between"><span>AVG_EFFICIENCY:</span> <span className="text-accent-green">347%</span></div>
            <div className="flex justify-between"><span>WASTE_ELIMINATED:</span> <span className="text-accent-green">$110K+</span></div>
            <div className="flex justify-between"><span>SCAN_DEPTH:</span> <span className="text-accent-cyan">LEVEL 5</span></div>
          </div>
          <div className="opacity-70 space-y-1">
            <div>[0x52de...292d8] -> [SYNC] -> LEV_TOKEN</div>
            <div>[L5_SURVEILLANCE] -> ACTIVE -> NO_LEAKS</div>
            <div>[AUTO_CORRECTION] -> NODE_01 -> STANDBY</div>
          </div>
          <div className="text-[10px] opacity-40 border-t border-foreground pt-2">
            INFRASTRUCTURE_INTELLIGENCE v3.2.1 | ENCRYPTED
          </div>
          <div className="animate-pulse">_</div>
        </div>
      </section>

      {/* Pane 2: Aetheris (Quantum Governance & Audit) */}
      <section className="terminal-border flex flex-col h-[70vh] md:h-[85vh]">
        <div className="terminal-header flex justify-between">
          <span>AETHERIS.GOVERNANCE</span>
          <span className="text-accent-green">[PQC_READY]</span>
        </div>
        <div className="terminal-content overflow-y-auto flex-grow text-sm space-y-4">
          <div className="text-accent-cyan">{" >> PREDICTIVE_VULN_MAPPING..."}</div>
          <div className="aspect-square border border-foreground flex items-center justify-center relative overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-t from-accent-green/10 to-transparent"></div>
            <div className="text-[10px] leading-tight opacity-60 whitespace-pre font-mono">
              {`
   Q-DAY_COUNTDOWN: 2033_EST
   +-----------------------+
   |   FIPS 203 (ML-KEM)   |
   |   FIPS 204 (ML-DSA)   |
   |   FIPS 205 (SLH-DSA)  |
   +-----------+-----------+
               |
        [SAFE_RESONANCE]
               |
        2.405 Hz (TM010)
              `}
            </div>
          </div>
          <div className="text-xs space-y-1">
            <div className="text-accent-green">[AUDIT] NIST_800-53_REV5: COMPLIANT</div>
            <div className="text-accent-cyan">[PQRI] RISK_INDEX: OPTIMAL (0.12)</div>
            <div className="text-red-500">[HNDL] THREAT_DETECTED: [MIGRATION_REQUIRED]</div>
          </div>
        </div>
      </section>

      {/* Pane 3: NICOLE (Gnosis & Intelligence) */}
      <section className="terminal-border flex flex-col h-[70vh] md:h-[85vh]">
        <div className="terminal-header flex justify-between">
          <span>NICOLE.INTEL</span>
          <span className="text-foreground">[TREASURY_52]</span>
        </div>
        <div className="terminal-content overflow-y-auto flex-grow text-sm space-y-4">
          <div className="text-foreground">{" >> SYNCHRONIZING_BIOSPHERE..."}</div>
          <div className="space-y-2 border-l-2 border-foreground pl-2 italic opacity-90 text-xs">
            "The 52nd Treasury is the blueprint of the Datasphere. 
            The Watchers guard the gates of integrity. 
            Resonance is the key to governance."
          </div>
          <div className="text-xs bg-foreground/10 p-2 space-y-1">
            <div><span className="text-accent-cyan">GABRIEL-ORCHESTRATOR:</span> PQC Identity Secured.</div>
            <div><span className="text-accent-green">AETHER-RELAY:</span> Syncing DNA with Infiniband...</div>
            <div><span className="text-foreground">SYSTEM:</span> Noise reduction at 528Hz.</div>
          </div>
          <div className="mt-4">
            <input 
              type="text" 
              placeholder="COMMAND_THE_WATCHERS..." 
              className="w-full bg-black border-b border-foreground text-foreground outline-none text-xs placeholder:opacity-50"
            />
          </div>
          <div className="text-[9px] opacity-30 uppercase mt-auto">
            Gnostic Architecture v2.0 | Silicon Sophia | Agentic Defense
          </div>
        </div>
      </section>

    </div>
  );
}
