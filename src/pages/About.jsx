function About() {
  return (
    <div style={S.page}>

      <div style={S.hero}>
        <h1 style={S.heroTitle}>About AMS Jersey City</h1>
        <p style={S.heroSub}>Nigeria's most trusted football jersey store</p>
      </div>

      <div style={S.grid}>

        <div style={S.card}>
          <div style={S.icon}>🏆</div>
          <h3 style={S.cardTitle}>Our Story</h3>
          <p style={S.cardText}>AMS Jersey City started as a small passion project born out of a deep love for football. What began as selling jerseys to friends and family quickly grew into one of Nigeria's most trusted jersey stores. We started with just a few clubs and have now expanded to stock kits from the world's top leagues and national teams.</p>
        </div>

        <div style={S.card}>
          <div style={S.icon}>👕</div>
          <h3 style={S.cardTitle}>What We Sell</h3>
          <p style={S.cardText}>We stock official home and away jerseys from the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and top national teams including Nigeria, Brazil, France, Argentina and more. We also offer custom jersey printing — any name and number on any jersey.</p>
        </div>

        <div style={S.card}>
          <div style={S.icon}>⭐</div>
          <h3 style={S.cardTitle}>Why Choose Us</h3>
          <p style={S.cardText}>We offer the best prices in Nigeria with fast and reliable delivery. Every jersey is quality checked before it reaches you. Our customer service is available via WhatsApp and we make sure every customer is satisfied. We have served hundreds of customers across Nigeria.</p>
        </div>

        <div style={S.card}>
          <div style={S.icon}>📍</div>
          <h3 style={S.cardTitle}>Our Location</h3>
          <p style={S.cardText}>We are based in Nigeria and deliver nationwide. Place your order online and we will get it to you as fast as possible. Same day delivery available in select locations.</p>
        </div>

      </div>

      <div style={S.cta}>
        <h2 style={S.ctaTitle}>Ready to get your jersey?</h2>
        <p style={S.ctaText}>Browse our full collection of home and away kits from the world's best clubs.</p>
        <a href="/shop" style={S.ctaBtn}>Shop Now</a>
      </div>

    </div>
  );
}

const S = {
  page: { fontFamily: "'Georgia', serif", color: "#222" },
  hero: { background: "#0d0d0d", color: "#fff", padding: "80px 40px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, margin: "0 0 12px", letterSpacing: "-1px" },
  heroSub: { fontSize: 16, color: "#888", margin: 0 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, padding: "60px 40px" },
  card: { background: "#fff", border: "1px solid #eee", borderRadius: 8, padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" },
  icon: { fontSize: 36, marginBottom: 16 },
  cardTitle: { fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "#111" },
  cardText: { fontSize: 14, lineHeight: 1.8, color: "#666", margin: 0 },
  cta: { background: "#0d0d0d", color: "#fff", padding: "80px 40px", textAlign: "center" },
  ctaTitle: { fontSize: 32, fontWeight: 900, margin: "0 0 12px" },
  ctaText: { fontSize: 15, color: "#888", margin: "0 0 28px" },
  ctaBtn: { display: "inline-block", padding: "14px 36px", background: "#c8a96e", color: "#000", borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: 14 },
};

export default About;