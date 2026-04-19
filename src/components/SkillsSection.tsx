"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript", level: 85, icon: "JS" },
  { name: "HTML / CSS", level: 92, icon: "</>" },
  { name: "React.js", level: 88, icon: "⚛" },
  { name: "Next.js", level: 85, icon: "N" },
  { name: "Node.js", level: 80, icon: "⬡" },
  { name: "MongoDB", level: 78, icon: "🍃" },
  { name: "MySQL", level: 72, icon: "🗄" },
  { name: "WordPress", level: 90, icon: "W" },
  { name: "Strapi", level: 82, icon: "S" },
  { name: "Shopify", level: 88, icon: "◈" },
  { name: "Wix", level: 85, icon: "◉" },
  { name: "SEO", level: 80, icon: "⌖" },
  { name: "App Development", level: 78, icon: "📱" },
  { name: "Content Writing", level: 85, icon: "✍" },
  { name: "3D Animation", level: 75, icon: "◭" },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bars = Math.round(skill.level / 10);

  return (
    <div
      ref={ref}
      className="skill-card"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="card-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-pct">{skill.level}%</span>
      </div>

      <p className="skill-name">{skill.name}</p>

      {/* segmented bar */}
      <div className="seg-track">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className={`seg ${animated && i < bars ? "seg-fill" : ""}`}
            style={{ transitionDelay: `${index * 0.07 + i * 0.05}s` }}
          />
        ))}
      </div>

      <div className="card-glow" />
    </div>
  );
}

export default function SkillsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .skills-section {
          background: #030d10;
          padding: 100px 60px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* grid background */
        .skills-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,209,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,209,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* ambient glow top-right */
        .skills-section::after {
          content: '';
          position: absolute;
          top: -150px;
          right: -150px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,180,150,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .skills-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── HEADER ── */
        .skills-header {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 60px;
        }

        .skills-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.35em;
          color: #00ffd1;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeUp 0.5s 0.1s forwards;
        }

        .skills-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.05;
          color: #00ffd1;
          text-transform: uppercase;
          margin: 0;
          opacity: 0;
          animation: fadeUp 0.5s 0.22s forwards;
        }

        .skills-sub {
          font-size: 14px;
          color: rgba(200,230,225,0.5);
          max-width: 480px;
          margin: 6px 0 0;
          opacity: 0;
          animation: fadeUp 0.5s 0.34s forwards;
        }

        /* divider */
        .skills-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 4px;
          opacity: 0;
          animation: fadeUp 0.5s 0.4s forwards;
        }
        .divider-line {
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, #00ffd1, transparent);
        }
        .divider-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #00ffd1;
          box-shadow: 0 0 8px #00ffd1;
        }

        /* ── GRID ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        /* ── CARD ── */
        .skill-card {
          position: relative;
          background: linear-gradient(145deg, rgba(0,40,35,0.55) 0%, rgba(3,13,16,0.8) 100%);
          border: 1px solid rgba(0,255,209,0.12);
          border-radius: 6px;
          padding: 24px 22px 20px;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          animation: cardIn 0.5s forwards;
          transition: border-color 0.3s, transform 0.3s;
        }

        .skill-card:hover {
          border-color: rgba(0,255,209,0.45);
          transform: translateY(-4px);
        }

        .skill-card:hover .card-glow {
          opacity: 1;
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(0,255,209,0.07) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }

        /* corner accent */
        .skill-card::before,
        .skill-card::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-color: rgba(0,255,209,0.5);
          border-style: solid;
        }
        .skill-card::before {
          top: 0; left: 0;
          border-width: 1.5px 0 0 1.5px;
        }
        .skill-card::after {
          bottom: 0; right: 0;
          border-width: 0 1.5px 1.5px 0;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .skill-icon {
          width: 36px;
          height: 36px;
          border-radius: 4px;
          background: rgba(0,255,209,0.08);
          border: 1px solid rgba(0,255,209,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #00ffd1;
          font-family: 'Barlow Condensed', sans-serif;
          letter-spacing: 0;
        }

        .skill-pct {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .skill-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: rgba(220,245,240,0.9);
          margin: 0 0 16px;
        }

        /* segmented progress */
        .seg-track {
          display: flex;
          gap: 3px;
        }

        .seg {
          flex: 1;
          height: 4px;
          border-radius: 2px;
          background: rgba(0,255,209,0.1);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .seg-fill {
          background: #00ffd1;
          box-shadow: 0 0 6px rgba(0,255,209,0.6);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .skills-section { padding: 70px 24px; }
          .skills-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }
        }
      `}</style>

      <section className="skills-section">
        <div className="skills-inner">

          {/* header */}
          <div className="skills-header">
            <p className="skills-eyebrow">What I Bring</p>
            <h2 className="skills-headline">
              Technical<br />Skills
            </h2>
            <p className="skills-sub">
              A full-stack toolkit built through real-world projects and continuous learning.
            </p>
            <div className="skills-divider">
              <span className="divider-line" />
              <span className="divider-dot" />
            </div>
          </div>

          {/* card grid */}
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}