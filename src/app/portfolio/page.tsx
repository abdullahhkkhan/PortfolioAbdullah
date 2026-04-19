"use client";
 
import NavBar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";
 
const SERVICES = [
  {
    title: "Full Stack Development",
    description: "Building MERN applications with polished frontend interactions, backend APIs, and database workflows.",
    tags: ["React", "Next.js", "Node.js"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "Creating responsive mobile and web applications with modern UX and cross-platform support.",
    tags: ["React Native", "PWA", "UI/UX"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "SEO & Page Optimization",
    description: "Technical SEO, speed tuning, and ranking improvements for stronger visibility and performance.",
    tags: ["SEO", "Performance", "Analytics"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    title: "Design Support",
    description: "Supporting design systems, UI polish, and visual assets from wireframes to final launch.",
    tags: ["Design", "Branding", "Motion"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: "Hosting & Deployment",
    description: "End-to-end hosting, CI/CD, and launch deployment for secure, scalable applications.",
    tags: ["Vercel", "Netlify", "CI/CD"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description: "Maintenance, updates, bug fixes, and continuous improvement after launch.",
    tags: ["Support", "Bug Fixes", "Monitoring"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
];
 
function ServiceCard({ item, index }: { item: typeof SERVICES[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
 
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
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
          : "linear-gradient(145deg,rgba(0,25,20,0.5) 0%,rgba(3,13,16,0.82) 100%)",
        border: `1px solid ${hov ? "rgba(0,255,209,0.42)" : "rgba(0,255,209,0.1)"}`,
        borderRadius: 6,
        padding: "30px 26px 26px",
        cursor: "default",
        transition: "all .25s",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hov
          ? "0 22px 48px rgba(0,0,0,0.44),0 0 28px rgba(0,255,209,0.07)"
          : "0 4px 20px rgba(0,0,0,0.22)",
        opacity: vis ? 1 : 0,
        animation: vis ? `_pfFadeUp .45s ${index * 0.08}s both` : "none",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* corner accents */}
      <span style={{ position:"absolute", top:0, left:0, width:11, height:11, borderTop:"1.5px solid rgba(0,255,209,0.5)", borderLeft:"1.5px solid rgba(0,255,209,0.5)" }} />
      <span style={{ position:"absolute", bottom:0, right:0, width:11, height:11, borderBottom:"1.5px solid rgba(0,255,209,0.5)", borderRight:"1.5px solid rgba(0,255,209,0.5)" }} />
 
      {/* hover glow overlay */}
      <div style={{
        position:"absolute", inset:0, borderRadius:6, pointerEvents:"none",
        background:"radial-gradient(circle at 50% 0%,rgba(0,255,209,0.06) 0%,transparent 70%)",
        opacity: hov ? 1 : 0, transition:"opacity .3s",
      }} />
 
      {/* icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 4, marginBottom: 20,
        background: hov ? "rgba(0,255,209,0.12)" : "rgba(0,255,209,0.06)",
        border: `1px solid ${hov ? "rgba(0,255,209,0.4)" : "rgba(0,255,209,0.14)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hov ? "#00ffd1" : "rgba(0,255,209,0.5)",
        transition: "all .25s",
        boxShadow: hov ? "0 0 16px rgba(0,255,209,0.14)" : "none",
        flexShrink: 0,
      }}>
        {item.icon}
      </div>
 
      {/* title */}
      <h3 style={{
        fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
        fontSize: 19, textTransform: "uppercase",
        color: hov ? "#00ffd1" : "#e0f5f0",
        margin: "0 0 12px", transition: "color .2s",
        textShadow: hov ? "0 0 18px rgba(0,255,209,0.28)" : "none",
      }}>{item.title}</h3>
 
      {/* description */}
      <p style={{
        fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, lineHeight: 1.74,
        color: "rgba(180,220,215,0.65)", margin: "0 0 20px", flex: 1,
      }}>{item.description}</p>
 
      {/* tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            padding: "4px 12px",
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
            color: hov ? "#00ffd1" : "rgba(0,255,209,0.6)",
            border: `1px solid ${hov ? "rgba(0,255,209,0.35)" : "rgba(0,255,209,0.18)"}`,
            borderRadius: 3,
            background: hov ? "rgba(0,255,209,0.07)" : "transparent",
            boxShadow: hov ? "0 0 8px rgba(0,255,209,0.1)" : "none",
            transition: "all .2s",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
 
export default function PortfolioPage() {
  const spinRef  = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const id = "pf-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      @keyframes _pfFadeUp { from{opacity:0;transform:translateY(22px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
      @keyframes _pfIn     { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      ._pfA { animation: _pfIn .5s .10s both }
      ._pfB { animation: _pfIn .5s .22s both }
      ._pfC { animation: _pfIn .5s .34s both }
      ._pfD { animation: _pfIn .5s .46s both }
    `;
    document.head.appendChild(s);
  }, []);
 
  useEffect(() => {
    let a1 = 0, a2 = 0, raf: number;
    const tick = () => {
      a1 += 0.16;
      a2 -= 0.22;
      if (spinRef.current)  spinRef.current.style.transform  = `translate(-50%,-50%) rotate(${a1}deg)`;
      if (innerRef.current) innerRef.current.style.transform = `translate(-50%,-50%) rotate(${a2}deg)`;
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
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:
            "linear-gradient(rgba(0,255,209,0.035) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(0,255,209,0.035) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
        }} />
        {/* ambient glow */}
        <div style={{
          position:"absolute", top:-160, left:"50%", transform:"translateX(-50%)",
          width:620, height:420, borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(0,180,150,0.11) 0%,transparent 70%)",
          pointerEvents:"none",
        }} />
        {/* circuit lines */}
        <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}>
          <g stroke="rgba(0,255,209,0.1)" strokeWidth="1" fill="none">
            <polyline points="0,140 80,140 110,110 200,110"/>
            <circle cx="200" cy="110" r="3" fill="rgba(0,255,209,0.4)"/>
            <polyline points="0,360 90,360 120,330 200,330"/>
            <circle cx="200" cy="330" r="3" fill="rgba(0,255,209,0.3)"/>
            <polyline points="1440,155 1355,155 1325,185 1245,185"/>
            <circle cx="1245" cy="185" r="3" fill="rgba(0,255,209,0.4)"/>
            <polyline points="1440,375 1360,375 1330,345 1260,345"/>
            <circle cx="1260" cy="345" r="3" fill="rgba(0,255,209,0.3)"/>
          </g>
        </svg>
        {/* ring system */}
        <div style={{ position:"absolute", top:"50%", left:"50%", width:320, height:320, borderRadius:"50%", border:"1px solid rgba(0,255,209,0.08)", transform:"translate(-50%,-50%)" }} />
        <div ref={spinRef}  style={{ position:"absolute", top:"50%", left:"50%", width:390, height:390, borderRadius:"50%", border:"1px dashed rgba(0,255,209,0.12)", transform:"translate(-50%,-50%)" }} />
        <div ref={innerRef} style={{ position:"absolute", top:"50%", left:"50%", width:250, height:250, borderRadius:"50%", border:"1px dashed rgba(0,255,209,0.08)", transform:"translate(-50%,-50%)" }} />
 
        <div style={{ position:"relative", zIndex:1 }}>
          <p className="_pfA" style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
            fontSize:11, letterSpacing:"0.38em", textTransform:"uppercase",
            color:"#00ffd1", margin:"0 0 12px",
          }}>Services</p>
 
          <h1 className="_pfB" style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900,
            fontSize:"clamp(2.8rem,5.5vw,5rem)", textTransform:"uppercase",
            color:"#00ffd1", margin:"0 0 16px", lineHeight:1,
            textShadow:"0 0 40px rgba(0,255,209,0.3)",
          }}>
            Complete Service<br />Delivery
          </h1>
 
          {/* divider */}
          <div className="_pfC" style={{ display:"flex", alignItems:"center", gap:12, justifyContent:"center", marginBottom:18 }}>
            <span style={{ height:1, width:50, background:"linear-gradient(90deg,transparent,#00ffd1)", display:"block" }} />
            <span style={{ width:5, height:5, borderRadius:"50%", background:"#00ffd1", boxShadow:"0 0 8px #00ffd1" }} />
            <span style={{ height:1, width:50, background:"linear-gradient(90deg,#00ffd1,transparent)", display:"block" }} />
          </div>
 
          <p className="_pfD" style={{
            fontSize:15, lineHeight:1.78,
            color:"rgba(200,230,225,0.62)", maxWidth:580, margin:"0 auto",
          }}>
            From concept and UI design to development, hosting, SEO, and ongoing support — everything built with a performance-first mindset aligned with modern digital systems.
          </p>
        </div>
      </section>
 
      {/* ── SERVICE CARDS GRID ── */}
      <section style={{ maxWidth:1280, margin:"0 auto", padding:"90px 40px 0" }}>
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
          gap:20,
        }}>
          {SERVICES.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>
 
      {/* ── WHY WORK WITH ME ── */}
      <section style={{ maxWidth:1280, margin:"72px auto 0", padding:"0 40px" }}>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:36, flexWrap:"wrap", gap:16 }}>
          <div>
            <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:10, letterSpacing:"0.38em", textTransform:"uppercase", color:"#00ffd1", margin:"0 0 8px" }}>The Difference</p>
            <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"clamp(1.8rem,3vw,2.6rem)", textTransform:"uppercase", color:"#fff", margin:0 }}>Why Work With Me</h2>
          </div>
          <span style={{ height:1, width:120, background:"linear-gradient(90deg,rgba(0,255,209,0.3),transparent)", display:"block" }} />
        </div>
 
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:1 }}>
          {[
            { icon:"⌖", label:"End-to-End",    desc:"From first wireframe to live deployment — one point of contact throughout." },
            { icon:"◈", label:"Quality First",  desc:"Clean, maintainable code with thorough testing before anything ships." },
            { icon:"⊕", label:"Fast Delivery",  desc:"Agile workflow with regular demos, no long waits between milestones." },
            { icon:"◉", label:"Long-term View", desc:"Built to scale — not just to launch. Ongoing support and iterations included." },
          ].map((item, i) => (
            <div key={i} style={{
              padding:"32px 28px",
              background:"linear-gradient(145deg,rgba(0,22,18,0.5) 0%,rgba(3,13,16,0.7) 100%)",
              borderTop:"1px solid rgba(0,255,209,0.09)",
              borderBottom:"1px solid rgba(0,255,209,0.09)",
              borderLeft: i === 0 ? "1px solid rgba(0,255,209,0.09)" : "none",
              borderRight:"1px solid rgba(0,255,209,0.09)",
            }}>
              <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:28, color:"rgba(0,255,209,0.25)", display:"block", marginBottom:14 }}>{item.icon}</span>
              <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:17, textTransform:"uppercase", color:"#e0f5f0", margin:"0 0 10px" }}>{item.label}</h3>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, lineHeight:1.72, color:"rgba(180,220,215,0.58)", margin:0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── CTA ── */}
      <section style={{ maxWidth:1280, margin:"60px auto 0", padding:"0 40px 120px" }}>
        <div style={{
          position:"relative",
          padding:"52px 48px",
          background:"linear-gradient(135deg,rgba(0,40,32,0.6) 0%,rgba(3,13,16,0.88) 100%)",
          border:"1px solid rgba(0,255,209,0.12)",
          borderRadius:8, textAlign:"center", overflow:"hidden",
        }}>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:260, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(0,180,150,0.09) 0%,transparent 70%)", pointerEvents:"none" }} />
          <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:11, letterSpacing:"0.35em", textTransform:"uppercase", color:"rgba(0,255,209,0.6)", margin:"0 0 10px", position:"relative" }}>Ready to Start?</p>
          <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:"clamp(1.8rem,3.5vw,3rem)", textTransform:"uppercase", color:"#fff", margin:"0 0 24px", position:"relative" }}>
            Let's Build Something<br />
            <span style={{ color:"#00ffd1", textShadow:"0 0 28px rgba(0,255,209,0.35)" }}>Exceptional Together</span>
          </h2>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
            <a href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:"transparent", border:"1.5px solid #00ffd1", color:"#00ffd1", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", borderRadius:3, textDecoration:"none", boxShadow:"0 0 20px rgba(0,255,209,0.14)" }}>
              Get In Touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="/about" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:"transparent", border:"1px solid rgba(0,255,209,0.25)", color:"rgba(200,230,225,0.65)", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", borderRadius:3, textDecoration:"none" }}>
              About Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}