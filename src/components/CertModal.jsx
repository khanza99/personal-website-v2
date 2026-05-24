import { useEffect } from "react";

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(26,26,26,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius)",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
          animation: "slideUp 0.3s ease",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "20px 24px",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}>
              {cert.title}
            </h3>
            <p style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              marginTop: "2px",
            }}>
              {cert.issuer} · {cert.date}
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {/* Download button */}
            <a
              href={cert.file}
              download
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "var(--accent-soft)",
                color: "var(--accent)",
                padding: "8px 16px",
                borderRadius: "99px",
                fontSize: "0.8rem",
                fontWeight: 600,
                border: "1px solid var(--accent-light)",
                textDecoration: "none",
                transition: "var(--transition)",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--accent-light)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--accent-soft)"}
            >
              ↓ Download
            </a>
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "var(--bg-soft)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                transition: "var(--transition)",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--border)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-soft)"; }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div style={{ flex: 1, overflow: "auto", background: "#f0ede8" }}>
          <iframe
            src={cert.file}
            title={cert.title}
            width="100%"
            height="100%"
            style={{
              border: "none",
              minHeight: "600px",
              display: "block",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
