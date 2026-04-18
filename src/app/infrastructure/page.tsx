export default function InfrastructurePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="holographic-card p-12 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-foreground glow-text-cyan mb-4">Infrastructure Intelligence</h1>
        <p className="text-muted-foreground mb-8">
          Operational surveillance and leak detection across enterprise data grids. 
          Advanced L5 depth monitoring for optimized infrastructure ROI.
        </p>
        <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm animate-pulse">
          <span className="w-2 h-2 rounded-full bg-primary" />
          SYSTEM_NODE_SYNCING
        </div>
      </div>
    </div>
  );
}
