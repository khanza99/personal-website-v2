import { useScrollAnimation } from "../hooks/useScrollAnimation";
import projects from "../data/projects";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      style={{ padding: "120px 5%", background: "var(--bg-soft)" }}
    >
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
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Projects I've built
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              style={{
                background: "var(--bg-card)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                boxShadow: "var(--shadow)",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                e.currentTarget.style.borderColor = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {/* Thumbnail */}
              {project.thumbnail && (
                <div
                  style={{
                    width: "calc(100% + 4rem)",
                    marginLeft: "-2rem",
                    marginTop: "-2rem",
                    marginBottom: "0.5rem",
                    height: "180px",
                    overflow: "hidden",
                    borderRadius: "var(--radius) var(--radius) 0 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--accent-light)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    fontWeight: 300,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                        borderRadius: "99px",
                        padding: "3px 10px",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "9px",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--accent)",
                        color: "#fff",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "var(--transition)",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.85")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "9px",
                        borderRadius: "var(--radius-sm)",
                        background: "transparent",
                        color: "var(--text-secondary)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        border: "1px solid var(--border)",
                        transition: "var(--transition)",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--accent-light)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      GitHub →
                    </a>
                  )}
                  {!project.demo && !project.repo && (
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        fontStyle: "italic",
                      }}
                    >
                      Coming soon...
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
