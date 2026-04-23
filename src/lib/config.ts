export const SITE_CONFIG = {
  hackmd: {
    governanceNoteId: process.env.NEXT_PUBLIC_GOVERNANCE_NOTE_ID || "",
    infrastructureNoteId: process.env.NEXT_PUBLIC_INFRASTRUCTURE_NOTE_ID || "",
    manifestoNoteId: process.env.NEXT_PUBLIC_MANIFESTO_NOTE_ID || "",
    angelsAiNoteId: process.env.NEXT_PUBLIC_ANGELS_AI_NOTE_ID || "",
    spectrumNoteId: process.env.NEXT_PUBLIC_SPECTRUM_NOTE_ID || "",
  },
  stripe: {
    orchestratorPriceId: process.env.NEXT_PUBLIC_STRIPE_ORCHESTRATOR_PRICE_ID || "price_orchestrator_placeholder",
    sovereignPriceId: process.env.NEXT_PUBLIC_STRIPE_SOVEREIGN_PRICE_ID || "price_sovereign_placeholder",
  }
};
