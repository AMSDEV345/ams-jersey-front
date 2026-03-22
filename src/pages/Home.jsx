import "../styles/home.css";
import { useState } from "react";
import { leagues } from "../data/leagues";
import products from "../data/products";
import LeagueCard from "../components/LeagueCard";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || p.type === filter)
  );

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <h1>AMS Jersey City</h1>
        <p>Your No.1 Jersey Store 🔥</p>
      </div>

      {/* LEAGUES */}
      <h2 className="section">Leagues</h2>
      <div className="leagues">
        {leagues.map((league, i) => (
          <LeagueCard key={i} league={league} />
        ))}
      </div>

      {/* JERSEYS */}
      <h2 className="section">Jerseys</h2>

      {/* FILTER */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="home">Home</option>
        <option value="away">Away</option>
      </select>

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </>
  );
}

export default Home;