import { useScrollAnimation } from "../hooks/useScrollAnimation";

const socials = [
  { label: "GitHub", icon: "⌥", href: "https://github.com/khanza99" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/khanza-salsabila-b47810380" },
  { label: "Email", icon: "@", href: "salsabilakhanza956@email.com" },
  { label: "Instagram", icon: "◻", href: "https://www.instagram.com/khanzzaa.s/" },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" style={{
      padding: "120px 5%",
      background: "var(--bg-soft)",
    }}>
      <div
        ref={ref}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p style={{
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "var(--accent)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>Contact</p>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
          marginBottom: "1.25rem",
          lineHeight: 1.1,
        }}>
          Let's work<br />
          <span style={{ color: "var(--accent)" }}>together</span>
        </h2>

        <p style={{
          color: "var(--text-secondary)",
          fontSize: "1rem",
          lineHeight: 1.8,
          marginBottom: "3rem",
          fontWeight: 300,
        }}>
          I'm currently open to new opportunities. Whether it's a project, 
          collaboration, or just a chat — my inbox is always open.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:your@email.com"
          style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "#fff",
            padding: "16px 40px",
            borderRadius: "99px",
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            textDecoration: "none",
            transition: "var(--transition)",
            boxShadow: "0 4px 20px rgba(193,122,58,0.35)",
            marginBottom: "3.5rem",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(193,122,58,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(193,122,58,0.35)"; }}
        >
          Say Hello →
        </a>

        {/* Divider */}
        <div style={{
          width: "48px",
          height: "1px",
          background: "var(--border)",
          margin: "0 auto 2.5rem",
        }} />

        {/* Social Links */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}>
          {socials.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "99px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "var(--transition)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent-light)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "var(--bg-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}>
                {social.icon}
              </span>
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
