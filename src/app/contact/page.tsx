"use client";

import NavBar from "../../components/NavBar";
import { useState, useEffect, useRef } from "react";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

const INFO_ITEMS = [
  {
    label: "Email",
    value: "abdullahhkkhann@gmail.com",
    href: "mailto:abdullahhkkhann@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+92 337 829 6679",
    href: "tel:+923378296679",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

const SUBJECTS = ["General Inquiry", "Project Request", "Collaboration", "Job Opportunity", "Other"];

function InputField({
  label, id, type = "text", placeholder, value, onChange, required = false,
}: {
  label: string; id: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label htmlFor={id} style={{
        fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
        fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
        color: focused ? "#00ffd1" : "rgba(0,255,209,0.5)",
        transition: "color .2s",
      }}>
        {label}{required && <span style={{ color: "#00ffd1", marginLeft: 3 }}>*</span>}
      </label>
      <input
        id={id} type={type} placeholder={placeholder}
        value={value} onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        required={required}
        style={{
          background: "rgba(0,20,18,0.6)",
          border: `1px solid ${focused ? "rgba(0,255,209,0.5)" : "rgba(0,255,209,0.15)"}`,
          boxShadow: focused ? "0 0 16px rgba(0,255,209,0.08)" : "none",
          borderRadius: 4, padding: "12px 16px",
          fontSize: 14, color: "rgba(210,240,235,0.9)",
          fontFamily: "'DM Sans',sans-serif",
          outline: "none", width: "100%", boxSizing: "border-box",
          transition: "border-color .2s, box-shadow .2s",
        }}
      />
    </div>
  );
}

function SocialLink({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href} target="_blank" rel="noreferrer" aria-label={label}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 44, height: 44, borderRadius: 4,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${hov ? "rgba(0,255,209,0.5)" : "rgba(0,255,209,0.15)"}`,
        background: hov ? "rgba(0,255,209,0.08)" : "transparent",
        color: hov ? "#00ffd1" : "rgba(0,255,209,0.4)",
        textDecoration: "none", transition: "all .2s",
        boxShadow: hov ? "0 0 16px rgba(0,255,209,0.15)" : "none",
      }}
    >{icon}</a>
  );
}

function TextAreaField({
  label, id, placeholder, value, onChange, required = false, rows = 5,
}: {
  label: string; id: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean; rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label htmlFor={id} style={{
        fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
        fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
        color: focused ? "#00ffd1" : "rgba(0,255,209,0.5)",
        transition: "color .2s",
      }}>
        {label}{required && <span style={{ color: "#00ffd1", marginLeft: 3 }}>*</span>}
      </label>
      <textarea
        id={id} placeholder={placeholder} rows={rows}
        value={value} onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        required={required}
        style={{
          background: "rgba(0,20,18,0.6)",
          border: `1px solid ${focused ? "rgba(0,255,209,0.5)" : "rgba(0,255,209,0.15)"}`,
          boxShadow: focused ? "0 0 16px rgba(0,255,209,0.08)" : "none",
          borderRadius: 4, padding: "12px 16px",
          fontSize: 14, color: "rgba(210,240,235,0.9)",
          fontFamily: "'DM Sans',sans-serif",
          outline: "none", width: "100%", boxSizing: "border-box",
          resize: "vertical", minHeight: 140,
          transition: "border-color .2s, box-shadow .2s",
        }}
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", subject: SUBJECTS[0], message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);
  const spinRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const id = "contact-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      @keyframes _ctFadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
      @keyframes _ctPulse  { 0%,100%{box-shadow:0 0 6px #00ffd1} 50%{box-shadow:0 0 16px #00ffd1,0 0 28px rgba(0,255,209,0.4)} }
      ._ctA { animation: _ctFadeUp .5s .10s both }
      ._ctB { animation: _ctFadeUp .5s .22s both }
      ._ctC { animation: _ctFadeUp .5s .34s both }
      ._ctD { animation: _ctFadeUp .5s .46s both }
      ._ctE { animation: _ctFadeUp .5s .58s both }
      ._ctDot { animation: _ctPulse 2.5s ease-in-out infinite }

      /* Mobile input placeholder color */
      input::placeholder, textarea::placeholder { color: rgba(0,255,209,0.2); }

      /* Prevent iOS zoom on input focus */
      @media (max-width: 768px) {
        input, textarea, select { font-size: 16px !important; }
      }
    `;
    document.head.appendChild(s);
  }, []);

  // spinning ring animation
  useEffect(() => {
    let angle = 0, raf: number;
    const tick = () => {
      angle += 0.2;
      if (spinRef.current)
        spinRef.current.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const field = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (v: string) => setForm(f => ({ ...f, [k]: v })),
  });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#030d10", fontFamily: "'DM Sans',sans-serif" }}>
      <NavBar />

      {/* ── PAGE HERO ── */}
      <section style={{
        position: "relative", overflow: "hidden",
        padding: isMobile ? "60px 20px 48px" : "80px 40px 64px",
        textAlign: "center",
        borderBottom: "1px solid rgba(0,255,209,0.07)",
      }}>
        {/* grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(0,255,209,0.03) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(0,255,209,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* ambient */}
        <div style={{
          position: "absolute", top: -150, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse,rgba(0,180,150,0.12) 0%,transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* ring system — hidden on mobile to avoid overflow */}
        {!isMobile && (
          <>
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(0,255,209,0.08)", transform: "translate(-50%,-50%)" }} />
            <div ref={spinRef} style={{ position: "absolute", top: "50%", left: "50%", width: 420, height: 420, borderRadius: "50%", border: "1px dashed rgba(0,255,209,0.12)", transform: "translate(-50%,-50%)" }} />
          </>
        )}

        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="_ctA" style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 11, letterSpacing: "0.38em", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 12px",
          }}>Let's Connect</p>
          <h1 className="_ctB" style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
            fontSize: "clamp(2.2rem,8vw,4.5rem)", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 16px", lineHeight: 1,
            textShadow: "0 0 40px rgba(0,255,209,0.3)",
          }}>Get In Touch</h1>
          <div className="_ctC" style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
            <span style={{ height: 1, width: 50, background: "linear-gradient(90deg,transparent,#00ffd1)", display: "block" }} />
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00ffd1", boxShadow: "0 0 8px #00ffd1" }} />
            <span style={{ height: 1, width: 50, background: "linear-gradient(90deg,#00ffd1,transparent)", display: "block" }} />
          </div>
          <p className="_ctC" style={{ fontSize: 15, color: "rgba(200,230,225,0.6)", maxWidth: 480, margin: "0 auto" }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: isMobile ? "48px 16px 80px" : "80px 40px 120px",
        display: "grid",
        // Stack vertically on mobile, side-by-side on desktop
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.6fr",
        gap: isMobile ? 40 : 60,
        alignItems: "start",
      }}>

        {/* ── LEFT: contact info ── */}
        <div className="_ctD" style={{ display: "flex", flexDirection: "column", gap: isMobile ? 28 : 36 }}>
          <div>
            <p style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 10, letterSpacing: "0.34em", textTransform: "uppercase",
              color: "#00ffd1", margin: "0 0 20px",
            }}>Contact Information</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {INFO_ITEMS.map(item => (
                <a key={item.label} href={item.href}
                  style={{ display: "flex", alignItems: "flex-start", gap: 16, textDecoration: "none" } as React.CSSProperties}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.querySelector(".info-icon")?.setAttribute("style", "width:44px;height:44px;border-radius:4px;background:rgba(0,255,209,0.12);border:1px solid rgba(0,255,209,0.4);display:flex;align-items:center;justify-content:center;color:#00ffd1;flex-shrink:0;transition:all .2s;box-shadow:0 0 16px rgba(0,255,209,0.15)");
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.querySelector(".info-icon")?.setAttribute("style", "width:44px;height:44px;border-radius:4px;background:rgba(0,255,209,0.06);border:1px solid rgba(0,255,209,0.15);display:flex;align-items:center;justify-content:center;color:rgba(0,255,209,0.5);flex-shrink:0;transition:all .2s");
                  }}
                >
                  <div className="info-icon" style={{
                    width: 44, height: 44, borderRadius: 4,
                    background: "rgba(0,255,209,0.06)",
                    border: "1px solid rgba(0,255,209,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(0,255,209,0.5)", flexShrink: 0, transition: "all .2s",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                      fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase",
                      color: "rgba(0,255,209,0.4)", margin: "0 0 4px",
                    }}>{item.label}</p>
                    <p style={{
                      fontSize: 14, color: "rgba(210,240,235,0.8)", margin: 0,
                      fontFamily: "'DM Sans',sans-serif",
                      // Allow long email to wrap on mobile
                      wordBreak: "break-all",
                    }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* availability */}
          <div style={{
            padding: "20px 22px",
            background: "rgba(0,255,209,0.04)",
            border: "1px solid rgba(0,255,209,0.12)",
            borderRadius: 6, display: "flex", alignItems: "center", gap: 14,
          }}>
            <span className="_ctDot" style={{
              width: 10, height: 10, borderRadius: "50%",
              background: "#00ffd1", flexShrink: 0, display: "block",
            }} />
            <div>
              <p style={{
                fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#00ffd1", margin: "0 0 3px",
              }}>Available for Projects</p>
              <p style={{ fontSize: 12, color: "rgba(180,220,215,0.5)", margin: 0 }}>
                Currently accepting new freelance & full-time opportunities
              </p>
            </div>
          </div>

          {/* social links */}
          <div>
            <p style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 10, letterSpacing: "0.34em", textTransform: "uppercase",
              color: "#00ffd1", margin: "0 0 16px",
            }}>Find Me Online</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {SOCIALS.map(s => (
                <SocialLink key={s.label} label={s.label} href={s.href} icon={s.icon} />
              ))}
            </div>
          </div>

          {/* decorative corner box */}
          <div style={{
            position: "relative",
            padding: "24px",
            background: "linear-gradient(135deg,rgba(0,30,25,0.6) 0%,rgba(3,13,16,0.8) 100%)",
            border: "1px solid rgba(0,255,209,0.1)",
            borderRadius: 6, marginTop: 4,
          }}>
            <span style={{ position:"absolute", top:0, left:0, width:12, height:12, borderTop:"1.5px solid rgba(0,255,209,0.4)", borderLeft:"1.5px solid rgba(0,255,209,0.4)" }} />
            <span style={{ position:"absolute", bottom:0, right:0, width:12, height:12, borderBottom:"1.5px solid rgba(0,255,209,0.4)", borderRight:"1.5px solid rgba(0,255,209,0.4)" }} />
            <p style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(0,255,209,0.5)", margin: "0 0 8px",
            }}>Response Time</p>
            <p style={{ fontSize: 13, color: "rgba(180,220,215,0.55)", margin: 0, lineHeight: 1.7 }}>
              I typically respond within <span style={{ color: "#00ffd1" }}>24 hours</span>. For urgent enquiries, reach out via phone or LinkedIn.
            </p>
          </div>
        </div>

        {/* ── RIGHT: contact form ── */}
        <div className="_ctE" style={{
          position: "relative",
          background: "linear-gradient(145deg,rgba(0,30,25,0.55) 0%,rgba(3,13,16,0.85) 100%)",
          border: "1px solid rgba(0,255,209,0.12)",
          borderRadius: 8,
          padding: isMobile ? "28px 20px" : "40px 36px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}>
          {/* corner accents */}
          <span style={{ position:"absolute", top:0, left:0, width:14, height:14, borderTop:"1.5px solid rgba(0,255,209,0.4)", borderLeft:"1.5px solid rgba(0,255,209,0.4)", borderRadius:"2px 0 0 0" }} />
          <span style={{ position:"absolute", top:0, right:0, width:14, height:14, borderTop:"1.5px solid rgba(0,255,209,0.4)", borderRight:"1.5px solid rgba(0,255,209,0.4)", borderRadius:"0 2px 0 0" }} />
          <span style={{ position:"absolute", bottom:0, left:0, width:14, height:14, borderBottom:"1.5px solid rgba(0,255,209,0.4)", borderLeft:"1.5px solid rgba(0,255,209,0.4)", borderRadius:"0 0 0 2px" }} />
          <span style={{ position:"absolute", bottom:0, right:0, width:14, height:14, borderBottom:"1.5px solid rgba(0,255,209,0.4)", borderRight:"1.5px solid rgba(0,255,209,0.4)", borderRadius:"0 0 2px 0" }} />

          <p style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 10, letterSpacing: "0.34em", textTransform: "uppercase",
            color: "#00ffd1", margin: "0 0 6px",
          }}>Send a Message</p>
          <h2 style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
            fontSize: "clamp(1.4rem,5vw,2rem)", textTransform: "uppercase",
            color: "#fff", margin: "0 0 28px",
          }}>Start a Conversation</h2>

          {status === "sent" ? (
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: 20, padding: isMobile ? "32px 12px" : "48px 24px", textAlign: "center",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "rgba(0,255,209,0.08)",
                border: "1.5px solid rgba(0,255,209,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 30px rgba(0,255,209,0.15)",
              }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 14l8 8 12-12" stroke="#00ffd1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
                  fontSize: "1.6rem", textTransform: "uppercase", color: "#00ffd1", margin: "0 0 8px",
                }}>Message Sent!</h3>
                <p style={{ fontSize: 14, color: "rgba(180,220,215,0.6)", margin: 0 }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
              <button onClick={() => { setStatus("idle"); setErrorMsg(""); setForm({ name:"", email:"", subject: SUBJECTS[0], message:"" }); }}
                style={{
                  padding: "10px 28px", background: "transparent",
                  border: "1px solid rgba(0,255,209,0.3)", borderRadius: 3,
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                  fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "rgba(0,255,209,0.7)", cursor: "pointer",
                }}
              >Send Another</button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {/* name + email: side by side on desktop, stacked on mobile */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 18,
              }}>
                <InputField label="Full Name" id="name" placeholder="John Doe" required {...field("name")} />
                <InputField label="Email Address" id="email" type="email" placeholder="john@email.com" required {...field("email")} />
              </div>

              {/* subject pills */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label htmlFor="subject" style={{
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                  fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
                  color: "rgba(0,255,209,0.5)",
                }}>Subject</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {SUBJECTS.map(s => (
                    <button key={s} onClick={() => setForm(f => ({ ...f, subject: s }))}
                      style={{
                        padding: isMobile ? "8px 12px" : "6px 14px",
                        background: form.subject === s ? "rgba(0,255,209,0.12)" : "transparent",
                        border: `1px solid ${form.subject === s ? "#00ffd1" : "rgba(0,255,209,0.18)"}`,
                        borderRadius: 3, cursor: "pointer",
                        fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                        fontSize: isMobile ? 11 : 10, letterSpacing: "0.22em", textTransform: "uppercase",
                        color: form.subject === s ? "#00ffd1" : "rgba(180,220,215,0.45)",
                        transition: "all .2s",
                        boxShadow: form.subject === s ? "0 0 10px rgba(0,255,209,0.12)" : "none",
                        // Make tap targets comfortable on mobile
                        minHeight: isMobile ? 40 : "auto",
                      }}
                    >{s}</button>
                  ))}
                </div>
              </div>

              {/* message */}
              <TextAreaField
                label="Message" id="message"
                placeholder="Tell me about your project, timeline, and budget..."
                required rows={isMobile ? 5 : 6} {...field("message")}
              />

              {/* error banner */}
              {status === "error" && errorMsg && (
                <div style={{
                  padding: "12px 16px",
                  background: "rgba(255,60,60,0.08)",
                  border: "1px solid rgba(255,80,80,0.3)",
                  borderRadius: 4,
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6060" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p style={{ fontSize: 13, color: "rgba(255,160,160,0.85)", margin: 0 }}>{errorMsg}</p>
                </div>
              )}

              {/* submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  padding: isMobile ? "16px 24px" : "15px 36px",
                  background: status === "sending" ? "rgba(0,255,209,0.05)" : "transparent",
                  border: "1.5px solid #00ffd1",
                  borderRadius: 4, cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                  fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase",
                  color: "#00ffd1",
                  boxShadow: "0 0 18px rgba(0,255,209,0.12)",
                  transition: "background .2s, box-shadow .2s",
                  width: "100%", marginTop: 6,
                  // Larger tap target on mobile
                  minHeight: isMobile ? 52 : "auto",
                }}
                onMouseEnter={e => {
                  if (status !== "sending") {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,255,209,0.08)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,255,209,0.22)";
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(0,255,209,0.12)";
                }}
              >
                {status === "sending" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ffd1" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83">
                        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur=".8s" repeatCount="indefinite"/>
                      </path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="#00ffd1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

              <p style={{ fontSize: 11, color: "rgba(180,220,215,0.3)", textAlign: "center", margin: 0 }}>
                Your information is never shared with third parties.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}