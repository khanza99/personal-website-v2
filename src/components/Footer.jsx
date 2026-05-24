export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      padding: "2rem 5%",
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.1rem",
        fontWeight: 700,
        color: "var(--text-primary)",
        letterSpacing: "-0.02em",
      }}>
        Khanza<span style={{ color: "var(--accent)" }}>.</span>
      </div>
      <p style={{
        fontSize: "0.8rem",
        color: "var(--text-muted)",
        fontWeight: 400,
      }}>
        © {year} · Built with React & ❤️
      </p>
    </footer>
  );
}
