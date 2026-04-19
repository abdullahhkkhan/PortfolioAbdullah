"use client";
 
import NavBar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";
 
const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients"      },
  { value: "5+",  label: "Years Experience"   },
  { value: "99%", label: "Client Satisfaction" },
];
 
const CORE_SKILLS = [
  {
    title: "Next.js & React",
    desc: "Fast, SEO-friendly frontends built with modern component architecture and server-side rendering.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: "Node.js & APIs",
    desc: "Server-side logic, REST/GraphQL APIs, JWT authentication, and seamless data integration.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    title: "UI / UX Design",
    desc: "Responsive design systems, polished micro-interactions, and accessible, conversion-focused layouts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
      </svg>
    ),
  },
  {
    title: "DevOps & Hosting",
    desc: "End-to-end deployment, CI/CD pipelines, performance tuning, and production-ready delivery.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];
 
const TIMELINE = [
  { year: "2024", title: "Senior MERN Developer", place: "Freelance & Agency Projects", desc: "Led development of EDMS platforms, cell bank solutions, and enterprise-scale applications." },
  { year: "2023", title: "Full Stack Developer",   place: "Digital Agency",              desc: "Built WordPress, Shopify, and Next.js projects for clients across retail, media, and biotech." },
  { year: "2022", title: "Junior Developer",       place: "Startup",                    desc: "Contributed to product features, bug resolution, and UI improvements using MERN stack." },
  { year: "2020", title: "Started Coding",         place: "Self-taught",                desc: "Began the journey with HTML, CSS, JavaScript, and eventually React and Node.js." },
];
 
function SkillCard({ skill, index }: { skill: typeof CORE_SKILLS[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
 
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: hov
          ? "linear-gradient(145deg,rgba(0,50,40,0.65) 0%,rgba(3,13,16,0.95) 100%)"
          : "linear-gradient(145deg,rgba(0,25,20,0.5) 0%,rgba(3,13,16,0.8) 100%)",
        border: `1px solid ${hov ? "rgba(0,255,209,0.42)" : "rgba(0,255,209,0.1)"}`,
        borderRadius: 6, padding: "26px 24px",
        transition: "all .25s",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 18px 44px rgba(0,0,0,0.4),0 0 24px rgba(0,255,209,0.07)" : "0 4px 18px rgba(0,0,0,0.22)",
        opacity: vis ? 1 : 0,
        animation: vis ? `_abFadeUp .45s ${index * 0.1}s both` : "none",
      }}
    >
      <span style={{ position:"absolute", top:0, left:0, width:10, height:10, borderTop:"1.5px solid rgba(0,255,209,0.5)", borderLeft:"1.5px solid rgba(0,255,209,0.5)" }} />
      <span style={{ position:"absolute", bottom:0, right:0, width:10, height:10, borderBottom:"1.5px solid rgba(0,255,209,0.5)", borderRight:"1.5px solid rgba(0,255,209,0.5)" }} />
      <div style={{
        width: 44, height: 44, borderRadius: 4, marginBottom: 18,
        background: hov ? "rgba(0,255,209,0.12)" : "rgba(0,255,209,0.06)",
        border: `1px solid ${hov ? "rgba(0,255,209,0.4)" : "rgba(0,255,209,0.14)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hov ? "#00ffd1" : "rgba(0,255,209,0.5)",
        transition: "all .25s",
        boxShadow: hov ? "0 0 16px rgba(0,255,209,0.14)" : "none",
      }}>{skill.icon}</div>
      <h4 style={{
        fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 18,
        textTransform: "uppercase", color: hov ? "#00ffd1" : "#e0f5f0",
        margin: "0 0 10px", transition: "color .2s",
        textShadow: hov ? "0 0 18px rgba(0,255,209,0.28)" : "none",
      }}>{skill.title}</h4>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, lineHeight: 1.72, color: "rgba(180,220,215,0.65)", margin: 0 }}>
        {skill.desc}
      </p>
    </div>
  );
}
 
export default function AboutPage() {
  const spinRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const id = "ab-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      @keyframes _abFadeUp { from{opacity:0;transform:translateY(20px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
      @keyframes _abIn     { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      @keyframes _abPulse  { 0%,100%{box-shadow:0 0 6px #00ffd1} 50%{box-shadow:0 0 16px #00ffd1,0 0 28px rgba(0,255,209,0.4)} }
      ._abA { animation: _abIn .5s .10s both }
      ._abB { animation: _abIn .5s .22s both }
      ._abC { animation: _abIn .5s .34s both }
      ._abDot { animation: _abPulse 2.5s ease-in-out infinite }
    `;
    document.head.appendChild(s);
  }, []);
 
  useEffect(() => {
    let a = 0, raf: number;
    const tick = () => {
      a += 0.14;
      if (spinRef.current)
        spinRef.current.style.transform = `translate(-50%,-50%) rotate(${a}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
 
  return (
    <main style={{ minHeight: "100vh", background: "#030d10", fontFamily: "'DM Sans',sans-serif" }}>
      <NavBar />
 
      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "80px 40px 72px", textAlign: "center", borderBottom: "1px solid rgba(0,255,209,0.07)" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(rgba(0,255,209,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,209,0.035) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute", top:-160, left:"50%", transform:"translateX(-50%)", width:600, height:400, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(0,180,150,0.11) 0%,transparent 70%)", pointerEvents:"none" }} />
        {/* circuit lines */}
        <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}>
          <g stroke="rgba(0,255,209,0.1)" strokeWidth="1" fill="none">
            <polyline points="0,130 90,130 120,100 210,100"/><circle cx="210" cy="100" r="3" fill="rgba(0,255,209,0.4)"/>
            <polyline points="0,370 90,370 120,340 200,340"/><circle cx="200" cy="340" r="3" fill="rgba(0,255,209,0.3)"/>
            <polyline points="1440,150 1350,150 1320,180 1240,180"/><circle cx="1240" cy="180" r="3" fill="rgba(0,255,209,0.4)"/>
            <polyline points="1440,370 1360,370 1330,340 1260,340"/><circle cx="1260" cy="340" r="3" fill="rgba(0,255,209,0.3)"/>
          </g>
        </svg>
        {/* rings */}
        <div style={{ position:"absolute", top:"50%", left:"50%", width:340, height:340, borderRadius:"50%", border:"1px solid rgba(0,255,209,0.08)", transform:"translate(-50%,-50%)" }} />
        <div ref={spinRef} style={{ position:"absolute", top:"50%", left:"50%", width:400, height:400, borderRadius:"50%", border:"1px dashed rgba(0,255,209,0.11)", transform:"translate(-50%,-50%)" }} />
 
        <div style={{ position:"relative", zIndex:1 }}>
          <p className="_abA" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:11, letterSpacing:"0.38em", textTransform:"uppercase", color:"#00ffd1", margin:"0 0 12px" }}>A Deeper Look</p>
          <h1 className="_abB" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"clamp(2.8rem,5vw,4.5rem)", textTransform:"uppercase", color:"#00ffd1", margin:"0 0 16px", lineHeight:1, textShadow:"0 0 40px rgba(0,255,209,0.3)" }}>About Me</h1>
          <div className="_abC" style={{ display:"flex", alignItems:"center", gap:12, justifyContent:"center", marginBottom:16 }}>
            <span style={{ height:1, width:50, background:"linear-gradient(90deg,transparent,#00ffd1)", display:"block" }} />
            <span style={{ width:5, height:5, borderRadius:"50%", background:"#00ffd1", boxShadow:"0 0 8px #00ffd1" }} />
            <span style={{ height:1, width:50, background:"linear-gradient(90deg,#00ffd1,transparent)", display:"block" }} />
          </div>
          <p className="_abC" style={{ fontSize:15, color:"rgba(200,230,225,0.6)", maxWidth:500, margin:"0 auto" }}>
            Learn who I am, what I build, and the journey that shaped my craft.
          </p>
        </div>
      </section>
 
      {/* ── BIO + STATS ── */}
      <section style={{ maxWidth:1280, margin:"0 auto", padding:"90px 40px 0", display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:52, alignItems:"start" }}>
 
        {/* left — bio */}
        <div style={{ position:"relative", background:"linear-gradient(145deg,rgba(0,35,28,0.6) 0%,rgba(3,13,16,0.88) 100%)", border:"1px solid rgba(0,255,209,0.12)", borderRadius:8, padding:"40px 40px 36px" }}>
          <span style={{ position:"absolute", top:0, left:0, width:14, height:14, borderTop:"1.5px solid rgba(0,255,209,0.45)", borderLeft:"1.5px solid rgba(0,255,209,0.45)" }} />
          <span style={{ position:"absolute", top:0, right:0, width:14, height:14, borderTop:"1.5px solid rgba(0,255,209,0.45)", borderRight:"1.5px solid rgba(0,255,209,0.45)" }} />
          <span style={{ position:"absolute", bottom:0, left:0, width:14, height:14, borderBottom:"1.5px solid rgba(0,255,209,0.45)", borderLeft:"1.5px solid rgba(0,255,209,0.45)" }} />
          <span style={{ position:"absolute", bottom:0, right:0, width:14, height:14, borderBottom:"1.5px solid rgba(0,255,209,0.45)", borderRight:"1.5px solid rgba(0,255,209,0.45)" }} />
 
          <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.34em", textTransform:"uppercase", color:"rgba(0,255,209,0.5)", margin:"0 0 8px" }}>Who I Am</p>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"clamp(1.5rem,2.5vw,2rem)", textTransform:"uppercase", color:"#00ffd1", margin:"0 0 28px", textShadow:"0 0 24px rgba(0,255,209,0.2)" }}>A Deeper Look Into My Work</h2>
 
          {[
            "I am a full-stack developer specialising in Next.js and MERN-stack applications — creating high-performance web experiences with an eye for user-centred design and clean, scalable code.",
            "My workflow includes reusable component systems, responsive layouts, and polished product delivery. I care about maintainability as much as aesthetics, and ship work that holds up long-term.",
            "I have hands-on experience with complex systems like Electronic Document Management Systems (EDMS) and biotech lab portals, focusing on feature quality, bug resolution, and collaborative delivery.",
            "Committed to continuous learning, I stay current with modern tooling and best practices — building digital products that are both elegant and genuinely reliable.",
          ].map((para, i) => (
            <p key={i} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, lineHeight:1.82, color:"rgba(190,225,218,0.72)", margin:"0 0 16px" }}>{para}</p>
          ))}
 
          {/* availability badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginTop:8, padding:"10px 18px", background:"rgba(0,255,209,0.05)", border:"1px solid rgba(0,255,209,0.15)", borderRadius:4 }}>
            <span className="_abDot" style={{ width:8, height:8, borderRadius:"50%", background:"#00ffd1", display:"block" }} />
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", color:"rgba(0,255,209,0.7)" }}>
              Open to new opportunities
            </span>
          </div>
        </div>
 
        {/* right — stats */}
        <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
          {/* stat cards grid */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {STATS.map((st, i) => (
              <div key={i} style={{
                position:"relative",
                background:"linear-gradient(145deg,rgba(0,35,28,0.55) 0%,rgba(3,13,16,0.85) 100%)",
                border:"1px solid rgba(0,255,209,0.12)",
                borderRadius:6, padding:"28px 22px", textAlign:"center",
              }}>
                <span style={{ position:"absolute", top:0, left:0, width:10, height:10, borderTop:"1.5px solid rgba(0,255,209,0.4)", borderLeft:"1.5px solid rgba(0,255,209,0.4)" }} />
                <span style={{ position:"absolute", bottom:0, right:0, width:10, height:10, borderBottom:"1.5px solid rgba(0,255,209,0.4)", borderRight:"1.5px solid rgba(0,255,209,0.4)" }} />
                <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"clamp(2rem,3.5vw,2.8rem)", color:"#00ffd1", margin:"0 0 6px", textShadow:"0 0 24px rgba(0,255,209,0.4)", lineHeight:1 }}>{st.value}</p>
                <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.26em", textTransform:"uppercase", color:"rgba(0,255,209,0.45)", margin:0 }}>{st.label}</p>
              </div>
            ))}
          </div>
 
          {/* short quote / mission */}
          <div style={{
            position:"relative",
            padding:"28px 28px",
            background:"linear-gradient(135deg,rgba(0,30,24,0.55) 0%,rgba(3,13,16,0.8) 100%)",
            border:"1px solid rgba(0,255,209,0.1)",
            borderRadius:6,
          }}>
            <span style={{ position:"absolute", top:0, left:0, width:12, height:12, borderTop:"1.5px solid rgba(0,255,209,0.35)", borderLeft:"1.5px solid rgba(0,255,209,0.35)" }} />
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" style={{ marginBottom:14, opacity:.25 }}>
              <path d="M0 20V12C0 5.373 3.582 1.56 10.746 0l1.557 2.4C8.84 3.44 7.04 5.627 6.72 9H12V20H0zm16 0V12c0-6.627 3.582-10.44 10.746-12L28.303 2.4C24.84 3.44 23.04 5.627 22.72 9H28V20H16z" fill="#00ffd1"/>
            </svg>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, lineHeight:1.78, color:"rgba(190,225,218,0.65)", margin:"0 0 14px", fontStyle:"italic" }}>
              "I don't just write code — I build systems that solve real problems and experiences that people enjoy using."
            </p>
            <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", color:"rgba(0,255,209,0.45)", margin:0 }}>
              — Core Philosophy
            </p>
          </div>
        </div>
      </section>
 
      {/* ── CORE SKILLS ── */}
      <section style={{ maxWidth:1280, margin:"70px auto 0", padding:"0 40px" }}>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:36, flexWrap:"wrap", gap:16 }}>
          <div>
            <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.38em", textTransform:"uppercase", color:"#00ffd1", margin:"0 0 8px" }}>What I Do Best</p>
            <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"clamp(1.8rem,3vw,2.6rem)", textTransform:"uppercase", color:"#fff", margin:0 }}>Core Skills</h2>
          </div>
          <span style={{ height:1, width:120, background:"linear-gradient(90deg,rgba(0,255,209,0.3),transparent)", display:"block" }} />
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:18 }}>
          {CORE_SKILLS.map((sk, i) => <SkillCard key={sk.title} skill={sk} index={i} />)}
        </div>
      </section>
 
      {/* ── TIMELINE ── */}
      <section style={{ maxWidth:1280, margin:"72px auto 0", padding:"0 40px" }}>
        <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.38em", textTransform:"uppercase", color:"#00ffd1", margin:"0 0 8px" }}>Career Path</p>
        <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"clamp(1.8rem,3vw,2.6rem)", textTransform:"uppercase", color:"#fff", margin:"0 0 40px" }}>My Journey</h2>
 
        <div style={{ position:"relative", paddingLeft:32 }}>
          {/* vertical line */}
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:1, background:"linear-gradient(180deg,#00ffd1,rgba(0,255,209,0.05))" }} />
 
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ position:"relative", paddingBottom: i < TIMELINE.length - 1 ? 40 : 0 }}>
                {/* dot */}
                <div style={{ position:"absolute", left:-40, top:4, width:16, height:16, borderRadius:"50%", border:"1.5px solid #00ffd1", background:"#030d10", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 12px rgba(0,255,209,0.4)" }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#00ffd1", display:"block" }} />
                </div>
                <div style={{
                  background:"linear-gradient(145deg,rgba(0,28,22,0.55) 0%,rgba(3,13,16,0.8) 100%)",
                  border:"1px solid rgba(0,255,209,0.1)", borderRadius:6, padding:"24px 28px",
                  transition:"border-color .2s",
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:10, flexWrap:"wrap" }}>
                    <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:13, letterSpacing:"0.2em", color:"#00ffd1", background:"rgba(0,255,209,0.08)", border:"1px solid rgba(0,255,209,0.2)", padding:"3px 10px", borderRadius:3 }}>{item.year}</span>
                    <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:18, textTransform:"uppercase", color:"#e0f5f0", margin:0 }}>{item.title}</h3>
                    <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(0,255,209,0.4)" }}>{item.place}</span>
                  </div>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13.5, lineHeight:1.72, color:"rgba(180,220,215,0.62)", margin:0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── CTA ── */}
      <section style={{ maxWidth:1280, margin:"70px auto 0", padding:"0 40px 120px" }}>
        <div style={{ position:"relative", padding:"52px 48px", background:"linear-gradient(135deg,rgba(0,40,32,0.6) 0%,rgba(3,13,16,0.88) 100%)", border:"1px solid rgba(0,255,209,0.12)", borderRadius:8, textAlign:"center", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:260, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(0,180,150,0.09) 0%,transparent 70%)", pointerEvents:"none" }} />
          <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:11, letterSpacing:"0.35em", textTransform:"uppercase", color:"rgba(0,255,209,0.6)", margin:"0 0 10px", position:"relative" }}>Like what you see?</p>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"clamp(1.8rem,3.5vw,3rem)", textTransform:"uppercase", color:"#fff", margin:"0 0 24px", position:"relative" }}>
            Let's Work <span style={{ color:"#00ffd1", textShadow:"0 0 28px rgba(0,255,209,0.35)" }}>Together</span>
          </h2>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
            <a href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:"transparent", border:"1.5px solid #00ffd1", color:"#00ffd1", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", borderRadius:3, textDecoration:"none", boxShadow:"0 0 20px rgba(0,255,209,0.14)" }}>
              Get In Touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="/portfolio" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:"transparent", border:"1px solid rgba(0,255,209,0.25)", color:"rgba(200,230,225,0.65)", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", borderRadius:3, textDecoration:"none" }}>
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}