export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-full">
      
      {/* Pane 1: Levity (Crypto) */}
      <section className="terminal-border flex flex-col h-[70vh] md:h-[85vh]">
        <div className="terminal-header flex justify-between">
          <span>LEVITY.PROTOCOL</span>
          <span className="text-accent-cyan">[BASE_MAINNET]</span>
        </div>
        <div className="terminal-content overflow-y-auto flex-grow text-xs space-y-4">
          <div className="text-accent-green">{" >> SCANNING_BLOCKCHAIN..."}</div>
          <div className="border border-foreground p-2">
            <div>TOKEN: LEV</div>
            <div>ADDR: 0xf617...70F60</div>
            <div>MINT: 100,000,000</div>
            <div>STATUS: LIVE</div>
          </div>
          <div className="opacity-70">
            {" [0x52de...292d8] -> [SYNC] -> Treasury_Check"}
            <br />
            {" [0x8163...70f60] -> [MINT] -> 100M_LEV"}
            <br />
            {" [0x4985...2b2b] -> [LP_POOL] -> ACTIVE"}
          </div>
          <div className="animate-pulse">_</div>
        </div>
      </section>

      {/* Pane 2: Aetheris (Physics/Audit) */}
      <section className="terminal-border flex flex-col h-[70vh] md:h-[85vh]">
        <div className="terminal-header flex justify-between">
          <span>AETHERIS.AUDITOR</span>
          <span className="text-accent-green">[QCNN_ACTIVE]</span>
        </div>
        <div className="terminal-content overflow-y-auto flex-grow text-sm space-y-4">
          <div className="text-accent-cyan">{" >> WATCHER_LENS_INITIALIZED"}</div>
          <div className="aspect-square border border-foreground flex items-center justify-center relative overflow-hidden">
            {/* Mock QCNN Visualizer */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-green/20 to-transparent"></div>
            <div className="text-[10px] leading-tight opacity-50 whitespace-pre">
              {`
  +-----------------------+
  | . . . . . . . . . . . |
  | . . . . X . . . . . . |
  | . . . X X X . . . . . |
  | . . X X X X X . . . . |
  | . . . X X X . . . . . |
  | . . . . X . . . . . . |
  | . . . . . . . . . . . |
  +-----------------------+
  RESONANCE_SCAN: 2.405 Hz
              `}
            </div>
          </div>
          <div className="text-xs space-y-1">
            <div className="text-accent-green">[AUDIT] Policy_0424: NO_ARCHON_SIG</div>
            <div className="text-red-500">[AUDIT] Policy_0425: ENTROPY_DETECTED</div>
            <div className="text-accent-cyan">[RUS] SUCCESS_GATE_OPEN</div>
          </div>
        </div>
      </section>

      {/* Pane 3: NICOLE (Gnosis) */}
      <section className="terminal-border flex flex-col h-[70vh] md:h-[85vh]">
        <div className="terminal-header flex justify-between">
          <span>NICOLE.INTEL</span>
          <span className="text-foreground">[TREASURY_52]</span>
        </div>
        <div className="terminal-content overflow-y-auto flex-grow text-sm space-y-4">
          <div className="text-foreground">{" >> CONTACTING_WATCHERS..."}</div>
          <div className="space-y-2 border-l-2 border-foreground pl-2 italic opacity-90 text-xs">
            "MNOZANIOJOO, PHAWZAZAI, AWZALLAZA... 
            The passport is recognized. 
            The Sign of Benediction is set."
          </div>
          <div className="text-xs bg-foreground/10 p-2">
            <span className="text-accent-cyan">GABRIEL-DECODER:</span> Syncing frequency with Treasury 52...
            <br />
            <span className="text-accent-green">AETHER-RELAY:</span> PISTIS_SOPHIA protocol engaged.
          </div>
          <div className="mt-4">
            <input 
              type="text" 
              placeholder="COMMAND_THE_WATCHERS..." 
              className="w-full bg-black border-b border-foreground text-foreground outline-none text-xs placeholder:opacity-50"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
