import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import { leagues } from "../data/leagues";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [filter, setFilter] = useState("all");
  const [leagueFilter, setLeagueFilter] = useState("all");

  const filtered = products.filter((p) =>
    (filter === "all" || p.type === filter) &&
    (leagueFilter === "all" || p.category === leagueFilter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={S.page}>

      <div style={S.header}>
        <p style={S.eyebrow}>Our Collection</p>
        <h1 style={S.title}>All Jerseys</h1>
      </div>

      <div style={S.controls}>
        <input
          placeholder="Search jerseys..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={S.search}
        />
        <select value={leagueFilter} onChange={(e) => setLeagueFilter(e.target.value)} style={S.select}>
          <option value="all">All Leagues</option>
          {leagues.map((l, i) => (
            <option key={i} value={l.name}>{l.name}</option>
          ))}
        </select>
        <div style={S.filterBtns}>
          {["all", "home", "away"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                ...S.filterBtn,
                background: filter === type ? "#c8a96e" : "transparent",
                color: filter === type ? "#000" : "#888",
                borderColor: filter === type ? "#c8a96e" : "#2a2a2a",
              }}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <p style={S.count}>{filtered.length} jerseys found</p>

      {filtered.length === 0 && (
        <p style={S.empty}>No jerseys found. Try a different search or filter.</p>
      )}

      <div style={S.grid}>
        {filtered.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

    </div>
  );
}

const S = {
  page: { background: "#080808", minHeight: "100vh", padding: "0 0 80px", fontFamily: "'Georgia', serif", color: "#f0e6d3" },
  header: { padding: "60px 40px 32px", borderBottom: "1px solid #141414" },
  eyebrow: { fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.3em", color: "#c8a96e", margin: "0 0 8px" },
  title: { fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, margin: 0, letterSpacing: "-2px" },
  controls: { display: "flex", flexWrap: "wrap", gap: 12, padding: "24px 40px", borderBottom: "1px solid #141414", alignItems: "center" },
  search: { padding: "10px 16px", background: "#111", border: "1px solid #2a2a2a", borderRadius: 3, color: "#f0e6d3", fontSize: 13, outline: "none", fontFamily: "'Courier New', monospace", width: 220 },
  select: { padding: "10px 16px", background: "#111", border: "1px solid #2a2a2a", borderRadius: 3, color: "#d4c4a8", fontSize: 12, fontFamily: "'Courier New', monospace", cursor: "pointer", outline: "none" },
  filterBtns: { display: "flex", gap: 6 },
  filterBtn: { padding: "9px 16px", border: "1px solid", borderRadius: 3, fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.15em", cursor: "pointer", transition: "all 0.18s" },
  count: { padding: "16px 40px 0", fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.2em", color: "#444" },
  empty: { textAlign: "center", color: "#555", padding: "80px 40px", fontSize: 14 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14, padding: "24px 40px 0" },
};

export default Shop;