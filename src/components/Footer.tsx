"use client";
 
import Link from "next/link";
import { useEffect, useState } from "react";
 
const NAV_LINKS = [
  { href: "/",          label: "Home"    },
  { href: "/portfolio", label: "Work"    },
  { href: "/about",     label: "About"   },
  { href: "/contact",   label: "Contact" },
];
 
const SERVICES = [
  "MERN Stack Development",
  "WordPress & Shopify",
  "EDMS Solutions",
  "SEO & Performance",
  "UI / UX Engineering",
  "API Integration",
];
 
const SOCIALS = [
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];
 
function SocialBtn({ item }: { item: (typeof SOCIALS)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 40, height: 40, borderRadius: 4,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${hovered ? "rgba(0,255,209,0.5)" : "rgba(0,255,209,0.15)"}`,
        background: hovered ? "rgba(0,255,209,0.08)" : "transparent",
        color: hovered ? "#00ffd1" : "rgba(0,255,209,0.4)",
        textDecoration: "none", transition: "all .2s",
        boxShadow: hovered ? "0 0 16px rgba(0,255,209,0.15)" : "none",
        flexShrink: 0,
      }}
    >
      {item.icon}
    </a>
  );
}
 
function FooterLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        fontSize: 13, color: hovered ? "rgba(200,240,235,0.9)" : "rgba(180,220,215,0.5)",
        textDecoration: "none", transition: "color .2s",
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      <span style={{
        height: 1, width: hovered ? 20 : 14,
        background: hovered ? "#00ffd1" : "rgba(0,255,209,0.25)",
        display: "block", transition: "all .2s", flexShrink: 0,
      }} />
      {label}
    </Link>
  );
}
 
export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [sent, setSent]   = useState(false);
 
  useEffect(() => {
    const id = "footer-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      @keyframes _ftPulse { 0%,100%{box-shadow:0 0 6px #00ffd1} 50%{box-shadow:0 0 14px #00ffd1,0 0 24px rgba(0,255,209,0.4)} }
      ._ftDot { animation: _ftPulse 2.5s ease-in-out infinite }
    `;
    document.head.appendChild(s);
  }, []);
 
  const handleSend = () => {
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };
 
  return (
    <footer style={{ background: "#020b0e", position: "relative", overflow: "hidden" }}>
 
      {/* grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(0,255,209,0.025) 1px,transparent 1px)," +
          "linear-gradient(90deg,rgba(0,255,209,0.025) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
 
      {/* top glow line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg,transparent,rgba(0,255,209,0.45) 50%,transparent)",
      }} />
 
      {/* ambient glow */}
      <div style={{
        position: "absolute", bottom: -180, left: "50%", transform: "translateX(-50%)",
        width: 700, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse,rgba(0,180,150,0.07) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />
 
      {/* ── CTA BANNER ── */}
      <div style={{ borderBottom: "1px solid rgba(0,255,209,0.07)", padding: "56px 40px", position: "relative", zIndex: 1 }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 28,
        }}>
          <div>
            <p style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase",
              color: "#00ffd1", margin: "0 0 10px",
            }}>Ready to build something?</p>
            <h3 style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem,3vw,2.6rem)", textTransform: "uppercase",
              color: "#fff", margin: 0, lineHeight: 1.1,
            }}>
              Let's Work{" "}
              <span style={{ color: "#00ffd1", textShadow: "0 0 30px rgba(0,255,209,0.35)" }}>Together</span>
            </h3>
          </div>
 
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", background: "transparent",
              border: "1.5px solid #00ffd1", color: "#00ffd1",
              borderRadius: 3, textDecoration: "none",
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
              boxShadow: "0 0 18px rgba(0,255,209,0.12)",
            }}>
              Get In Touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/portfolio" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", background: "transparent",
              border: "1px solid rgba(0,255,209,0.22)", color: "rgba(200,230,225,0.65)",
              borderRadius: 3, textDecoration: "none",
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              View Work
            </Link>
          </div>
        </div>
      </div>
 
      {/* ── MAIN COLUMNS ── */}
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "64px 40px 52px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
        gap: "40px 48px",
        position: "relative", zIndex: 1,
      }}>
 
        {/* ── Col 1: Brand ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, width: "fit-content" }}>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <polygon points="10,1 18,5.5 18,14.5 10,19 2,14.5 2,5.5"
                stroke="#00ffd1" strokeWidth="1.5" fill="rgba(0,255,209,0.08)" strokeLinejoin="round"/>
              <polygon points="10,5 14.5,7.5 14.5,12.5 10,15 5.5,12.5 5.5,7.5" fill="rgba(0,255,209,0.15)"/>
            </svg>
            <span style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
              fontSize: 20, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#00ffd1", textShadow: "0 0 18px rgba(0,255,209,0.4)",
            }}>M. Abdullah Khan</span>
          </Link>
 
          <p style={{
            fontSize: 13, lineHeight: 1.78,
            color: "rgba(180,220,215,0.5)",
            maxWidth: 290, margin: 0,
            fontFamily: "'DM Sans',sans-serif",
          }}>
            Full-stack developer specialising in MERN stack, WordPress, and e-commerce solutions — building digital experiences that push boundaries.
          </p>
 
          <div style={{ display: "flex", gap: 9 }}>
            {SOCIALS.map(s => <SocialBtn key={s.label} item={s} />)}
          </div>
 
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
            <span className="_ftDot" style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#00ffd1", display: "block",
            }} />
            <span style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(0,255,209,0.6)",
            }}>Available for work</span>
          </div>
        </div>
 
        {/* ── Col 2: Navigation ── */}
        <div>
          <p style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 10, letterSpacing: "0.34em", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 22px",
          }}>Navigation</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {NAV_LINKS.map(l => <FooterLink key={l.href} {...l} />)}
          </div>
        </div>
 
        {/* ── Col 3: Services ── */}
        <div>
          <p style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 10, letterSpacing: "0.34em", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 22px",
          }}>Services</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SERVICES.map(s => (
              <span key={s} style={{
                display: "flex", alignItems: "center", gap: 10,
                fontSize: 13, color: "rgba(180,220,215,0.5)",
                fontFamily: "'DM Sans',sans-serif",
              }}>
                <span style={{
                  width: 4, height: 4, borderRadius: "50%",
                  background: "rgba(0,255,209,0.28)", flexShrink: 0,
                }} />
                {s}
              </span>
            ))}
          </div>
        </div>
 
        {/* ── Col 4: Newsletter + Contact ── */}
        <div>
          <p style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 10, letterSpacing: "0.34em", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 14px",
          }}>Stay Updated</p>
 
          <p style={{ fontSize: 13, color: "rgba(180,220,215,0.5)", margin: "0 0 16px", lineHeight: 1.65, fontFamily: "'DM Sans',sans-serif" }}>
            Get notified about new projects and tech articles.
          </p>
 
          {sent ? (
            <div style={{
              padding: "12px 16px",
              border: "1px solid rgba(0,255,209,0.3)",
              borderRadius: 3, background: "rgba(0,255,209,0.06)",
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#00ffd1", display: "flex", alignItems: "center", gap: 8,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l4 4 6-7" stroke="#00ffd1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Subscribed!
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                style={{
                  background: "rgba(0,20,18,0.6)",
                  border: "1px solid rgba(0,255,209,0.18)",
                  borderRadius: 3, padding: "10px 14px",
                  fontSize: 13, color: "rgba(200,235,230,0.85)",
                  fontFamily: "'DM Sans',sans-serif",
                  outline: "none", width: "100%", boxSizing: "border-box",
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  padding: "11px",
                  background: "transparent",
                  border: "1.5px solid rgba(0,255,209,0.38)",
                  borderRadius: 3, cursor: "pointer",
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                  fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
                  color: "#00ffd1", transition: "background .2s, box-shadow .2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,255,209,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(0,255,209,0.2)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Subscribe →
              </button>
            </div>
          )}
 
          {/* quick contact links */}
          <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 11 }}>
            {[
              {
                href: "mailto:abdullahhkkhann@gmail.com",
                label: "abdullahhkkhann@gmail.com",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
              {
                href: "tel:+92337896679",
                label: "+92 337 896 679",
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
                  </svg>
                ),
              },
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  fontSize: 13, color: "rgba(180,220,215,0.5)",
                  textDecoration: "none", transition: "color .2s",
                  fontFamily: "'DM Sans',sans-serif",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(0,255,209,0.9)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(180,220,215,0.5)"}
              >
                <span style={{ color: "rgba(0,255,209,0.4)", flexShrink: 0 }}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
 
      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: "1px solid rgba(0,255,209,0.06)", position: "relative", zIndex: 1 }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "18px 40px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 10,
        }}>
          <span style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(0,255,209,0.22)",
          }}>
            © {year} Aether Studios. All rights reserved.
          </span>
 
          <div style={{ display: "flex", gap: 22 }}>
            {["Privacy Policy", "Terms of Service"].map(t => (
              <Link key={t} href="#"
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(0,255,209,0.22)", textDecoration: "none", transition: "color .2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(0,255,209,0.6)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(0,255,209,0.22)"}
              >{t}</Link>
            ))}
          </div>
 
          <span style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(0,255,209,0.18)",
          }}>
            Built with Next.js · Karachi, PK
          </span>
        </div>
      </div>
 
    </footer>
  );
}