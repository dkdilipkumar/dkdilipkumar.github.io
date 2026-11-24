interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "right";
}

const SectionHeading = ({ eyebrow, title, description, align = "left" }: SectionHeadingProps) => (
  <div className={`max-w-3xl ${align === "right" ? "ml-auto text-right" : ""}`}>
    <p className="eyebrow mb-4">{eyebrow}</p>
    <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">{title}</h2>
    {description && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p>}
  </div>
);

export default SectionHeading;