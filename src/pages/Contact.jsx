import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }
    const text = `Hello, my name is ${name}. My email is ${email}. ${message}`;
    window.open("https://wa.me/2349160313567?text=" + encodeURIComponent(text));
  };

  return (
    <div style={S.page}>

      <div style={S.hero}>
        <h1 style={S.heroTitle}>Contact Us</h1>
        <p style={S.heroSub}>We are always happy to hear from you</p>
      </div>

      <div style={S.body}>

        <div style={S.formBox}>
          <h2 style={S.sectionTitle}>Send a Message</h2>
          <p style={S.sectionSub}>Fill in the form and we will get back to you via WhatsApp.</p>

          <input style={S.input} placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input style={S.input} placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea style={{ ...S.input, height: 120, resize: "vertical" }} placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />

          <button onClick={handleSubmit} style={S.submitBtn}>Send Message via WhatsApp</button>
        </div>

        <div style={S.infoBox}>

          <h2 style={S.sectionTitle}>Get in Touch</h2>

          <div style={S.infoRow}>
            <span style={S.infoLabel}>Email</span>
            <a href="mailto:adekunleolawale2405@gmail.com" style={S.infoValue}>adekunleolawale2405@gmail.com</a>
          </div>

          <div style={S.infoRow}>
            <span style={S.infoLabel}>Phone</span>
            <a href="tel:+2349160313567" style={S.infoValue}>+234 916 031 3567</a>
          </div>

          <div style={S.infoRow}>
            <span style={S.infoLabel}>Location</span>
            <span style={S.infoValue}>Nigeria — Nationwide Delivery</span>
          </div>

          <a href="https://wa.me/2349160313567" target="_blank" rel="noreferrer" style={S.whatsappBtn}>
            Chat on WhatsApp
          </a>

          <h3 style={{ ...S.sectionTitle, marginTop: 32 }}>Follow Us</h3>
          <div style={S.socials}>

            <a href="https://www.instagram.com/amsdev00?igsh=MWUzczdhdjcwNjB5eg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" style={{ ...S.socialBtn, background: "#E1306C" }}>
              Instagram
            </a>
            <a href="https://www.tiktok.com/@adetechguy?_r=1&_t=ZS-94taW3WIYML" target="_blank" rel="noreferrer" style={{ ...S.socialBtn, background: "#010101" }}>
              TikTok
            </a>
            <a href="https://www.facebook.com/share/1AxLbUHfzS/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={{ ...S.socialBtn, background: "#1877F2" }}>
              Facebook
            </a>
            <a href="https://x.com/ams_dev2?s=21" target="_blank" rel="noreferrer" style={{ ...S.socialBtn, background: "#000" }}>
              X
            </a>

          </div>
        </div>

      </div>

    </div>
  );
}

const S = {
  page: { fontFamily: "'Georgia', serif", color: "#222" },
  hero: { background: "#0d0d0d", color: "#fff", padding: "80px 40px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, margin: "0 0 12px", letterSpacing: "-1px" },
  heroSub: { fontSize: 16, color: "#888", margin: 0 },
  body: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, padding: "60px 40px", maxWidth: 1100, margin: "0 auto" },
  formBox: { display: "flex", flexDirection: "column", gap: 14 },
  infoBox: { display: "flex", flexDirection: "column", gap: 16 },
  sectionTitle: { fontSize: 22, fontWeight: 700, margin: "0 0 6px", color: "#111" },
  sectionSub: { fontSize: 14, color: "#888", margin: "0 0 8px" },
  input: { padding: "12px 16px", border: "1px solid #ddd", borderRadius: 4, fontSize: 14, fontFamily: "'Georgia', serif", outline: "none", width: "100%", boxSizing: "border-box" },
  submitBtn: { padding: "14px", background: "#25D366", color: "#fff", border: "none", borderRadius: 4, fontWeight: 700, fontSize: 14, cursor: "pointer" },
  infoRow: { display: "flex", flexDirection: "column", gap: 2, paddingBottom: 14, borderBottom: "1px solid #eee" },
  infoLabel: { fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaa" },
  infoValue: { fontSize: 14, color: "#333", textDecoration: "none" },
  whatsappBtn: { display: "inline-block", padding: "12px 24px", background: "#25D366", color: "#fff", borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: 14, textAlign: "center" },
  socials: { display: "flex", gap: 10, flexWrap: "wrap" },
  socialBtn: { padding: "10px 18px", color: "#fff", borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: 13 },
};

export default Contact;