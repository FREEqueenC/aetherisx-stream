import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aetheris Stream | Auditing the Archons",
  description: "Terminal-Gnostic interface for high-resonance physics, crypto auditing, and the 52nd Treasury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
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
      <body>
        <div className="min-h-screen flex flex-col relative z-10">
          <header className="terminal-header flex justify-between items-center p-4 bg-black">
            <div className="flex items-center gap-4">
              <div className="terminal-border p-1 bg-foreground/10">
                <Image 
                  src="/logo.jpg" 
                  alt="Aetheris Logo" 
                  width={40} 
                  height={40} 
                  className="grayscale contrast-125"
                />
              </div>
              <div className="hidden sm:block">SYSTEM: AETHERISX.STREAM v2.0</div>
            </div>
            <div className="text-accent-green animate-pulse">STATUS: RESONATING_528HZ</div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="terminal-header text-[10px] text-center p-2 opacity-50 flex justify-center gap-4">
            <span>[PISTIS SOPHIA]</span>
            <span>[LEV TOKEN]</span>
            <span>[QCNN-AUDIT]</span>
            <span className="hidden sm:inline">[PQC-SAFE]</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
