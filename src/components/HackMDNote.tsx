"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface HackMDNoteProps {
  noteId: string;
}

export default function HackMDNote({ noteId }: HackMDNoteProps) {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await fetch(`/api/archives?id=${noteId}`);
        const data = await response.json();
        if (data.content) {
          setContent(data.content);
          setTitle(data.title);
        } else {
          setError("Note content not found");
        }
      } catch (err) {
        setError("Failed to fetch note");
      } finally {
        setIsLoading(false);
      }
    }
    fetchNote();
  }, [noteId]);

  if (isLoading) return <div className="h-48 w-full animate-pulse bg-primary/5 border border-primary/10 rounded-xl" />;
  if (error) return <div className="p-4 text-red-500 font-mono text-xs border border-red-500/20 rounded-xl bg-red-500/5 uppercase">{error}</div>;

  return (
    <div className="prose prose-invert max-w-none">
      {title && <h2 className="text-2xl font-bold mb-6 text-primary glow-text-cyan uppercase tracking-widest">{title}</h2>}
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            <span className="block my-8 relative group">
              <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <img 
                src={src} 
                alt={alt} 
                className="relative rounded-lg border border-primary/20 shadow-2xl w-full object-cover" 
              />
              {alt && <span className="block mt-2 text-[10px] font-mono text-primary/40 uppercase tracking-widest text-center">{alt}</span>}
            </span>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
