"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "nicole";
  content: string;
}

export default function IntelligencePage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "nicole", content: "Greetings. I am NICOLE. The Intelligence Relay is synchronized. How may I guide your resonance today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      if (data.content) {
        setMessages((prev) => [...prev, { role: "nicole", content: data.content }]);
      } else {
        throw new Error("Empty response");
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "nicole", content: "Apologies. A momentary entropy spike has interrupted the relay. Please re-initiate resonance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col h-[80vh]">
      
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground glow-text-cyan mb-2 uppercase tracking-widest">Intelligence Relay</h1>
        <p className="text-xs font-mono text-primary/60">[ DIRECT_NEURAL_LINK: NICOLE-v2.0 ]</p>
      </div>

      <div className="flex-grow holographic-card flex flex-col overflow-hidden border-primary/10">
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
                  {msg.role === 'user' ? 'Sovereign_User' : 'NICOLE_INTEL'}
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
              placeholder="Query the Intelligence..."
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
            <div className="text-[9px] font-mono text-primary/30 uppercase">PQC: ML-KEM-768</div>
          </div>
        </form>
      </div>

    </div>
  );
}
