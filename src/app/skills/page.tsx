import NavBar from "@/components/NavBar";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";

const skillData = [
  "Next.js",
  "React",
  "TypeScript",
  "MongoDB",
  "Node.js",
  "Tailwind CSS",
  "REST API",
  "GraphQL",
  "Testing (Jest, Cypress)",
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <NavBar />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <SectionHeading title="Skills" subtitle="Technologies I use" />
        <div className="grid gap-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillData.map((skill) => (
            <Card key={skill} title={skill} />
          ))}
        </div>
      </section>
    </main>
  );
}
