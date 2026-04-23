"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HackMDNote from "@/components/HackMDNote";

interface Note {
  id: string;
  title: string;
  publishLink: string;
  updatedAt: number;
}

function ArchivesContent() {
  const searchParams = useSearchParams();
  const selectedNoteId = searchParams.get("id");
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await fetch("/api/archives");
        const data = await response.json();
        if (Array.isArray(data)) {
          setNotes(data);
        }
      } catch (error) {
        console.error("Archive fetch failed", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNotes();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-4 uppercase tracking-tighter glow-text-cyan">
          {selectedNoteId ? "Document View" : "Sovereign Archives"}
        </h1>
        <p className="text-muted-foreground font-mono uppercase text-[10px] tracking-[0.5em]">
          {selectedNoteId ? `Node: ${selectedNoteId}` : "Living Documents of the 52nd Treasury"}
        </p>
      </div>

      {selectedNoteId ? (
        <div className="holographic-card p-12 max-w-4xl mx-auto">
          <HackMDNote noteId={selectedNoteId} />
          <div className="mt-12 pt-8 border-t border-primary/10">
            <button 
              onClick={() => window.history.back()}
              className="text-[10px] font-mono text-primary/40 hover:text-primary uppercase tracking-widest flex items-center gap-2"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Archives
            </button>
          </div>
        </div>
      ) : isLoading ? (
        <div className="grid lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="holographic-card p-8 h-48 animate-pulse border-primary/10" />
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {notes.length > 0 ? (
            notes.map((note) => (
              <a 
                key={note.id} 
                href={note.publishLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="holographic-card p-8 group hover:border-primary/40 transition-all block"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 text-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-mono text-primary/30 uppercase">
                    {new Date(note.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors uppercase tracking-tight">
                  {note.title || "Untitled Manifesto"}
                </h2>
                <div className="mt-4 flex items-center gap-2 text-[9px] font-mono text-primary/40 uppercase tracking-widest">
                  <span className="w-1 h-1 bg-primary rounded-full animate-ping" />
                  Link Active
                </div>
              </a>
            ))
          ) : (
            <div className="lg:col-span-3 holographic-card p-12 text-center border-primary/10">
              <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">The archives are currently silent. Re-syncing gnostic nodes...</p>
            </div>
          )}
        </div>
      )}

      <div className="mt-24 text-center">
        <div className="inline-block p-1 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-md">
          <p className="px-4 py-1 text-[9px] font-mono text-primary/40 uppercase tracking-[0.3em]">Collaborative Workspace: HackMD Sovereign Link</p>
        </div>
      </div>
    </div>
  );
}

export default function ArchivesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ArchivesContent />
    </Suspense>
  );
}
