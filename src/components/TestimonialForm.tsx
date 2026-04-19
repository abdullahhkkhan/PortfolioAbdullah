"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, quote }),
      });

      if (!response.ok) throw new Error("Unable to submit testimonial");

      setStatus("success");
      setName("");
      setRole("");
      setQuote("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unexpected error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-xl border border-slate-200 p-5 dark:border-slate-700 dark:bg-slate-900">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 outline-none"
      />
      <input
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Your role"
        required
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 outline-none"
      />
      <textarea
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        placeholder="Share your testimonial"
        required
        rows={4}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 outline-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Submit Testimonial"}
      </button>
      {status === "success" && <p className="text-sm text-green-600">Thanks! Your testimonial is submitted.</p>}
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
