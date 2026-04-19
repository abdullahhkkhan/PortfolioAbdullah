export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-6 text-center md:mb-10">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </header>
  );
}
