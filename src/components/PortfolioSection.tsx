"use client";
 
import { useEffect, useRef, useState } from "react";
 
// ─── Types ───────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;        // replace with real paths e.g. "/images/proj1.jpg"
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  year: string;
}
 
// ─── Sample data (replace with real projects / fetch from API) ───────────────
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EDMS Platform",
    client: "Enterprise Client",
    category: "Full Stack",
    year: "2024",
    shortDesc: "Electronic Document Management System built with MERN stack for enterprise-scale document workflows.",
    fullDesc: "A comprehensive EDMS built from the ground up using MongoDB, Express, React, and Node.js. The system handles document ingestion, version control, role-based access, full-text search, and automated audit trails. Reduced manual document processing time by 60% for the client's 500+ user organisation.",
    image: "",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "JWT", "AWS S3"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Cell Bank Portal",
    client: "BioTech Lab",
    category: "Full Stack",
    year: "2024",
    shortDesc: "Innovative management solution for human cell bank inventory, tracking, and compliance reporting.",
    fullDesc: "A specialised lab management portal for a human cell bank. Tracks sample inventory, freezer locations, chain-of-custody, and generates compliance reports. Integrated barcode scanning via a React Native companion app and automated email alerts for expiry and low-stock conditions.",
    image: "",
    tech: ["Next.js", "Node.js", "MySQL", "Strapi", "React Native"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    client: "Retail Brand",
    category: "E-Commerce",
    year: "2023",
    shortDesc: "Shopify-powered storefront with custom theme, product filtering, and checkout optimisations.",
    fullDesc: "Custom Shopify theme built from scratch with Liquid templating and vanilla JS. Features advanced product filtering, size-guide modals, lazy-loaded image galleries, and a one-page checkout flow. Improved conversion rate by 22% post-launch through A/B-tested UX changes.",
    image: "",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS3", "SEO"],
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Agency Website",
    client: "Creative Agency",
    category: "WordPress",
    year: "2023",
    shortDesc: "Custom WordPress site with animations, Elementor Pro, and headless CMS integration.",
    fullDesc: "A visually immersive agency website built on WordPress with a fully custom Elementor Pro theme. Includes GSAP scroll animations, custom post types for case studies, WooCommerce for digital downloads, and a headless front-end proof-of-concept using the WP REST API with Next.js.",
    image: "",
    tech: ["WordPress", "Elementor Pro", "PHP", "MySQL", "GSAP", "Next.js"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    client: "Startup",
    category: "Frontend",
    year: "2024",
    shortDesc: "Analytics dashboard with real-time charts, dark mode, and role-based data views.",
    fullDesc: "A React-based SaaS analytics dashboard for a B2B startup. Features real-time WebSocket data updates, Chart.js visualisations, a responsive layout with collapsible sidebar, role-based access control, and a CSV export engine. Deployed on Vercel with GitHub Actions CI/CD.",
    image: "",
    tech: ["React.js", "Chart.js", "WebSockets", "Tailwind", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 6,
    title: "SEO Blog Platform",
    client: "Media Company",
    category: "WordPress",
    year: "2023",
    shortDesc: "High-performance WordPress blog with technical SEO, schema markup, and CDN integration.",
    fullDesc: "A performance-optimised WordPress publication site targeting sub-1s LCP. Custom Gutenberg blocks, schema.org Article/BreadcrumbList markup, server-side caching via WP Rocket, image optimisation via ShortPixel, and a Cloudflare CDN setup. Organic traffic grew 180% in 6 months post-migration.",
    image: "",
    tech: ["WordPress", "PHP", "WP Rocket", "SEO", "Cloudflare", "Wix Migration"],
    liveUrl: "#",
  },
];
 
const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];
 
// ─── Tech badge colours ────────────────────────────────────────────────────
const TECH_COLORS: Record<string, string> = {
  "React.js":    "rgba(97,219,251,0.15)",
  "Next.js":     "rgba(0,255,209,0.12)",
  "Node.js":     "rgba(104,211,145,0.15)",
  "MongoDB":     "rgba(104,211,145,0.15)",
  "MySQL":       "rgba(0,150,255,0.15)",
  "Shopify":     "rgba(150,200,100,0.15)",
  "WordPress":   "rgba(0,150,255,0.15)",
  "Strapi":      "rgba(75,110,220,0.15)",
  "SEO":         "rgba(255,190,50,0.15)",
};
const techColor = (t: string) => TECH_COLORS[t] ?? "rgba(0,255,209,0.08)";
 
// ─── Placeholder image (gradient when no real image) ──────────────────────
function PlaceholderImg({ title, height = 200 }: { title: string; height?: number }) {
  const chars = title.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: "100%", height,
      background: "linear-gradient(135deg, rgba(0,40,35,0.9) 0%, rgba(0,20,30,1) 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: 8, flexShrink: 0,
      position: "relative", overflow: "hidden",
    }}>
      {/* subtle grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(rgba(0,255,209,0.05) 1px,transparent 1px)," +
          "linear-gradient(90deg,rgba(0,255,209,0.05) 1px,transparent 1px)",
        backgroundSize: "24px 24px",
      }} />
      <span style={{
        fontFamily: "'Barlow Condensed',sans-serif",
        fontWeight: 800, fontSize: 36,
        color: "rgba(0,255,209,0.35)",
        letterSpacing: "0.1em",
        position: "relative", zIndex: 1,
      }}>{chars}</span>
      <span style={{
        fontFamily: "'Barlow Condensed',sans-serif",
        fontSize: 9, letterSpacing: "0.3em",
        textTransform: "uppercase", color: "rgba(0,255,209,0.2)",
        position: "relative", zIndex: 1,
      }}>Project Preview</span>
    </div>
  );
}
 
// ─── Modal ─────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);
 
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 16px",
        animation: "_mFadeIn .25s both",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "linear-gradient(145deg,rgba(3,22,20,0.98) 0%,rgba(3,13,16,1) 100%)",
          border: "1px solid rgba(0,255,209,0.18)",
          borderRadius: 8,
          maxWidth: 760, width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 0 80px rgba(0,255,209,0.08), 0 40px 80px rgba(0,0,0,0.6)",
          animation: "_mSlideUp .3s both",
        }}
      >
        {/* image */}
        <div style={{ position: "relative" }}>
          {project.image
            ? <img src={project.image} alt={project.title} style={{ width: "100%", height: 260, objectFit: "cover" }} />
            : <PlaceholderImg title={project.title} height={260} />
          }
          {/* close btn */}
          <button onClick={onClose} style={{
            position: "absolute", top: 16, right: 16,
            width: 36, height: 36, borderRadius: 4,
            background: "rgba(3,13,16,0.85)", border: "1px solid rgba(0,255,209,0.3)",
            color: "#00ffd1", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, lineHeight: 1, fontWeight: 300,
            backdropFilter: "blur(4px)",
          }}>×</button>
          {/* category badge */}
          <span style={{
            position: "absolute", top: 16, left: 16,
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 700, fontSize: 10, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#00ffd1",
            background: "rgba(0,255,209,0.1)", border: "1px solid rgba(0,255,209,0.25)",
            borderRadius: 2, padding: "4px 10px",
            backdropFilter: "blur(4px)",
          }}>{project.category}</span>
        </div>
 
        {/* content */}
        <div style={{ padding: "32px 36px 36px" }}>
          {/* meta row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,255,209,0.5)" }}>
              {project.client} · {project.year}
            </span>
            <div style={{ display: "flex", gap: 10 }}>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "7px 16px", border: "1.5px solid #00ffd1",
                  color: "#00ffd1", borderRadius: 3, textDecoration: "none",
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                  fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                }}>
                  Live Demo
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 10L10 1M10 1H4M10 1v6" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "7px 16px", border: "1px solid rgba(0,255,209,0.3)",
                  color: "rgba(200,230,225,0.7)", borderRadius: 3, textDecoration: "none",
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                  fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                }}>
                  GitHub
                </a>
              )}
            </div>
          </div>
 
          <h2 style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
            fontSize: "clamp(1.8rem,3vw,2.4rem)", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 20px",
            textShadow: "0 0 30px rgba(0,255,209,0.25)",
          }}>{project.title}</h2>
 
          {/* divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <span style={{ height: 1, width: 40, background: "linear-gradient(90deg,#00ffd1,transparent)", display: "block" }} />
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#00ffd1", boxShadow: "0 0 6px #00ffd1" }} />
          </div>
 
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(200,230,225,0.75)", margin: "0 0 28px" }}>
            {project.fullDesc}
          </p>
 
          {/* tech stack */}
          <div>
            <p style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(0,255,209,0.5)", margin: "0 0 12px",
            }}>Tech Stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  padding: "5px 12px",
                  background: techColor(t),
                  border: "1px solid rgba(0,255,209,0.15)",
                  borderRadius: 3,
                  fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 500,
                  color: "rgba(200,240,235,0.85)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
// ─── Project Card ──────────────────────────────────────────────────────────
function ProjectCard({
  project, layout, index, onClick,
}: {
  project: Project; layout: "grid" | "list"; index: number; onClick: () => void;
}) {
  const isList = layout === "list";
  const [hovered, setHovered] = useState(false);
 
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: isList ? "flex" : "block",
        flexDirection: isList ? "row" : undefined,
        background: "linear-gradient(145deg,rgba(0,30,25,0.7) 0%,rgba(3,13,16,0.9) 100%)",
        border: `1px solid ${hovered ? "rgba(0,255,209,0.4)" : "rgba(0,255,209,0.1)"}`,
        borderRadius: 6, overflow: "hidden", cursor: "pointer",
        transition: "border-color .25s, transform .25s, box-shadow .25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,209,0.08)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        position: "relative",
        animation: `_cFadeUp .4s ${index * 0.06}s both`,
      }}
    >
      {/* corner accent */}
      <span style={{ position:"absolute", top:0, left:0, width:10, height:10, borderTop:"1.5px solid rgba(0,255,209,0.5)", borderLeft:"1.5px solid rgba(0,255,209,0.5)", zIndex:2 }} />
      <span style={{ position:"absolute", bottom:0, right:0, width:10, height:10, borderBottom:"1.5px solid rgba(0,255,209,0.5)", borderRight:"1.5px solid rgba(0,255,209,0.5)", zIndex:2 }} />
 
      {/* image */}
      <div style={{ flexShrink: 0, width: isList ? 220 : "100%", position: "relative" }}>
        {project.image
          ? <img src={project.image} alt={project.title} style={{ width: "100%", height: isList ? "100%" : 180, objectFit: "cover", display: "block" }} />
          : <PlaceholderImg title={project.title} height={isList ? 160 : 180} />
        }
        {/* category pill */}
        <span style={{
          position: "absolute", top: 10, left: 10,
          fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
          fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#00ffd1", background: "rgba(3,13,16,0.85)",
          border: "1px solid rgba(0,255,209,0.25)", borderRadius: 2, padding: "3px 8px",
          backdropFilter: "blur(4px)",
        }}>{project.category}</span>
      </div>
 
      {/* text */}
      <div style={{ padding: isList ? "20px 22px" : "18px 20px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(0,255,209,0.45)" }}>{project.client}</span>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, letterSpacing: "0.15em", color: "rgba(0,255,209,0.3)" }}>{project.year}</span>
        </div>
 
        <h3 style={{
          fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
          fontSize: isList ? 22 : 19, textTransform: "uppercase",
          color: hovered ? "#00ffd1" : "#e0f5f0", margin: 0,
          transition: "color .2s",
          textShadow: hovered ? "0 0 20px rgba(0,255,209,0.3)" : "none",
        }}>{project.title}</h3>
 
        <p style={{
          fontFamily: "'DM Sans',sans-serif", fontSize: 13, lineHeight: 1.65,
          color: "rgba(180,220,215,0.65)", margin: 0,
          display: "-webkit-box", WebkitLineClamp: isList ? 3 : 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{project.shortDesc}</p>
 
        {/* tech badges (show first 3) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }}>
          {project.tech.slice(0, isList ? 5 : 3).map(t => (
            <span key={t} style={{
              padding: "3px 8px",
              background: techColor(t), border: "1px solid rgba(0,255,209,0.12)",
              borderRadius: 2, fontSize: 10, fontFamily: "'DM Sans',sans-serif",
              fontWeight: 500, color: "rgba(200,235,230,0.75)",
            }}>{t}</span>
          ))}
          {project.tech.length > (isList ? 5 : 3) && (
            <span style={{
              padding: "3px 8px", background: "rgba(0,255,209,0.05)",
              border: "1px solid rgba(0,255,209,0.1)", borderRadius: 2,
              fontSize: 10, fontFamily: "'DM Sans',sans-serif", color: "rgba(0,255,209,0.4)",
            }}>+{project.tech.length - (isList ? 5 : 3)}</span>
          )}
        </div>
 
        {/* view detail hint */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: "auto", paddingTop: 10 }}>
          <span style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase",
            color: hovered ? "#00ffd1" : "rgba(0,255,209,0.35)",
            transition: "color .2s",
          }}>View Details</span>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
            style={{ transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform .2s" }}>
            <path d="M1 5h10M7 1l4 4-4 4" stroke={hovered ? "#00ffd1" : "rgba(0,255,209,0.35)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
 
// ─── Main Section ──────────────────────────────────────────────────────────
export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<Project | null>(null);
 
  // inject fonts + keyframes
  useEffect(() => {
    const id = "port-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      @keyframes _pFadeUp  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
      @keyframes _cFadeUp  { from{opacity:0;transform:translateY(22px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
      @keyframes _mFadeIn  { from{opacity:0} to{opacity:1} }
      @keyframes _mSlideUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      ._pEy  { animation: _pFadeUp .5s .1s  both }
      ._pH1  { animation: _pFadeUp .5s .22s both }
      ._pSub { animation: _pFadeUp .5s .34s both }
      ._pCtl { animation: _pFadeUp .5s .44s both }
    `;
    document.head.appendChild(s);
  }, []);
 
  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);
 
  return (
    <section style={{
      background: "#030d10", padding: "100px 40px",
      position: "relative", overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(0,255,209,0.03) 1px,transparent 1px)," +
          "linear-gradient(90deg,rgba(0,255,209,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* ambient glow bottom-right */}
      <div style={{
        position: "absolute", bottom: -200, right: -200, width: 600, height: 600,
        borderRadius: "50%", background: "radial-gradient(circle,rgba(0,180,150,0.09) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />
 
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
 
        {/* ── HEADER ── */}
        <div style={{ marginBottom: 56 }}>
          <p className="_pEy" style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 12, letterSpacing: "0.38em", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 10px",
          }}>Selected Work</p>
          <h2 className="_pH1" style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem,4vw,3rem)", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 12px",
            textShadow: "0 0 40px rgba(0,255,209,0.2)",
          }}>Project Portfolio</h2>
          <p className="_pSub" style={{
            fontSize: 14, color: "rgba(200,230,225,0.55)", maxWidth: 480, margin: 0,
          }}>
            A collection of full-stack builds, e-commerce solutions, and interactive experiences.
          </p>
        </div>
 
        {/* ── CONTROLS: filters + layout toggle ── */}
        <div className="_pCtl" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 16, marginBottom: 40,
        }}>
 
          {/* filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {CATEGORIES.map(cat => {
              const active = cat === activeFilter;
              return (
                <button key={cat} onClick={() => setActiveFilter(cat)} style={{
                  padding: "7px 18px",
                  background: active ? "rgba(0,255,209,0.12)" : "transparent",
                  border: `1px solid ${active ? "#00ffd1" : "rgba(0,255,209,0.18)"}`,
                  borderRadius: 3,
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700, fontSize: 11, letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: active ? "#00ffd1" : "rgba(200,230,225,0.5)",
                  cursor: "pointer",
                  boxShadow: active ? "0 0 14px rgba(0,255,209,0.15)" : "none",
                  transition: "all .2s",
                }}>
                  {cat}
                  {cat !== "All" && (
                    <span style={{
                      marginLeft: 6, fontSize: 9, opacity: 0.6,
                      background: "rgba(0,255,209,0.12)",
                      padding: "1px 5px", borderRadius: 8,
                    }}>
                      {PROJECTS.filter(p => p.category === cat).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
 
          {/* layout toggle */}
          <div style={{
            display: "flex", border: "1px solid rgba(0,255,209,0.18)", borderRadius: 4, overflow: "hidden",
          }}>
            {(["grid", "list"] as const).map(l => (
              <button key={l} onClick={() => setLayout(l)} style={{
                padding: "8px 14px",
                background: layout === l ? "rgba(0,255,209,0.12)" : "transparent",
                border: "none", cursor: "pointer",
                color: layout === l ? "#00ffd1" : "rgba(0,255,209,0.35)",
                transition: "all .2s", display: "flex", alignItems: "center",
              }}>
                {l === "grid" ? (
                  // grid icon
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="9.5" y="1" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="1" y="9.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="9.5" y="9.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                ) : (
                  // list icon
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="2" width="14" height="3.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="1" y="7.5" width="14" height="3.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="1" y="13" width="14" height="1.5" rx=".75" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
 
        {/* ── PROJECT GRID / LIST ── */}
        <div style={{
          display: layout === "grid" ? "grid" : "flex",
          gridTemplateColumns: layout === "grid" ? "repeat(auto-fill, minmax(300px, 1fr))" : undefined,
          flexDirection: layout === "list" ? "column" : undefined,
          gap: 22,
        }}>
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id} project={p} layout={layout} index={i}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
 
        {/* empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(0,255,209,0.25)" }}>
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              No projects in this category yet
            </p>
          </div>
        )}
      </div>
 
      {/* ── MODAL ── */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
 