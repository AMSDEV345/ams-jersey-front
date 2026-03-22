import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import { leagues } from "../data/leagues";
import ProductCard from "../components/ProductCard";
import "../styles/shop.css";

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
    <div>
      <div className="controls">

        <input
          placeholder="Search jersey..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={leagueFilter}
          onChange={(e) => setLeagueFilter(e.target.value)}
        >
          <option value="all">All Leagues</option>
          {leagues.map((l, i) => (
            <option key={i} value={l.name}>{l.name}</option>
          ))}
        </select>

        <button
          onClick={() => setFilter("all")}
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("home")}
          style={{ fontWeight: filter === "home" ? "bold" : "normal" }}
        >
          Home
        </button>
        <button
          onClick={() => setFilter("away")}
          style={{ fontWeight: filter === "away" ? "bold" : "normal" }}
        >
          Away
        </button>

      </div>

      {filtered.length === 0 && <p>No jerseys found</p>}

      <div className="shop">
        {filtered.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Shop;