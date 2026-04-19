"use client";
 
import Link from "next/link";
import { useEffect, useRef } from "react";
 
const PARTICLES = [
  { top: "2%",  left: "50%" },
  { top: "50%", left: "2%"  },
  { top: "50%", left: "98%" },
  { top: "98%", left: "50%" },
  { top: "20%", left: "82%" },
  { top: "80%", left: "18%" },
  { top: "15%", left: "18%" },
  { top: "82%", left: "78%" },
];
 
const RING_BASE: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "50%",
  borderStyle: "solid",
};
 
export default function HeroSection() {
  const spinRef  = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const dotRef   = useRef<HTMLDivElement>(null);
 
  // JS-driven ring rotations (no CSS class conflicts)
  useEffect(() => {
    let a1 = 0, a2 = 0, a3 = 0;
    let raf: number;
    const tick = () => {
      a1 += 0.18;
      a2 -= 0.28;
      a3 += 0.22;
      if (spinRef.current)
        spinRef.current.style.transform = `translate(-50%,-50%) rotate(${a1}deg)`;
      if (innerRef.current)
        innerRef.current.style.transform = `translate(-50%,-50%) rotate(${a2}deg)`;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(-50%,-50%) rotate(${a3}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
 
  // Inject only keyframes + font — no class selectors that Tailwind can interfere with
  useEffect(() => {
    const id = "hero-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      @keyframes _hFadeUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes _hFadeIn  { from{opacity:0} to{opacity:1} }
      @keyframes _hWheel   { 0%{opacity:1;transform:translateY(0)} 100%{opacity:0;transform:translateY(10px)} }
      @keyframes _hBlob1   { from{opacity:.7;transform:scale(1)} to{opacity:1;transform:scale(1.12)} }
      @keyframes _hBlob2   { from{opacity:.6;transform:scale(1)} to{opacity:.9;transform:scale(1.1)} }
      ._hEy  { animation: _hFadeUp .5s  .10s both }
      ._hH1  { animation: _hFadeUp .6s  .22s both }
      ._hDiv { animation: _hFadeUp .5s  .36s both }
      ._hSub { animation: _hFadeUp .5s  .48s both }
      ._hCta { animation: _hFadeUp .5s  .62s both }
      ._hScr { animation: _hFadeIn .6s 1.10s both }
      ._hWhl { animation: _hWheel 1.8s ease-in-out infinite }
      ._hBl1 { animation: _hBlob1 5s ease-in-out infinite alternate }
      ._hBl2 { animation: _hBlob2 7s ease-in-out infinite alternate-reverse }
    `;
    document.head.appendChild(s);
  }, []);
 
  return (
    <section style={{
      position: "relative",
      minHeight: "calc(100vh - 72px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 24px",
      textAlign: "center",
      background: "#030d10",
      overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
      boxSizing: "border-box",
    }}>
 
      {/* ── grid lines ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(0,255,209,0.035) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(0,255,209,0.035) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
 
      {/* ── ambient blobs ── */}
      <div className="_hBl1" style={{
        position: "absolute", borderRadius: "50%", pointerEvents: "none",
        width: 420, height: 420, top: "5%", left: "-10%",
        background: "rgba(0,200,160,0.13)", filter: "blur(100px)",
      }} />
      <div className="_hBl2" style={{
        position: "absolute", borderRadius: "50%", pointerEvents: "none",
        width: 500, height: 500, top: "10%", right: "-8%",
        background: "rgba(0,100,180,0.09)", filter: "blur(130px)",
      }} />
 
      {/* ── corner circuit lines ── */}
      <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <g stroke="rgba(0,255,209,0.13)" strokeWidth="1" fill="none">
          <polyline points="0,180 80,180 110,150 200,150" />
          <circle cx="200" cy="150" r="3" fill="rgba(0,255,209,0.4)" />
          <polyline points="0,600 100,600 130,570 220,570" />
          <circle cx="220" cy="570" r="3" fill="rgba(0,255,209,0.3)" />
          <polyline points="1440,200 1340,200 1310,230 1220,230" />
          <circle cx="1220" cy="230" r="3" fill="rgba(0,255,209,0.4)" />
          <polyline points="1440,620 1340,620 1310,590 1240,590" />
          <circle cx="1240" cy="590" r="3" fill="rgba(0,255,209,0.3)" />
          <polyline points="300,0 300,60 330,90 330,140" />
          <circle cx="330" cy="140" r="3" fill="rgba(0,255,209,0.3)" />
          <polyline points="1100,0 1100,80 1070,110 1070,150" />
          <circle cx="1070" cy="150" r="3" fill="rgba(0,255,209,0.3)" />
        </g>
      </svg>
 
      {/* ── static rings ── */}
      <div style={{ ...RING_BASE, width: 500, height: 500, transform: "translate(-50%,-50%)", border: "1px solid rgba(0,255,209,0.12)" }} />
      <div style={{ ...RING_BASE, width: 400, height: 400, transform: "translate(-50%,-50%)", border: "1px solid rgba(0,255,209,0.20)" }} />
 
      {/* ── JS-spinning rings ── */}
      <div ref={spinRef}  style={{ ...RING_BASE, width: 460, height: 460, border: "1px dashed rgba(0,255,209,0.28)", transform: "translate(-50%,-50%)" }} />
      <div ref={innerRef} style={{ ...RING_BASE, width: 340, height: 340, border: "1px dashed rgba(0,255,209,0.20)", transform: "translate(-50%,-50%)" }} />
 
      {/* ── rotating particle ring ── */}
      <div ref={dotRef} style={{ ...RING_BASE, width: 530, height: 530, border: "none", transform: "translate(-50%,-50%)" }}>
        {PARTICLES.map((pos, i) => (
          <span key={i} style={{
            position: "absolute",
            top: pos.top, left: pos.left,
            transform: "translate(-50%,-50%)",
            display: "block", width: 8, height: 8,
            borderRadius: "50%", background: "#00ffd1",
            boxShadow: "0 0 10px rgba(0,255,209,0.9), 0 0 20px rgba(0,255,209,0.4)",
          }} />
        ))}
      </div>
 
      {/* ── main content ── */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: 860, width: "100%",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 20,
      }}>
 
        <p className="_hEy" style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 12, fontWeight: 700,
          letterSpacing: "0.38em", textTransform: "uppercase",
          color: "#00ffd1", margin: 0,
        }}>
          Full Stack Developer
        </p>
 
        <h1 className="_hH1" style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 900, lineHeight: 1,
          textTransform: "uppercase",
          color: "#00ffd1", margin: 0,
          textShadow: "0 0 40px rgba(0,255,209,0.35), 0 0 80px rgba(0,255,209,0.15)",
        }}>
          Designing<br />the Future
        </h1>
 
        {/* thin accent divider */}
        <div className="_hDiv" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, #00ffd1)", display: "block" }} />
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00ffd1", boxShadow: "0 0 8px #00ffd1", display: "block" }} />
          <span style={{ height: 1, width: 50, background: "linear-gradient(90deg, #00ffd1, transparent)", display: "block" }} />
        </div>
 
        <p className="_hSub" style={{
          fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.75,
          color: "rgba(200,230,225,0.7)", maxWidth: 560, margin: 0,
        }}>
          Visual Storyteller · Creative Technologist · Digital Alchemist.<br />
          Building immersive, interactive experiences with cutting-edge MERN stack
          development and next-generation digital solutions.
        </p>
 
        <div className="_hCta" style={{
          display: "flex", flexWrap: "wrap",
          gap: 16, justifyContent: "center", marginTop: 8,
        }}>
          <Link href="/services"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 36px",
              background: "transparent",
              border: "1.5px solid #00ffd1",
              color: "#00ffd1",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 13, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              borderRadius: 3, textDecoration: "none",
              boxShadow: "0 0 18px rgba(0,255,209,0.15)",
              transition: "background .25s, box-shadow .25s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,255,209,0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(0,255,209,0.3)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(0,255,209,0.15)";
            }}
          >
            Explore Services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
 
          <Link href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 36px",
              background: "transparent",
              border: "1px solid rgba(0,255,209,0.28)",
              color: "rgba(200,230,225,0.75)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 13, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              borderRadius: 3, textDecoration: "none",
              transition: "border-color .25s, color .25s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,209,0.55)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,209,0.28)";
              (e.currentTarget as HTMLElement).style.color = "rgba(200,230,225,0.75)";
            }}
          >
            Get In Touch
          </Link>
        </div>
      </div>
 
      {/* ── scroll indicator ── */}
      <div className="_hScr" style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <div style={{
          width: 20, height: 32,
          border: "1.5px solid rgba(0,255,209,0.3)",
          borderRadius: 10,
          display: "flex", justifyContent: "center", paddingTop: 6,
        }}>
          <div className="_hWhl" style={{
            width: 3, height: 6, borderRadius: 2, background: "#00ffd1",
          }} />
        </div>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 10, letterSpacing: "0.3em",
          textTransform: "uppercase", color: "rgba(0,255,209,0.4)",
        }}>
          Scroll
        </span>
      </div>
    </section>
  );
}