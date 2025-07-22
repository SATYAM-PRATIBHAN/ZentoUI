export function GlowCard() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    card: {
      width: "clamp(200px, 80vw, 400px)",
      height: "clamp(220px, 80vw, 400px)",
      borderRadius: "40px",
      background: "linear-gradient(180deg, #0A0909 0%, #09101F 100%)",
      boxShadow:
        "0px 6px 6px -2px rgba(35, 101, 255, 0.15) inset, " +
        "0px -20px 20px -6px rgba(255, 255, 255, 0.60) inset, " +
        "0px -40px 30px -8px rgba(102, 148, 255, 0.50) inset, " +
        "0px -80px 60px -30px #144CCD inset",
      padding: "2rem",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center" as const,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    image: {
      width: "clamp(50px, 20vw, 80px)",
      height: "clamp(50px, 20vw, 80px)",
      borderRadius: "50%",
      border: "2px solid white",
      objectFit: "cover" as const,
      marginBottom: "1rem",
      cursor: "pointer",
      boxShadow: `
        0 0 12px rgba(102, 148, 255, 0.6),
        0 0 24px rgba(35, 101, 255, 0.4),
        0 0 36px rgba(20, 76, 205, 0.6)
      `,
    },
    title: {
      fontSize: "clamp(16px, 4vw, 26px)",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      textShadow: `
        0 0 4px rgba(255, 255, 255, 0.8),
        0 0 10px rgba(102, 148, 255, 0.8)
      `,
    },
    description: {
      fontSize: "clamp(13px, 3vw, 16px)",
      color: "rgba(255, 255, 255, 0.85)",
      lineHeight: 1.5,
      maxWidth: "80%",
      textShadow: "0 0 6px rgba(102,148,255,0.3)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <a
          href="https://x.com/s_pratibhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ik.imagekit.io/3ntksnet2/Character%20Concept%20Pin.jpeg?updatedAt=1753187958813"
            alt="Profile"
            style={styles.image}
          />
        </a>

        <h2 style={styles.title}>Cosmic Card</h2>

        <p style={styles.description}>
          A glowing card component with a sleek, futuristic design.
        </p>
      </div>
    </div>
  );
}
