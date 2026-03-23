import { useState } from "react";

function Custom() {
  const [name, setName] = useState("");
  const [jerseyName, setJerseyName] = useState("");
  const [number, setNumber] = useState("");
  const [size, setSize] = useState("M");

  const handleSubmit = () => {
    if (!name || !jerseyName || !number) {
      alert("Please fill in all fields before submitting!");
      return;
    }
    const message = `Hello, I want to order a custom jersey!\nName: ${name}\nJersey Name: ${jerseyName}\nNumber: ${number}\nSize: ${size}`;
    window.open("https://wa.me/2349160313567?text=" + encodeURIComponent(message));
  };

  return (
    <div style={S.page}>
      <div style={S.container}>

        <div style={S.header}>
          <p style={S.eyebrow}>Design Your Own</p>
          <h1 style={S.title}>Custom Jersey</h1>
          <p style={S.subtitle}>Fill in the details below and we will print your custom jersey and deliver it to you across Nigeria.</p>
        </div>

        <div style={S.form}>
          <div style={S.field}>
            <label style={S.label}>Your Name</label>
            <input
              style={S.input}
              placeholder="e.g. Mubarak"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={S.field}>
            <label style={S.label}>Jersey Name</label>
            <input
              style={S.input}
              placeholder="e.g. Messi, Ronaldo, your name"
              value={jerseyName}
              onChange={(e) => setJerseyName(e.target.value)}
            />
          </div>

          <div style={S.field}>
            <label style={S.label}>Jersey Number</label>
            <input
              style={S.input}
              placeholder="e.g. 10, 7, 23"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div style={S.field}>
            <label style={S.label}>Size</label>
            <select style={S.select} value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="S">S — Small</option>
              <option value="M">M — Medium</option>
              <option value="L">L — Large</option>
              <option value="XL">XL — Extra Large</option>
            </select>
          </div>

          <button onClick={handleSubmit} style={S.submitBtn}>
            Submit Order via WhatsApp
          </button>
          <p style={S.note}>You will be redirected to WhatsApp to confirm your order with us directly.</p>
        </div>

      </div>
    </div>
  );
}

const S = {
  page: { background: "#080808", minHeight: "100vh", padding: "40px 16px 80px", fontFamily: "'Georgia', serif" },
  container: { maxWidth: 520, margin: "0 auto" },
  header: { marginBottom: 36, borderBottom: "1px solid #1a1a1a", paddingBottom: 24 },
  eyebrow: { fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: "#c8a96e", margin: "0 0 8px", textTransform: "uppercase" },
  title: { fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, color: "#f0e6d3", margin: "0 0 10px", letterSpacing: "-1px" },
  subtitle: { fontSize: 14, color: "#666", margin: 0, lineHeight: 1.7 },
  form: { display: "flex", flexDirection: "column", gap: 20 },
  field: { display: "flex", flexDirection: "column", gap: 8 },
  label: { fontSize: 11, fontFamily: "'Courier New', monospace", letterSpacing: "0.2em", color: "#888", textTransform: "uppercase" },
  input: { padding: "13px 16px", background: "#111", border: "1px solid #2a2a2a", borderRadius: 4, color: "#f0e6d3", fontSize: 14, outline: "none", fontFamily: "'Georgia', serif" },
  select: { padding: "13px 16px", background: "#111", border: "1px solid #2a2a2a", borderRadius: 4, color: "#f0e6d3", fontSize: 14, outline: "none", fontFamily: "'Georgia', serif", cursor: "pointer" },
  submitBtn: { padding: "15px", background: "#25D366", color: "#fff", border: "none", borderRadius: 4, fontWeight: 700, fontSize: 14, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", cursor: "pointer", marginTop: 8 },
  note: { fontSize: 11, color: "#555", textAlign: "center", margin: 0, fontFamily: "'Courier New', monospace", lineHeight: 1.6 },
};

export default Custom;