import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import logo from "../assets/logos/logo.png";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const cartCount = cart?.length ?? 0;
  const wishlistCount = wishlist?.length ?? 0;

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate("/shop?search=" + encodeURIComponent(search.trim()));
      setSearch("");
    }
  };

  return (
    <nav style={S.nav}>

      <div style={{display:"flex", alignItems:"center",gap:10}}>
      {/* Hamburger button */}
<button onClick={() => setMenuOpen(!menuOpen)} style={S.hamburger}>
  <span style={S.bar} />
  <span style={S.bar} />
  <span style={S.bar} />
</button>


<Link to="/" style={S.logo}>
  <img src={logo} alt="AMS Logo" style={{ width: 40, height: 40, objectFit: "contain", marginRight: 8 }} />
  AMS Jersey City
</Link>
</div>

<input
  type="text"
  placeholder="Search jerseys... press Enter"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={handleSearch}
  style={S.search}
/>

      {/* Nav links — hidden on mobile unless menuOpen */}
      <div style={{ ...S.links, ...(menuOpen ? S.linksOpen : {}) }}>

        <Link to="/" style={S.link} onClick={() => setMenuOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          Home
        </Link>

        <Link to="/shop" style={S.link} onClick={() => setMenuOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z"/></svg>
          Shop
        </Link>

        <Link to="/custom" style={S.link} onClick={() => setMenuOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          Custom
        </Link>

        <Link to="/about" style={S.link} onClick={() => setMenuOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          About
        </Link>

        <Link to="/contact" style={S.link} onClick={() => setMenuOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          Contact
        </Link>

        <Link to="/wishlist" style={S.iconBtn} onClick={() => setMenuOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          {wishlistCount > 0 && <span style={S.badge}>{wishlistCount}</span>}
        </Link>

        <Link to="/cart" style={S.iconBtn} onClick={() => setMenuOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.9 18 9 18h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.43 5H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2z"/></svg>
          {cartCount > 0 && <span style={S.badge}>{cartCount}</span>}
        </Link>

      </div>
    </nav>
  );
}

const S = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "12px 24px",
    backgroundColor: "rgba(0,0,0,0.88)",
    backdropFilter: "blur(8px)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    gap: 12,
  },
  logo: {
    color: "#fff",
    fontWeight: 900,
    fontSize: 20,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  search: {
    padding: "8px 14px",
    borderRadius: 20,
    border: "1px solid #555",
    backgroundColor: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: 13,
    outline: "none",
    width: 220,
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 6,
  },
  bar: {
    display: "block",
    width: 24,
    height: 2,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    flexWrap: "wrap",
  },
  linksOpen: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  link: {
    color: "#f0e6d3",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 600,
    padding: "6px 10px",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    gap: 5,
    whiteSpace: "nowrap",
  },
  iconBtn: {
    position: "relative",
    color: "#f0e6d3",
    textDecoration: "none",
    padding: "6px 10px",
    display: "flex",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "#e53935",
    color: "#fff",
    fontSize: 9,
    fontWeight: 700,
    borderRadius: "50%",
    width: 15,
    height: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Navbar;