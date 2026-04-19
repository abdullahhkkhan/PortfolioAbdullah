"use client";
 
import NavBar from "../../components/NavBar";
import { useEffect, useRef, useState } from "react";
 
const SERVICE_DATA = [
  {
    title: "Full Stack Development",
    description: "MERN stack expertise from project planning and frontend UI to backend services and database architecture.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "Native-style mobile and web applications built with React, React Native, and modern responsive frameworks.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "SEO & Page Optimization",
    description: "Search engine optimization, page performance, ranking improvements, and technical SEO best practices.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    title: "Design Support",
    description: "Design support from wireframes and UI polish to final visual assets and usability improvements.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: "Hosting & Deployment",
    description: "End-to-end hosting, deployment, CI/CD, and production rollout for fast, secure delivery.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description: "Maintenance, updates, bug fixes, and continuous improvement after launch.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
];
 
const SKILLS_COLS = [
  ["HTML5, CSS3, JavaScript", "React, Next.js, TypeScript", "Node.js, Express, REST APIs"],
  ["MongoDB, Firebase, SQL", "Responsive UI, Tailwind CSS, Animation", "SEO, Performance Optimization, Analytics"],
];
 
const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "Understanding your goals, requirements, and constraints before writing a single line of code." },
  { num: "02", title: "Planning", desc: "Architecture decisions, tech stack selection, timeline mapping, and milestone definition." },
  { num: "03", title: "Build", desc: "Iterative development with regular check-ins, demos, and feedback loops throughout." },
  { num: "04", title: "Launch", desc: "Testing, deployment, performance tuning, and a smooth go-live with full handover docs." },
];
 
function ServiceCard({ service, index }: { service: typeof SERVICE_DATA[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
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
          ? "linear-gradient(145deg,rgba(0,50,40,0.6) 0%,rgba(3,13,16,0.9) 100%)"
          : "linear-gradient(145deg,rgba(0,30,25,0.5) 0%,rgba(3,13,16,0.8) 100%)",
        border: `1px solid ${hov ? "rgba(0,255,209,0.4)" : "rgba(0,255,209,0.1)"}`,
        borderRadius: 6,
        padding: "32px 28px",
        cursor: "default",
        transition: "border-color .25s, background .25s, transform .25s, box-shadow .25s",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hov
          ? "0 24px 50px rgba(0,0,0,0.45), 0 0 30px rgba(0,255,209,0.07)"
          : "0 4px 20px rgba(0,0,0,0.25)",
        opacity: visible ? 1 : 0,
        animation: visible ? `_svFadeUp .45s ${index * 0.08}s both` : "none",
      }}
    >
      {/* corner accents */}
      <span style={{ position:"absolute", top:0, left:0, width:12, height:12, borderTop:"1.5px solid rgba(0,255,209,0.5)", borderLeft:"1.5px solid rgba(0,255,209,0.5)" }} />
      <span style={{ position:"absolute", bottom:0, right:0, width:12, height:12, borderBottom:"1.5px solid rgba(0,255,209,0.5)", borderRight:"1.5px solid rgba(0,255,209,0.5)" }} />
 
      {/* hover glow */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 6, pointerEvents: "none",
        background: "radial-gradient(circle at 50% 0%,rgba(0,255,209,0.06) 0%,transparent 70%)",
        opacity: hov ? 1 : 0, transition: "opacity .3s",
      }} />
 
      {/* icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 4,
        background: hov ? "rgba(0,255,209,0.12)" : "rgba(0,255,209,0.06)",
        border: `1px solid ${hov ? "rgba(0,255,209,0.4)" : "rgba(0,255,209,0.15)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hov ? "#00ffd1" : "rgba(0,255,209,0.5)",
        marginBottom: 22, transition: "all .25s",
        boxShadow: hov ? "0 0 18px rgba(0,255,209,0.15)" : "none",
      }}>
        {service.icon}
      </div>
 
      <h3 style={{
        fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
        fontSize: 20, textTransform: "uppercase",
        color: hov ? "#00ffd1" : "#e0f5f0",
        margin: "0 0 12px", transition: "color .2s",
        textShadow: hov ? "0 0 20px rgba(0,255,209,0.3)" : "none",
      }}>{service.title}</h3>
 
      <p style={{
        fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, lineHeight: 1.72,
        color: "rgba(180,220,215,0.65)", margin: 0,
      }}>{service.description}</p>
    </div>
  );
}
 
export default function ServicesPage() {
  const spinRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const id = "sv-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      @keyframes _svFadeUp { from{opacity:0;transform:translateY(22px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
      @keyframes _svIn     { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
      ._svA { animation: _svIn .5s .10s both }
      ._svB { animation: _svIn .5s .22s both }
      ._svC { animation: _svIn .5s .34s both }
      ._svD { animation: _svIn .5s .46s both }
    `;
    document.head.appendChild(s);
  }, []);
 
  useEffect(() => {
    let a = 0, raf: number;
    const tick = () => {
      a += 0.15;
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
 
      {/* ── PAGE HERO ── */}
      <section style={{
        position: "relative", overflow: "hidden",
        padding: "80px 40px 72px", textAlign: "center",
        borderBottom: "1px solid rgba(0,255,209,0.07)",
      }}>
        {/* grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(0,255,209,0.035) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(0,255,209,0.035) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* ambient */}
        <div style={{
          position: "absolute", top: -180, left: "50%", transform: "translateX(-50%)",
          width: 640, height: 420, borderRadius: "50%",
          background: "radial-gradient(ellipse,rgba(0,180,150,0.11) 0%,transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* circuit lines */}
        <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}>
          <g stroke="rgba(0,255,209,0.1)" strokeWidth="1" fill="none">
            <polyline points="0,140 80,140 110,110 200,110"/><circle cx="200" cy="110" r="3" fill="rgba(0,255,209,0.4)"/>
            <polyline points="0,360 90,360 120,330 200,330"/><circle cx="200" cy="330" r="3" fill="rgba(0,255,209,0.3)"/>
            <polyline points="1440,160 1350,160 1320,190 1240,190"/><circle cx="1240" cy="190" r="3" fill="rgba(0,255,209,0.4)"/>
            <polyline points="1440,380 1350,380 1320,350 1250,350"/><circle cx="1250" cy="350" r="3" fill="rgba(0,255,209,0.3)"/>
          </g>
        </svg>
        {/* rings */}
        <div style={{ position:"absolute", top:"50%", left:"50%", width:340, height:340, borderRadius:"50%", border:"1px solid rgba(0,255,209,0.08)", transform:"translate(-50%,-50%)" }} />
        <div ref={spinRef} style={{ position:"absolute", top:"50%", left:"50%", width:400, height:400, borderRadius:"50%", border:"1px dashed rgba(0,255,209,0.11)", transform:"translate(-50%,-50%)" }} />
 
        <div style={{ position:"relative", zIndex:1 }}>
          <p className="_svA" style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
            fontSize:11, letterSpacing:"0.38em", textTransform:"uppercase",
            color:"#00ffd1", margin:"0 0 12px",
          }}>What I Offer</p>
          <h1 className="_svB" style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900,
            fontSize:"clamp(2.8rem,5vw,4.5rem)", textTransform:"uppercase",
            color:"#00ffd1", margin:"0 0 16px", lineHeight:1,
            textShadow:"0 0 40px rgba(0,255,209,0.3)",
          }}>Services</h1>
          <div className="_svC" style={{ display:"flex", alignItems:"center", gap:12, justifyContent:"center", marginBottom:16 }}>
            <span style={{ height:1, width:50, background:"linear-gradient(90deg,transparent,#00ffd1)", display:"block" }} />
            <span style={{ width:5, height:5, borderRadius:"50%", background:"#00ffd1", boxShadow:"0 0 8px #00ffd1" }} />
            <span style={{ height:1, width:50, background:"linear-gradient(90deg,#00ffd1,transparent)", display:"block" }} />
          </div>
          <p className="_svC" style={{ fontSize:15, color:"rgba(200,230,225,0.6)", maxWidth:500, margin:"0 auto" }}>
            All the skills and support you need — from scratch to fully hosted and live.
          </p>
        </div>
      </section>
 
      {/* ── SERVICE CARDS ── */}
      <section style={{ maxWidth:1280, margin:"0 auto", padding:"90px 40px 0" }}>
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
          gap:22,
        }}>
          {SERVICE_DATA.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </section>
 
      {/* ── PROCESS STRIP ── */}
      <section style={{ maxWidth:1280, margin:"80px auto 0", padding:"0 40px" }}>
        <div style={{ marginBottom:40 }}>
          <p style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
            fontSize:10, letterSpacing:"0.38em", textTransform:"uppercase",
            color:"#00ffd1", margin:"0 0 10px",
          }}>How It Works</p>
          <h2 style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800,
            fontSize:"clamp(1.8rem,3vw,2.6rem)", textTransform:"uppercase",
            color:"#fff", margin:0,
          }}>My Process</h2>
        </div>
 
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:2 }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} style={{
              position:"relative",
              padding:"32px 28px",
              background:"linear-gradient(145deg,rgba(0,25,20,0.5) 0%,rgba(3,13,16,0.7) 100%)",
              borderTop:"1px solid rgba(0,255,209,0.1)",
              borderBottom:"1px solid rgba(0,255,209,0.1)",
              borderLeft: i === 0 ? "1px solid rgba(0,255,209,0.1)" : "none",
              borderRight:"1px solid rgba(0,255,209,0.1)",
            }}>
              <span style={{
                fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900,
                fontSize:48, color:"rgba(0,255,209,0.08)",
                position:"absolute", top:16, right:20, lineHeight:1,
              }}>{step.num}</span>
              <p style={{
                fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
                fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase",
                color:"rgba(0,255,209,0.5)", margin:"0 0 10px",
              }}>{step.num}</p>
              <h3 style={{
                fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800,
                fontSize:20, textTransform:"uppercase",
                color:"#e0f5f0", margin:"0 0 12px",
              }}>{step.title}</h3>
              <p style={{ fontSize:13, lineHeight:1.7, color:"rgba(180,220,215,0.6)", margin:0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── SKILLS BOX ── */}
      <section style={{ maxWidth:1280, margin:"60px auto 0", padding:"0 40px" }}>
        <div style={{
          position:"relative",
          background:"linear-gradient(145deg,rgba(0,35,28,0.7) 0%,rgba(3,13,16,0.9) 100%)",
          border:"1px solid rgba(0,255,209,0.15)",
          borderRadius:8, padding:"44px 48px",
          boxShadow:"0 0 50px rgba(0,255,209,0.06)",
        }}>
          {/* corner brackets */}
          <span style={{ position:"absolute", top:0, left:0, width:16, height:16, borderTop:"2px solid rgba(0,255,209,0.4)", borderLeft:"2px solid rgba(0,255,209,0.4)" }} />
          <span style={{ position:"absolute", top:0, right:0, width:16, height:16, borderTop:"2px solid rgba(0,255,209,0.4)", borderRight:"2px solid rgba(0,255,209,0.4)" }} />
          <span style={{ position:"absolute", bottom:0, left:0, width:16, height:16, borderBottom:"2px solid rgba(0,255,209,0.4)", borderLeft:"2px solid rgba(0,255,209,0.4)" }} />
          <span style={{ position:"absolute", bottom:0, right:0, width:16, height:16, borderBottom:"2px solid rgba(0,255,209,0.4)", borderRight:"2px solid rgba(0,255,209,0.4)" }} />
 
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:32 }}>
            <p style={{
              fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800,
              fontSize:"clamp(1.4rem,2.5vw,1.9rem)", textTransform:"uppercase",
              color:"#00ffd1", margin:0,
              textShadow:"0 0 24px rgba(0,255,209,0.25)",
            }}>Skills I Use</p>
            <span style={{ flex:1, height:1, background:"linear-gradient(90deg,rgba(0,255,209,0.3),transparent)" }} />
          </div>
 
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"20px 60px" }}>
            {SKILLS_COLS.map((col, ci) => (
              <ul key={ci} style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:13 }}>
                {col.map(skill => (
                  <li key={skill} style={{
                    display:"flex", alignItems:"center", gap:12,
                    fontFamily:"'DM Sans',sans-serif", fontSize:14,
                    color:"rgba(200,230,225,0.78)",
                  }}>
                    <span style={{
                      width:6, height:6, borderRadius:"50%",
                      background:"#00ffd1", boxShadow:"0 0 8px #00ffd1",
                      flexShrink:0,
                    }} />
                    {skill}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── CTA BANNER ── */}
      <section style={{ maxWidth:1280, margin:"60px auto 0", padding:"0 40px 120px" }}>
        <div style={{
          position:"relative",
          padding:"56px 48px",
          background:"linear-gradient(135deg,rgba(0,40,32,0.6) 0%,rgba(3,13,16,0.85) 100%)",
          border:"1px solid rgba(0,255,209,0.12)",
          borderRadius:8, textAlign:"center",
          overflow:"hidden",
        }}>
          {/* bg glow */}
          <div style={{
            position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
            width:500, height:250, borderRadius:"50%",
            background:"radial-gradient(ellipse,rgba(0,180,150,0.1) 0%,transparent 70%)",
            pointerEvents:"none",
          }} />
          <p style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
            fontSize:11, letterSpacing:"0.35em", textTransform:"uppercase",
            color:"rgba(0,255,209,0.6)", margin:"0 0 12px", position:"relative",
          }}>Ready to Start?</p>
          <h2 style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900,
            fontSize:"clamp(1.8rem,3.5vw,3rem)", textTransform:"uppercase",
            color:"#fff", margin:"0 0 24px", position:"relative",
          }}>
            Let's Build Something<br />
            <span style={{ color:"#00ffd1", textShadow:"0 0 30px rgba(0,255,209,0.35)" }}>Exceptional</span>
          </h2>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
            <a href="/contact" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"14px 32px", background:"transparent",
              border:"1.5px solid #00ffd1", color:"#00ffd1",
              fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
              fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase",
              borderRadius:3, textDecoration:"none",
              boxShadow:"0 0 20px rgba(0,255,209,0.15)",
            }}>
              Get In Touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/portfolio" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"14px 32px", background:"transparent",
              border:"1px solid rgba(0,255,209,0.25)", color:"rgba(200,230,225,0.65)",
              fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
              fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase",
              borderRadius:3, textDecoration:"none",
            }}>
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}