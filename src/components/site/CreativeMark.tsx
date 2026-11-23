const CreativeMark = () => (
  <svg
    aria-labelledby="creative-mark-title creative-mark-description"
    className="h-full w-full"
    fill="none"
    role="img"
    viewBox="0 0 620 500"
  >
    <title id="creative-mark-title">Build, create, and grow</title>
    <desc id="creative-mark-description">A code frame, a video frame, and a rising line connected as one digital workflow.</desc>
    <g className="text-border" stroke="currentColor" strokeWidth="1">
      <path d="M68 78h484v330H68z" />
      <path d="M68 118h484M104 98h8M128 98h8M152 98h8" />
      <path d="M92 164h142v112H92zM262 164h138v112H262zM426 164h100v112H426z" />
      <path d="M92 302h434M92 338h248M92 366h388" />
    </g>
    <g className="text-brand-blue" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
      <path d="m126 210 20-18-20-18M190 174l-20 36" />
      <path d="M284 184h94v72h-94zM296 242l18-18 14 10 22-26 18 20" />
      <path d="m448 244 28-28 18 8 27-38" />
      <path d="M503 186h18v18" />
    </g>
    <g className="text-brand-violet" fill="currentColor">
      <circle cx="126" cy="310" r="4" />
      <circle cx="262" cy="310" r="4" />
      <circle cx="402" cy="310" r="4" />
      <circle cx="92" cy="338" r="3" />
    </g>
    <text className="fill-foreground font-mono text-[11px]" x="92" y="150">01 / BUILD</text>
    <text className="fill-foreground font-mono text-[11px]" x="262" y="150">02 / CREATE</text>
    <text className="fill-foreground font-mono text-[11px]" x="426" y="150">03 / GROW</text>
    <text className="fill-muted-foreground font-mono text-[10px]" x="92" y="398">IDEA</text>
    <text className="fill-muted-foreground font-mono text-[10px]" x="474" y="398">IMPACT</text>
  </svg>
);

export default CreativeMark;