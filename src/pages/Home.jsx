import { Link } from "react-router-dom";
import { leagues } from "../data/leagues";
import products from "../data/products";

function Home() {
  const featured = products.slice(0, 6);

  return (
    <div style={S.page}>

      {/* Hero */}
      <section style={S.hero}>
        <div style={S.heroOverlay} />
        <div style={S.heroContent}>
          <p style={S.heroEyebrow}>Official Kits · Retro · Streetwear</p>
          <h1 style={S.heroTitle}>THE JERSEY<br /><em style={S.heroItalic}>VAULT</em></h1>
          <p style={S.heroSub}>Nigeria's finest collection of football jerseys — from classic retro kits to premium streetwear editions.</p>
          <div style={S.heroBtns}>
            <Link to="/shop" style={S.heroBtnPrimary}>Shop Now</Link>
            <Link to="/custom" style={S.heroBtnSecondary}>Custom Jersey</Link>
          </div>
        </div>
        <div style={S.heroStats}>
          {[["500+", "Jerseys"], ["50+", "Clubs"], ["100%", "Authentic"]].map(([num, label]) => (
            <div key={label} style={S.stat}>
              <span style={S.statNum}>{num}</span>
              <span style={S.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section style={S.section}>
        <div style={S.sectionHeader}>
          <p style={S.eyebrow}>Browse By</p>
          <h2 style={S.sectionTitle}>Collections</h2>
        </div>
        <div style={S.categoryGrid}>
          {[
            { name: "Retro Kits", desc: "Classic kits from football's golden era", path: "/shop" },
            { name: "Streetwear", desc: "Football culture meets street fashion", path: "/shop" },
            { name: "Special Edition", desc: "Limited and concept jerseys", path: "/shop" },
            { name: "National Teams", desc: "Represent your country in style", path: "/shop" },
          ].map((cat) => (
            <Link to={cat.path} key={cat.name} style={S.categoryCard}>
              <h3 style={S.categoryName}>{cat.name}</h3>
              <p style={S.categoryDesc}>{cat.desc}</p>
              <span style={S.categoryArrow}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ ...S.section, background: "#0a0a0a" }}>
        <div style={S.sectionHeader}>
          <p style={S.eyebrow}>Hand Picked</p>
          <h2 style={S.sectionTitle}>Featured Jerseys</h2>
        </div>
        <div style={S.productGrid}>
          {featured.map((p) => (
            <Link to={`/product/${p._id}`} key={p._id} style={S.productCard}>
              {p.badge && <span style={S.badge}>{p.badge}</span>}
              <div style={S.productImgWrap}>
                <img src={p.image} alt={p.name} style={S.productImg} onError={(e) => (e.target.style.display = "none")} />
              </div>
              <div style={S.productInfo}>
                <p style={S.productName}>{p.name}</p>
                <p style={S.productPrice}>₦{p.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link to="/shop" style={S.heroBtnPrimary}>View All Jerseys</Link>
        </div>
      </section>

      {/* Leagues */}
      <section style={S.section}>
        <div style={S.sectionHeader}>
          <p style={S.eyebrow}>Shop By</p>
          <h2 style={S.sectionTitle}>League</h2>
        </div>
        <div style={S.leagueGrid}>
          {leagues.slice(0, 6).map((league) => (
            <Link to="/shop" key={league.name} style={S.leagueCard}>
              <h4 style={S.leagueName}>{league.name}</h4>
              <p style={S.leagueCount}>{league.teams.length} clubs</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={S.cta}>
        <h2 style={S.ctaTitle}>Want a Custom Jersey?</h2>
        <p style={S.ctaSub}>Get your name and number printed on any jersey. Fast delivery across Nigeria.</p>
        <Link to="/custom" style={S.heroBtnPrimary}>Order Custom Jersey</Link>
      </section>

    </div>
  );
}

const S = {
  page: { background: "#080808", color: "#f0e6d3", fontFamily: "'Georgia', serif", minHeight: "100vh" },
  hero: { position: "relative", minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 40px 40px", background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0d0d0d 100%)", overflow: "hidden" },
  heroOverlay: { position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, #c8a96e11 0%, transparent 60%)", pointerEvents: "none" },
  heroContent: { position: "relative", zIndex: 1, maxWidth: 700 },
  heroEyebrow: { fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.3em", color: "#c8a96e", margin: "0 0 20px", textTransform: "uppercase" },
  heroTitle: { fontSize: "clamp(56px, 10vw, 120px)", fontWeight: 900, lineHeight: 0.85, margin: "0 0 24px", letterSpacing: "-3px", color: "#f0e6d3" },
  heroItalic: { fontStyle: "italic", color: "#c8a96e" },
  heroSub: { fontSize: 16, lineHeight: 1.8, color: "#888", margin: "0 0 36px", maxWidth: 500 },
  heroBtns: { display: "flex", gap: 16, flexWrap: "wrap" },
  heroBtnPrimary: { padding: "14px 32px", background: "#c8a96e", color: "#000", textDecoration: "none", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", borderRadius: 2, fontFamily: "'Courier New', monospace" },
  heroBtnSecondary: { padding: "14px 32px", background: "transparent", color: "#f0e6d3", textDecoration: "none", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", borderRadius: 2, border: "1px solid #444", fontFamily: "'Courier New', monospace" },
  heroStats: { display: "flex", gap: 48, marginTop: 60, position: "relative", zIndex: 1 },
  stat: { display: "flex", flexDirection: "column" },
  statNum: { fontSize: 36, fontWeight: 900, color: "#c8a96e", lineHeight: 1 },
  statLabel: { fontSize: 11, letterSpacing: "0.2em", color: "#555", fontFamily: "'Courier New', monospace", marginTop: 4 },
  section: { padding: "80px 40px" },
  sectionHeader: { marginBottom: 48 },
  eyebrow: { fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: "#c8a96e", margin: "0 0 8px", textTransform: "uppercase" },
  sectionTitle: { fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, margin: 0, color: "#f0e6d3", letterSpacing: "-1px" },
  categoryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 },
  categoryCard: { background: "#111", border: "1px solid #1e1e1e", borderRadius: 4, padding: "32px 24px", textDecoration: "none", display: "flex", flexDirection: "column", gap: 8, transition: "border-color 0.2s" },
  categoryName: { fontSize: 18, fontWeight: 700, color: "#f0e6d3", margin: 0 },
  categoryDesc: { fontSize: 13, color: "#666", margin: 0, lineHeight: 1.6 },
  categoryArrow: { fontSize: 18, color: "#c8a96e", marginTop: 8 },
  productGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 },
  productCard: { background: "#111", border: "1px solid #1e1e1e", borderRadius: 4, textDecoration: "none", overflow: "hidden", position: "relative", display: "block" },
  badge: { position: "absolute", top: 12, left: 12, background: "#c8a96e", color: "#000", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 2, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", zIndex: 1 },
  productImgWrap: { background: "#0d0d0d", padding: 20, display: "flex", alignItems: "center", justifyContent: "center", height: 200 },
  productImg: { width: "100%", height: "100%", objectFit: "contain" },
  productInfo: { padding: "12px 16px 16px" },
  productName: { fontSize: 12, color: "#d4c4a8", margin: "0 0 6px", fontFamily: "'Courier New', monospace", letterSpacing: "0.04em" },
  productPrice: { fontSize: 16, fontWeight: 700, color: "#c8a96e", margin: 0 },
  leagueGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 },
  leagueCard: { background: "#111", border: "1px solid #1e1e1e", borderRadius: 4, padding: "24px 20px", textDecoration: "none", display: "block" },
  leagueName: { fontSize: 13, fontWeight: 700, color: "#f0e6d3", margin: "0 0 4px", fontFamily: "'Courier New', monospace" },
  leagueCount: { fontSize: 11, color: "#555", margin: 0, letterSpacing: "0.1em" },
  cta: { background: "#0d0d0d", borderTop: "1px solid #1a1a1a", padding: "80px 40px", textAlign: "center" },
  ctaTitle: { fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", color: "#f0e6d3" },
  ctaSub: { fontSize: 15, color: "#666", margin: "0 0 32px", lineHeight: 1.7 },
};

export default Home;