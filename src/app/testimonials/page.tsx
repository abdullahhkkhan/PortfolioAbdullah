import NavBar from "@/components/NavBar";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  { name: "Alice Nguyen", role: "Product Manager", quote: "Great collaboration and fast delivery." },
  { name: "Derek Shaw", role: "CTO", quote: "Excellent code quality and communication." },
  { name: "Priya Patel", role: "Designer", quote: "Beautiful UI and user-friendly experience." },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <NavBar />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <SectionHeading title="Testimonials" subtitle="What people say" />

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </main>
  );
}
