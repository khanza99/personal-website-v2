import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "UI Enthusiast", "Lifelong Learner", "React Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "0 5%",
      paddingTop: "80px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-5%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(193,122,58,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "-8%",
        width: "350px",
        height: "350px",
        background: "radial-gradient(circle, rgba(193,122,58,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "900px",
        animation: "fadeUp 0.9s ease forwards",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--accent-soft)",
          border: "1px solid var(--accent-light)",
          borderRadius: "99px",
          padding: "6px 16px",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "var(--accent)",
          marginBottom: "2rem",
          letterSpacing: "0.04em",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse 2s infinite" }} />
          Available for Work
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          marginBottom: "1.25rem",
        }}>
          Hi, I'm <span style={{ color: "var(--accent)" }}>Khanza Salsabila</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
          fontWeight: 400,
          color: "var(--text-secondary)",
          marginBottom: "1.75rem",
          minHeight: "2.6rem",
          letterSpacing: "-0.01em",
        }}>
          {displayed}
          <span style={{
            display: "inline-block",
            width: "3px",
            height: "1.2em",
            background: "var(--accent)",
            marginLeft: "4px",
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
            borderRadius: "2px",
          }} />
        </div>

        {/* Description */}
        <p style={{
          fontSize: "1.05rem",
          color: "var(--text-secondary)",
          maxWidth: "550px",
          lineHeight: 1.8,
          marginBottom: "2.5rem",
          fontWeight: 300,
        }}>
          Passionate about building clean, intuitive interfaces. I turn ideas into
          delightful digital experiences with modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "99px",
              fontSize: "0.95rem",
              fontWeight: 600,
              fontFamily: "var(--font-body)",
              border: "none",
              cursor: "pointer",
              transition: "var(--transition)",
              boxShadow: "0 4px 20px rgba(193,122,58,0.35)",
              letterSpacing: "0.01em",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(193,122,58,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(193,122,58,0.35)";
            }}
          >
            View CV
          </a>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            style={{
              background: "transparent",
              color: "var(--text-primary)",
              padding: "14px 32px",
              borderRadius: "99px",
              fontSize: "0.95rem",
              fontWeight: 600,
              fontFamily: "var(--font-body)",
              border: "2px solid var(--border)",
              cursor: "pointer",
              transition: "var(--transition)",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: "4rem",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          color: "var(--text-muted)",
          fontSize: "0.8rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          <div style={{
            width: "40px",
            height: "1px",
            background: "var(--accent-light)",
          }} />
          Scroll to explore
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
