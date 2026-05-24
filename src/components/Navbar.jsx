import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Certificates", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 5%",
      height: "68px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(250,248,245,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "var(--transition)",
    }}>
      {/* Logo */}
      <div
        onClick={() => handleNav("Home")}
        style={{ cursor: "pointer", fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}
      >
        Khanza Salsabila<span style={{ color: "var(--accent)" }}>.</span>
      </div>

      {/* Desktop Links */}
      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }}
        className="nav-desktop">
        {links.map(link => (
          <li key={link}>
            <button
              onClick={() => handleNav(link)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: active === link ? 600 : 400,
                color: active === link ? "var(--accent)" : "var(--text-secondary)",
                transition: "var(--transition)",
                letterSpacing: "0.02em",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
                borderBottom: active === link ? "2px solid var(--accent)" : "2px solid transparent",
              }}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
        }}
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            width: "24px", height: "2px",
            background: "var(--text-primary)",
            borderRadius: "2px",
            transition: "var(--transition)",
            display: "block",
          }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "68px",
          left: 0,
          right: 0,
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem 5%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "var(--shadow)",
        }}>
          {links.map(link => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                textAlign: "left",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: active === link ? 600 : 400,
                color: active === link ? "var(--accent)" : "var(--text-primary)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
