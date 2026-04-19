"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const traits = [
  { label: "Specialization", value: "MERN Stack & Full Stack Development" },
  { label: "Core Philosophy", value: "Continuous Learning & Team Contribution" },
  { label: "Industry Focus", value: "EDMS & Biotech Innovation" },
  { label: "Future Goals", value: "Scalable & Impactful Engineering" },
];

export default function AboutSection() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;
    let angle = 0;
    const tick = () => {
      angle += 0.3;
      el.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .about-section {
          min-height: 100vh;
          background: #030d10;
          display: flex;
          align-items: center;
          padding: 80px 60px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* grid lines background */
        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,209,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,209,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* ambient glow */
        .about-section::after {
          content: '';
          position: absolute;
          top: -200px;
          left: -200px;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(0,180,150,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT COLUMN ── */
        .about-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.3em;
          color: #00ffd1;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeUp 0.6s 0.1s forwards;
        }

        .headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          line-height: 1.05;
          color: #00ffd1;
          text-transform: uppercase;
          margin: 0;
          opacity: 0;
          animation: fadeUp 0.6s 0.25s forwards;
        }

        .bio {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(200, 230, 225, 0.75);
          max-width: 520px;
          opacity: 0;
          animation: fadeUp 0.6s 0.4s forwards;
        }

        .traits {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          opacity: 0;
          animation: fadeUp 0.6s 0.55s forwards;
        }

        .traits li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: rgba(200,230,225,0.8);
        }

        .trait-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00ffd1;
          margin-top: 6px;
          flex-shrink: 0;
          box-shadow: 0 0 8px #00ffd1;
        }

        .trait-label {
          font-weight: 600;
          color: #fff;
          margin-right: 4px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          padding: 14px 32px;
          border: 1.5px solid rgba(0,255,209,0.5);
          background: transparent;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
          width: fit-content;
          opacity: 0;
          animation: fadeUp 0.6s 0.7s forwards;
        }

        .cta-btn:hover {
          background: rgba(0,255,209,0.08);
          border-color: #00ffd1;
          box-shadow: 0 0 24px rgba(0,255,209,0.2);
        }

        /* ── RIGHT COLUMN ── */
        .about-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          opacity: 0;
          animation: fadeIn 0.8s 0.3s forwards;
        }

        /* outer spinning ring */
        .ring-spinner {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 1px dashed rgba(0,255,209,0.25);
        }

        /* decorative circuit nodes on ring */
        .ring-spinner::before,
        .ring-spinner::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #00ffd1;
          box-shadow: 0 0 10px #00ffd1;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
        }
        .ring-spinner::after {
          top: auto;
          bottom: -5px;
        }

        /* static outer circle */
        .ring-static {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          border: 1px solid rgba(0,255,209,0.15);
        }

        /* inner glow ring */
        .ring-glow {
          position: absolute;
          width: 290px;
          height: 290px;
          border-radius: 50%;
          border: 2px solid rgba(0,255,209,0.35);
          box-shadow:
            0 0 30px rgba(0,255,209,0.15) inset,
            0 0 60px rgba(0,255,209,0.08);
        }

        /* avatar frame */
        .avatar-frame {
          position: relative;
          width: 260px;
          height: 300px;
          border: 1.5px solid rgba(0,255,209,0.4);
          overflow: hidden;
          background: linear-gradient(160deg, #0a2a2a 0%, #030d10 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 40px rgba(0,255,209,0.12),
            inset 0 0 30px rgba(0,255,209,0.05);
        }

        /* placeholder avatar — replace <img> with your real photo */
        .avatar-placeholder {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .avatar-placeholder img {
          object-fit: cover;
        }

        /* corner accents */
        .corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: #00ffd1;
          border-style: solid;
          opacity: 0.7;
        }
        .corner-tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .corner-tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

        /* floating circuit lines */
        .circuit-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .about-section { padding: 60px 24px; }
          .about-inner { grid-template-columns: 1fr; gap: 60px; }
          .about-right { order: -1; }
          .ring-spinner { width: 320px; height: 320px; }
          .ring-static  { width: 270px; height: 270px; }
          .ring-glow    { width: 220px; height: 220px; }
          .avatar-frame { width: 200px; height: 240px; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-inner">

          {/* ── LEFT ── */}
          <div className="about-left">
            <p className="eyebrow">A Deeper Look</p>

            <h2 className="headline">
              Unveiling the<br />
              Full Stack Developer
            </h2>

            <p className="bio">
              Dedicated and proactive Full Stack Developer with hands-on experience in
              full stack development using the MERN stack. Proven ability to manage
              and enhance complex systems, including Electronic Document Management
              Systems (EDMS) and innovative solutions for human cell banks. Adept at
              bug fixing, feature enhancements, and active contribution to product
              development — committed to continuous learning and team success.
            </p>

            <ul className="traits">
              {traits.map((t) => (
                <li key={t.label}>
                  <span className="trait-dot" />
                  <span>
                    <span className="trait-label">{t.label}:</span>
                    {t.value}
                  </span>
                </li>
              ))}
            </ul>

            <button className="cta-btn">
              Get In Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* ── RIGHT ── */}
          <div className="about-right">
            {/* spinning outer ring */}
            <div className="ring-spinner" ref={circleRef} />
            <div className="ring-static" />
            <div className="ring-glow" />

            {/* circuit SVG lines */}
            <svg className="circuit-lines" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <g stroke="rgba(0,255,209,0.18)" strokeWidth="1" fill="none">
                <polyline points="30,200 80,200 100,180 160,180" />
                <circle cx="30" cy="200" r="3" fill="rgba(0,255,209,0.5)" />
                <polyline points="460,280 400,280 380,300 320,300" />
                <circle cx="460" cy="280" r="3" fill="rgba(0,255,209,0.5)" />
                <polyline points="200,30 200,80 220,100 220,140" />
                <circle cx="200" cy="30" r="3" fill="rgba(0,255,209,0.5)" />
                <polyline points="300,460 300,400 280,380 280,340" />
                <circle cx="300" cy="460" r="3" fill="rgba(0,255,209,0.5)" />
              </g>
            </svg>

            {/* avatar frame */}
            <div className="avatar-frame">
              <div className="avatar-placeholder">
                <Image
                  src="/Assets/Abdullah.png"
                  alt="Abdullah"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>

              {/* corner accents */}
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
