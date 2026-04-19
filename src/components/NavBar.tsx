"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
 
const navItems = [
  { href: "/",          label: "Home"     },
  { href: "/services",  label: "Services" },
  { href: "/about",     label: "About"    },
  { href: "/contact",   label: "Contact"  },
];
 
export default function NavBar() {
  const pathname   = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
 
  // inject font + keyframes once
  useEffect(() => {
    const id = "nav-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      @keyframes _navSlide { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
      ._navIn { animation: _navSlide .35s both }
    `;
    document.head.appendChild(s);
  }, []);
 
  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  // close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
 
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
 
  return (
    <header className="_navIn" style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      fontFamily: "'DM Sans', sans-serif",
      background: scrolled
        ? "rgba(3,13,16,0.92)"
        : "rgba(3,13,16,0.75)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,255,209,0.1)",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      transition: "background .3s, box-shadow .3s",
    }}>
 
      {/* top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent 0%, rgba(0,255,209,0.5) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />
 
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 32px",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}>
 
        {/* ── LOGO ── */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#00ffd1",
            textShadow: "0 0 18px rgba(0,255,209,0.5), 0 0 40px rgba(0,255,209,0.2)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            {/* small hex icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
              <polygon points="10,1 18,5.5 18,14.5 10,19 2,14.5 2,5.5"
                stroke="#00ffd1" strokeWidth="1.5" fill="rgba(0,255,209,0.08)"
                strokeLinejoin="round"
              />
              <polygon points="10,5 14.5,7.5 14.5,12.5 10,15 5.5,12.5 5.5,7.5"
                fill="rgba(0,255,209,0.15)"
              />
            </svg>
            M. Abdullah Khan
          </span>
        </Link>
 
        {/* ── DESKTOP NAV ── */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href}
                style={{
                  position: "relative",
                  padding: "6px 16px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: active ? "#00ffd1" : "rgba(200,230,225,0.6)",
                  transition: "color .2s",
                }}
                onMouseEnter={e => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(200,230,225,0.95)";
                }}
                onMouseLeave={e => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(200,230,225,0.6)";
                }}
              >
                {item.label}
                {/* active underline */}
                {active && (
                  <span style={{
                    position: "absolute",
                    bottom: -1, left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%", height: 1,
                    background: "#00ffd1",
                    boxShadow: "0 0 8px #00ffd1",
                    borderRadius: 1,
                    display: "block",
                  }} />
                )}
              </Link>
            );
          })}
        </nav>
 
        {/* ── CTA BUTTON ── */}
        <Link href="/services"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "9px 22px",
            background: "transparent",
            border: "1.5px solid rgba(0,255,209,0.45)",
            color: "#00ffd1",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            borderRadius: 3,
            textDecoration: "none",
            boxShadow: "0 0 14px rgba(0,255,209,0.1)",
            transition: "background .2s, border-color .2s, box-shadow .2s",
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "rgba(0,255,209,0.08)";
            el.style.borderColor = "#00ffd1";
            el.style.boxShadow = "0 0 22px rgba(0,255,209,0.25)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(0,255,209,0.45)";
            el.style.boxShadow = "0 0 14px rgba(0,255,209,0.1)";
          }}
        >
          View Services
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
 
        {/* ── MOBILE HAMBURGER ── */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: "none", // shown via media query below
            background: "transparent",
            border: "1px solid rgba(0,255,209,0.25)",
            borderRadius: 3,
            padding: "7px 9px",
            cursor: "pointer",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
          id="nav-hamburger"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: 18, height: 1.5,
              background: "#00ffd1",
              borderRadius: 1,
              transition: "transform .2s, opacity .2s",
              ...(open && i === 0 ? { transform: "translateY(5.5px) rotate(45deg)" } : {}),
              ...(open && i === 1 ? { opacity: 0 } : {}),
              ...(open && i === 2 ? { transform: "translateY(-5.5px) rotate(-45deg)" } : {}),
            }} />
          ))}
        </button>
 
      </div>
 
      {/* ── MOBILE DROPDOWN ── */}
      {open && (
        <div ref={menuRef} style={{
          position: "absolute",
          top: "100%", left: 0, right: 0,
          background: "rgba(3,13,16,0.97)",
          borderBottom: "1px solid rgba(0,255,209,0.12)",
          backdropFilter: "blur(16px)",
          padding: "16px 24px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          zIndex: 49,
        }}>
          {navItems.map((item, idx) => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 8px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: active ? "#00ffd1" : "rgba(200,230,225,0.7)",
                  borderBottom: idx < navItems.length - 1 ? "1px solid rgba(0,255,209,0.07)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  animation: `_navSlide .25s ${idx * 0.05}s both`,
                }}
              >
                {active && (
                  <span style={{
                    width: 4, height: 4, borderRadius: "50%",
                    background: "#00ffd1", boxShadow: "0 0 6px #00ffd1",
                    flexShrink: 0,
                  }} />
                )}
                {item.label}
              </Link>
            );
          })}
          <Link href="/portfolio"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 12,
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "12px 24px",
              border: "1.5px solid rgba(0,255,209,0.45)",
              color: "#00ffd1",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 12,
              letterSpacing: "0.22em", textTransform: "uppercase",
              borderRadius: 3, textDecoration: "none",
              animation: `_navSlide .25s ${navItems.length * 0.05}s both`,
            }}
          >
            View Portfolio
          </Link>
        </div>
      )}
 
      {/* responsive: show hamburger, hide desktop nav on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #nav-hamburger { display: flex !important; }
          #nav-desktop-nav, #nav-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
}