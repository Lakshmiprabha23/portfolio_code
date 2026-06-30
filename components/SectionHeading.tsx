export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-text-secondary max-w-xl">{description}</p>}
    </div>
  );
}
