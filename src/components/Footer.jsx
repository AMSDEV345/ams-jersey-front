import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={S.footer}>
      <div style={S.top}>

        <div style={S.brand}>
          <h2 style={S.brandName}>AMS Jersey City</h2>
          <p style={S.brandDesc}>Nigeria's finest jersey store. Official kits, retro classics, and premium streetwear — delivered nationwide.</p>
          <div style={S.socials}>
            <a href="https://www.instagram.com/amsdev00?igsh=MWUzczdhdjcwNjB5eg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" style={S.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@adetechguy?_r=1&_t=ZS-94taW3WIYML" target="_blank" rel="noreferrer" style={S.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1AxLbUHfzS/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={S.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/ams_dev2?s=21" target="_blank" rel="noreferrer" style={S.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://wa.me/2349160313567" target="_blank" rel="noreferrer" style={S.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        <div style={S.col}>
          <h4 style={S.colTitle}>Customer Service</h4>
          <p style={S.colLink}>FAQ</p>
          <p style={S.colLink}>Privacy Policy</p>
          <p style={S.colLink}>Returns & Refunds</p>
          <p style={S.colLink}>Terms & Conditions</p>
        </div>

        <div style={S.col}>
          <h4 style={S.colTitle}>Contact</h4>
          <a href="mailto:adekunleolawale2405@gmail.com" style={S.colLink}>adekunleolawale2405@gmail.com</a>
          <a href="tel:+2349160313567" style={S.colLink}>+234 916 031 3567</a>
          <a href="https://wa.me/2349160313567" target="_blank" rel="noreferrer" style={S.whatsappBtn}>Chat on WhatsApp</a>
        </div>

      </div>

      <div style={S.newsletter}>
        <p style={S.newsletterText}>Subscribe for latest jerseys and exclusive offers</p>
        <div style={S.newsletterRow}>
          <input type="email" placeholder="Your email address" style={S.newsletterInput} />
          <button style={S.newsletterBtn}>Subscribe</button>
        </div>
      </div>

      <div style={S.bottom}>
        <p style={S.copyright}>© 2026 AMS Jersey City — All rights reserved</p>
      </div>

    </footer>
  );
}

const S = {
  footer: { background: "#050505", color: "#666", fontFamily: "'Georgia', serif", borderTop: "1px solid #141414" },
  top: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, padding: "48px 24px 40px", borderBottom: "1px solid #141414" },
  brand: { display: "flex", flexDirection: "column", gap: 14 },
  brandName: { color: "#f0e6d3", fontSize: 18, fontWeight: 900, margin: 0 },
  brandDesc: { fontSize: 13, lineHeight: 1.8, color: "#555", margin: 0 },
  socials: { display: "flex", gap: 14, flexWrap: "wrap" },
  socialIcon: { color: "#666", display: "flex", alignItems: "center", transition: "color 0.2s" },
  col: { display: "flex", flexDirection: "column", gap: 10 },
  colTitle: { color: "#f0e6d3", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 6px", fontFamily: "'Courier New', monospace" },
  colLink: { fontSize: 13, color: "#555", textDecoration: "none", margin: 0, lineHeight: 1.6 },
  whatsappBtn: { display: "inline-block", marginTop: 6, padding: "8px 14px", background: "#25D366", color: "#fff", borderRadius: 3, textDecoration: "none", fontSize: 12, fontWeight: 700, alignSelf: "flex-start" },
  newsletter: { padding: "24px", borderBottom: "1px solid #141414", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" },
  newsletterText: { fontSize: 13, color: "#666", margin: 0 },
  newsletterRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  newsletterInput: { padding: "10px 14px", background: "#0d0d0d", border: "1px solid #222", borderRadius: 3, color: "#f0e6d3", fontSize: 13, outline: "none", minWidth: 200, flex: 1 },
  newsletterBtn: { padding: "10px 18px", background: "#c8a96e", color: "#000", border: "none", borderRadius: 3, fontWeight: 700, fontSize: 12, fontFamily: "'Courier New', monospace", cursor: "pointer", whiteSpace: "nowrap" },
  bottom: { padding: "16px 24px", textAlign: "center" },
  copyright: { fontSize: 11, color: "#333", margin: 0, fontFamily: "'Courier New', monospace" },
};

export default Footer;