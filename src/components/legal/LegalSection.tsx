interface LegalSectionProps {
  title: {
    en: string;
    de: string;
  };
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-mono text-white">
        {title.en}{' '}
        <span className="text-purple-400 text-lg">({title.de})</span>
      </h2>
      {children}
    </section>
  );
}