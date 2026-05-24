import { useState } from "react";
import certificates, { categories } from "../data/certificates";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import CertModal from "./CertModal";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const { ref, isVisible } = useScrollAnimation();

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section
      id="certificates"
      style={{
        padding: "120px 5%",
        background: "var(--bg)",
      }}
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
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
            Portfolio
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Certificates & Courses
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            Verified learning achievements from trusted platforms. Click any
            card to preview the certificate.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "48px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "99px",
                fontSize: "0.85rem",
                fontWeight: 500,
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                transition: "var(--transition)",
                border:
                  activeCategory === cat
                    ? "1.5px solid var(--accent)"
                    : "1.5px solid var(--border)",
                background:
                  activeCategory === cat ? "var(--accent)" : "transparent",
                color:
                  activeCategory === cat ? "#fff" : "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "var(--accent-light)";
                  e.currentTarget.style.color = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="cert-grid"
        >
          {filtered.map((cert, i) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              style={{
                background: "var(--bg-card)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "var(--transition)",
                boxShadow: "var(--shadow)",
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                e.currentTarget.style.borderColor = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {/* Card Top Banner */}
              <div
                style={{
                  height: "140px",
                  overflow: "hidden",
                  borderBottom: "1px solid var(--border)",
                  background: "var(--bg-soft)",
                  position: "relative",
                }}
              >
                {cert.thumbnail ? (
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}44)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.5rem",
                    }}
                  >
                    🏆
                  </div>
                )}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "rgba(255,255,255,0.9)",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#c0392b",
                    letterSpacing: "0.06em",
                  }}
                >
                  PDF
                </div>
              </div>
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    borderRadius: "99px",
                    padding: "2px 10px",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {cert.category}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  {cert.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <span
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}

      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .cert-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
