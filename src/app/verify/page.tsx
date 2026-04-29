"use client";

import { useState } from "react";
import Link from "next/link";

export default function VerifyPage() {
  const [status, setStatus] = useState<"idle" | "scanning" | "verifying" | "complete">("idle");
  const [progress, setStatusProgress] = useState(0);

  const startVerification = () => {
    setStatus("scanning");
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setStatus("verifying");
        setTimeout(() => setStatus("complete"), 2000);
      }
      setStatusProgress(p);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <div className="max-w-md w-full holographic-card p-8 text-center space-y-8 relative overflow-hidden">
        
        {/* Animated Scan Line (Only active during scanning) */}
        {status === "scanning" && (
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="w-full h-1 bg-primary/40 shadow-[0_0_15px_var(--glow-cyan)] animate-[scan_2s_linear_infinite]" />
          </div>
        )}

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground glow-text-cyan uppercase tracking-widest">
            Identity Lock
          </h1>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            [NIST FIPS 204: ML-DSA SECURE]
          </p>
        </div>

        {/* Central Auth Orb */}
        <div className="relative w-48 h-48 mx-auto group">
          <div className={`absolute inset-0 bg-primary/10 blur-[60px] rounded-full transition-all duration-1000 ${status !== 'idle' ? 'scale-125 opacity-50' : 'opacity-20'}`} />
          <div className={`relative z-10 w-full h-full rounded-full border-2 border-primary/20 flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-xl shadow-2xl transition-all duration-500 ${status === 'complete' ? 'border-emerald-500/50' : ''}`}>
            {status === "idle" && (
              <div className="text-primary/40 group-hover:text-primary transition-colors cursor-pointer" onClick={startVerification}>
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 18a10.003 10.003 0 00-4.444-8.318M12 3a10.003 10.003 0 018.193 4.133M12 3v8m8-3h-3M6 12h3m12-3h3M4 9h3m12 6h3M4 15h3" />
                </svg>
              </div>
            )}
            {status === "scanning" && (
              <div className="text-primary font-mono text-xl animate-pulse">
                {Math.round(progress)}%
              </div>
            )}
            {status === "verifying" && (
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <span className="text-[10px] font-mono text-primary animate-pulse">VALIDATING_SIGNATURE</span>
              </div>
            )}
            {status === "complete" && (
              <div className="text-emerald-400 animate-[bounce_0.5s_ease-in-out]">
                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Console Output */}
        <div className="bg-black/60 rounded-lg p-4 border border-primary/5 text-left font-mono text-[10px] min-h-[100px] space-y-1">
          {status === "idle" && <div className="text-primary/40">{" >> READY_FOR_CHALLENGE"}</div>}
          {status !== "idle" && <div className="text-primary/60">{" >> GENERATING_EPHEMERAL_KEY... DONE"}</div>}
          {status === "scanning" && <div className="text-cyan animate-pulse">{" >> CAPTURING_BIOMETRIC_RESONANCE..."}</div>}
          {status === "verifying" && <div className="text-amber-400">{" >> RUNNING_PQC_ALGORITHM: Dilithium-v2..."}</div>}
          {status === "complete" && (
            <>
              <div className="text-emerald-400">{" >> IDENTITY_CONFIRMED: Sovereign_Clearance_L1"}</div>
              <div className="text-primary/60">{" >> TOKEN_EXPIRY: 3600s"}</div>
              <div className="text-primary/60">{" >> HASH: 0x8f2d...a9e3"}</div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4">
          {status === "idle" ? (
            <button 
              onClick={startVerification}
              className="w-full py-4 bg-primary text-background font-bold rounded-xl hover:scale-[1.02] transition-all shadow-xl shadow-primary/20"
            >
              INITIATE PQC VERIFICATION
            </button>
          ) : status === "complete" ? (
            <Link 
              href="/"
              className="block w-full py-4 bg-emerald-500 text-background font-bold rounded-xl hover:scale-[1.02] transition-all shadow-xl shadow-emerald-500/20"
            >
              ENTER THE HUB
            </Link>
          ) : (
            <div className="py-4 text-primary animate-pulse font-mono text-sm tracking-widest">
              [ SECURING_CHANNEL ]
            </div>
          )}
        </div>

        <p className="text-[10px] text-muted-foreground opacity-50 uppercase tracking-tighter">
          By continuing, you agree to Sovereign Data Integrity Protocols.
        </p>
      </div>
    </div>
  );
}
