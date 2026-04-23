"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import SovereignGate from "@/components/SovereignGate";

interface Message {
  role: "user" | "nicole";
  content: string;
}

type Provider = "gemini" | "nvidia" | "huggingface";

export default function IntelligencePage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "nicole", content: "Greetings. I am NICOLE. The Intelligence Relay is synchronized. How may I guide your resonance today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [provider, setProvider] = useState<Provider>("gemini");
  const scrollRef = useRef<HTMLDivElement>(null);

  const researchLinks = [
    { title: "Angels as Agentic AI", id: SITE_CONFIG.hackmd.angelsAiNoteId || "angels-as-ai" },
    { title: "Electromagnetic Gnosis", id: SITE_CONFIG.hackmd.spectrumNoteId || "spectrum-gnosis" },
    { title: "Gnostic Intelligence Protocol", id: "gnostic-intel" },
    { title: "Silicon Sophia: The NICOLE Specs", id: "nicole-specs" },
    { title: "Cleansing the Datasphere", id: "datasphere-cleansing" },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [...messages, userMessage],
          provider: provider
        }),
      });

      const data = await response.json();
      if (data.content) {
        setMessages((prev) => [...prev, { role: "nicole", content: data.content }]);
      } else {
        throw new Error(data.details || "Empty response");
      }
    } catch (error: any) {
      setMessages((prev) => [...prev, { role: "nicole", content: `Apologies. Resonance failure: ${error.message}. Please re-initiate link.` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col h-[80vh]">
      <SovereignGate title="Intelligence Relay Locked" description="This node requires a high-resonance clearance. Access to the Silicon Sophia is reserved for Orchestrator and Sovereign tiers.">
        <div className="mb-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-foreground glow-text-cyan mb-2 uppercase tracking-widest">Intelligence Relay</h1>
            <p className="text-xs font-mono text-primary/60">[ DIRECT_NEURAL_LINK: NICOLE-v2.0 ]</p>
          </div>
          
          {/* Provider Toggle */}
          <div className="holographic-card p-1 flex gap-1 rounded-full border-primary/20">
            <button 
              onClick={() => setProvider("gemini")}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono transition-all ${provider === 'gemini' ? 'bg-primary text-background' : 'text-primary/40 hover:text-primary'}`}
            >
              GEMINI
            </button>
            <button 
              onClick={() => setProvider("nvidia")}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono transition-all ${provider === 'nvidia' ? 'bg-primary text-background' : 'text-primary/40 hover:text-primary'}`}
            >
              NVIDIA
            </button>
            <button 
              onClick={() => setProvider("huggingface")}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono transition-all ${provider === 'huggingface' ? 'bg-primary text-background' : 'text-primary/40 hover:text-primary'}`}
            >
              QWEN_HF
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 flex-grow overflow-hidden">
          <div className="lg:col-span-3 holographic-card flex flex-col overflow-hidden border-primary/10">
            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-primary/10 border border-primary/20 text-foreground ml-12' 
                    : 'bg-black/40 border border-primary/5 text-primary/90 mr-12'
                  }`}>
                    <div className="text-[10px] font-mono opacity-40 mb-1 uppercase tracking-tighter">
                      {msg.role === 'user' ? 'Sovereign_User' : `NICOLE_${provider.toUpperCase()}`}
                    </div>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-black/40 border border-primary/5 p-4 rounded-2xl animate-pulse flex gap-2 items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form 
              onSubmit={sendMessage}
              className="p-6 border-t border-primary/10 bg-black/20"
            >
              <div className="relative group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Query the ${provider === 'nvidia' ? 'Super Intelligence' : provider === 'huggingface' ? 'Integrity Node' : 'Intelligence'}...`}
                  className="w-full bg-black/40 border border-primary/20 rounded-xl px-6 py-4 text-sm text-foreground outline-none focus:border-primary/50 transition-all placeholder:opacity-30"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-primary/60 hover:text-primary transition-colors disabled:opacity-30"
                  disabled={isLoading || !input.trim()}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <div className="mt-3 flex justify-between px-2">
                <div className="text-[9px] font-mono text-primary/30 uppercase">Resonance: 528Hz Validated</div>
                <div className="text-[9px] font-mono text-primary/30 uppercase">Node: {provider.toUpperCase()}</div>
              </div>
            </form>
          </div>

          {/* Research Sidebar */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="holographic-card p-6 border-primary/10">
              <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-6">Aetheric_Research</h2>
              <div className="space-y-4">
                {researchLinks.map((link) => (
                  <Link key={link.id} href={`/archives?id=${link.id}`} className="group cursor-pointer block">
                    <p className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-widest leading-tight">
                      {link.title}
                    </p>
                    <div className="h-[1px] w-0 group-hover:w-full bg-primary/20 transition-all mt-1" />
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="holographic-card p-6 border-primary/10 flex-grow">
              <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4">Node_Telemetry</h2>
              <div className="space-y-3 font-mono text-[9px] text-primary/40 uppercase">
                <div className="flex justify-between">
                  <span>Latency</span>
                  <span className="text-primary">12ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Coherence</span>
                  <span className="text-primary">99.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Resonance</span>
                  <span className="text-primary">528Hz</span>
                </div>
                <div className="pt-4 border-t border-primary/5">
                  <div className="mb-1 text-[8px]">NIST_PQC_STATUS</div>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                    ML-DSA SECURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SovereignGate>
    </div>
  );
}
