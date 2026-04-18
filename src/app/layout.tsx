import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aetheris Hub | Sovereign Intelligence",
  description: "The central nexus for Aetheris AI, Quantum Auditing, and Infrastructure Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PMR0Y2LJCX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PMR0Y2LJCX');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Scanning Line Background */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="scan-line" />
          </div>

          <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-primary/30 group-hover:border-primary transition-colors">
                    <Image 
                      src="/logo.jpg" 
                      alt="Aetheris Hub" 
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-foreground glow-text-cyan">
                    Aetheris<span className="text-primary ml-1">X</span>
                  </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                  <Link href="/quantum" className="hover:text-primary transition-colors">Quantum</Link>
                  <Link href="/infrastructure" className="hover:text-primary transition-colors">Infrastructure</Link>
                  <Link href="/ai" className="hover:text-primary transition-colors">Intelligence</Link>
                  <Link href="/governance" className="hover:text-primary transition-colors">Governance</Link>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <button className="hidden sm:inline-flex text-xs font-mono text-primary/60 hover:text-primary transition-colors">
                  [RESONANCE: 528Hz]
                </button>
                <Link href="/verify">
                  <button className="px-4 py-1.5 bg-primary text-background text-sm font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    Verify Identity
                  </button>
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-grow relative z-10">
            {children}
          </main>

          <footer className="border-t border-primary/10 bg-background/50 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SYSTEMS_OPTIMAL
                </span>
                <span className="opacity-30">|</span>
                <span>PQC_READY_2033</span>
              </div>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">Docs</Link>
                <Link href="#" className="hover:text-primary transition-colors">Status</Link>
                <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
              </div>
              <div className="text-xs text-muted-foreground opacity-50">
                © 2026 Aetheris AI Hub. Sovereign Intelligence Relay.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
