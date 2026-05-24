import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST API", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: ["Git & GitHub", "Figma", "VS Code", "Vite", "npm / yarn"],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" style={{
      padding: "120px 5%",
      background: "var(--bg-soft)",
    }}>
      <div
        ref={ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>Skills</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}>
            What I work with
          </h2>
        </div>

        {/* Skill Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }} className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              style={{
                background: "var(--bg-card)",
                borderRadius: "var(--radius)",
                padding: "2.5rem 2rem",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
                transition: "var(--transition)",
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                e.currentTarget.style.borderColor = "var(--accent-light)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{group.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                color: "var(--text-primary)",
              }}>
                {group.category}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {group.skills.map(skill => (
                  <li key={skill} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{
                      width: "6px", height: "6px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      fontWeight: 400,
                    }}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
