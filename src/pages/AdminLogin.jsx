import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://ams-jersey-city-production.up.railway.app";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUsername", data.username);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={S.page}>
      <div style={S.box}>
        <h1 style={S.title}>Admin Login</h1>
        <p style={S.sub}>AMS Jersey City — Staff Only</p>

        {error && <p style={S.error}>{error}</p>}

        <div style={S.field}>
          <label style={S.label}>Username</label>
          <input
            style={S.input}
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={S.field}>
          <label style={S.label}>Password</label>
          <input
            style={S.input}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
        </div>

        <button onClick={handleLogin} style={S.btn} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}

const S = {
  page: { background: "#080808", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif", padding: 16 },
  box: { background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 8, padding: "40px 32px", width: "100%", maxWidth: 400 },
  title: { fontSize: 28, fontWeight: 900, color: "#f0e6d3", margin: "0 0 6px", letterSpacing: "-1px" },
  sub: { fontSize: 12, color: "#555", margin: "0 0 28px", fontFamily: "'Courier New', monospace", letterSpacing: "0.15em" },
  error: { background: "#2a1010", border: "1px solid #e53935", color: "#e53935", padding: "10px 14px", borderRadius: 4, fontSize: 13, margin: "0 0 20px" },
  field: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 },
  label: { fontSize: 10, fontFamily: "'Courier New', monospace", letterSpacing: "0.2em", color: "#888", textTransform: "uppercase" },
  input: { padding: "12px 14px", background: "#111", border: "1px solid #2a2a2a", borderRadius: 4, color: "#f0e6d3", fontSize: 14, outline: "none" },
  btn: { width: "100%", padding: "13px", background: "#c8a96e", color: "#000", border: "none", borderRadius: 4, fontWeight: 700, fontSize: 14, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", cursor: "pointer", marginTop: 8 },
};

export default AdminLogin;