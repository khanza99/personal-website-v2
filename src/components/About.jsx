import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  { value: "3+", label: "Certificates Earned" },
  { value: "2+", label: "Years Learning" },
  { value: "2+", label: "Projects Built" },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
        className="about-grid"
      >
        {/* Left: Photo area */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "4/5",
              borderRadius: "24px",
              background: "var(--bg-soft)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Floating accent card */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: "var(--radius)",
              padding: "20px 28px",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              2+
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                marginTop: "4px",
                opacity: 0.9,
                letterSpacing: "0.04em",
              }}
            >
              Years Learning
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div>
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
            About Me
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Building things with
            <br />
            <span style={{ color: "var(--accent)" }}>purpose & passion</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: "1rem",
              fontWeight: 300,
              fontSize: "1rem",
            }}
          >
            Hello and welcome to my personal website! I'm Siti Khanza Salsabila,
            a PPLG student at Wikrama Vocational High School who is passionate
            about web development and technology. I enjoy learning and building
            digital projects while continuously improving my programming skills.
            Some technologies I’ve worked with include PHP, Java, JavaScript,
            Laravel, React JS, PostgreSQL, MySQL, and MongoDB. I’m interested in
            both frontend and backend development, especially creating websites
            that are functional, responsive, and user-friendly. As a student,
            I’m always excited to learn new things, explore new technologies,
            and gain more experience in software development. Thank you for
            visiting my website!
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: "2.5rem",
              fontWeight: 300,
              fontSize: "1rem",
            }}
          >
            Warm regards, Siti Khanza Salsabila
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "1.25rem",
                  background: "var(--bg-soft)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
