"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Intelligence", href: "/ai" },
  { name: "Archives", href: "/archives" },
  { name: "Upgrade", href: "/upgrade" },
];

export default function Navbar() {
  const pathname = usePathname();

  // Don't show navbar on home page since it has the large grid
  if (pathname === "/") return null;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-2xl">
      <div className="holographic-card px-6 py-3 flex items-center justify-between border-primary/20 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-primary/30 group-hover:border-primary transition-colors">
            <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
          </div>
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] hidden sm:block">Aetheris_Hub</span>
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`text-[9px] font-mono uppercase tracking-widest transition-all ${
                pathname === item.href 
                ? "text-primary glow-text-cyan" 
                : "text-primary/40 hover:text-primary/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[8px] font-mono text-emerald-500/60 uppercase">Link_Active</span>
        </div>
      </div>
    </nav>
  );
}
