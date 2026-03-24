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
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav style={S.nav}>

        {/* Left — hamburger + logo */}
        <div style={S.left}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={S.hamburger}
            aria-label="Menu"
          >
            <span style={{ ...S.bar, transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ ...S.bar, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ ...S.bar, transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>

          <Link to="/" style={S.logo} onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="AMS" style={S.logoImg} />
            <div style={S.logoText}>
              <span style={S.logoName}>AMS Jersey City</span>
              <span style={S.logoSub}>Premium Jerseys</span>
            </div>
          </Link>
        </div>

        {/* Search */}
        <div style={S.searchWrap}>
          <svg style={S.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search jerseys..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            style={S.search}
          />
        </div>

        {/* Right icons — always visible */}
        <div style={S.icons}>
          <Link to="/wishlist" style={S.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlistCount > 0 ? "#c8a96e" : "none"} stroke="#c8a96e" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {wishlistCount > 0 && <span style={S.badge}>{wishlistCount}</span>}
          </Link>

          <Link to="/cart" style={S.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0e6d3" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span style={{ ...S.badge, background: "#e53935" }}>{cartCount}</span>}
          </Link>
        </div>

      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={S.overlay} onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile/desktop nav links drawer */}
      <div style={{
        ...S.drawer,
        transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
      }}>
        <div style={S.drawerHeader}>
          <span style={S.drawerTitle}>Menu</span>
          <button onClick={() => setMenuOpen(false)} style={S.closeBtn}>✕</button>
        </div>

        {[
          { to: "/", label: "Home" },
          { to: "/shop", label: "Shop" },
          { to: "/custom", label: "Custom Jersey" },
          { to: "/about", label: "About Us" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={S.drawerLink}
            onClick={() => setMenuOpen(false)}
          >
            {label}
            <span style={S.drawerArrow}>→</span>
          </Link>
        ))}

        <div style={S.drawerDivider} />

        <Link to="/wishlist" style={S.drawerLink} onClick={() => setMenuOpen(false)}>
          Wishlist {wishlistCount > 0 && <span style={S.drawerBadge}>{wishlistCount}</span>}
          <span style={S.drawerArrow}>→</span>
        </Link>

        <Link to="/cart" style={S.drawerLink} onClick={() => setMenuOpen(false)}>
          Cart {cartCount > 0 && <span style={S.drawerBadge}>{cartCount}</span>}
          <span style={S.drawerArrow}>→</span>
        </Link>

        <div style={S.drawerDivider} />

        <div style={S.drawerSearch}>
          <input
            type="text"
            placeholder="Search jerseys..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            style={S.drawerSearchInput}
          />
        </div>
      </div>
    </>
  );
}

const S = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px",
    background: "#080808",
    borderBottom: "1px solid #1a1a1a",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    gap: 12,
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexShrink: 0,
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 4,
    flexShrink: 0,
  },
  bar: {
    display: "block",
    width: 22,
    height: 2,
    background: "#f0e6d3",
    borderRadius: 2,
    transition: "all 0.3s ease",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
  },
  logoImg: {
    width: 36,
    height: 36,
    objectFit: "contain",
    borderRadius: 4,
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
  },
  logoName: {
    fontSize: 14,
    fontWeight: 900,
    color: "#f0e6d3",
    letterSpacing: "0.02em",
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  },
  logoSub: {
    fontSize: 9,
    color: "#c8a96e",
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  },
  searchWrap: {
    flex: 1,
    maxWidth: 320,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    width: 14,
    height: 14,
    color: "#555",
    pointerEvents: "none",
  },
  search: {
    width: "100%",
    padding: "9px 12px 9px 32px",
    background: "#111",
    border: "1px solid #2a2a2a",
    borderRadius: 20,
    color: "#f0e6d3",
    fontSize: 13,
    outline: "none",
    fontFamily: "'Courier New', monospace",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    flexShrink: 0,
  },
  iconBtn: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    textDecoration: "none",
    borderRadius: 4,
  },
  badge: {
    position: "absolute",
    top: 2,
    right: 2,
    background: "#c8a96e",
    color: "#000",
    fontSize: 8,
    fontWeight: 700,
    borderRadius: "50%",
    width: 14,
    height: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 998,
    backdropFilter: "blur(2px)",
  },
  drawer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: 280,
    height: "100vh",
    background: "#0a0a0a",
    borderRight: "1px solid #1a1a1a",
    zIndex: 999,
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 20px 16px",
    borderBottom: "1px solid #1a1a1a",
  },
  drawerTitle: {
    fontSize: 11,
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.3em",
    color: "#c8a96e",
    textTransform: "uppercase",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#888",
    fontSize: 16,
    cursor: "pointer",
  },
  drawerLink: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 20px",
    color: "#d4c4a8",
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 600,
    borderBottom: "1px solid #111",
    fontFamily: "'Georgia', serif",
  },
  drawerArrow: {
    color: "#c8a96e",
    fontSize: 14,
  },
  drawerBadge: {
    background: "#c8a96e",
    color: "#000",
    fontSize: 10,
    fontWeight: 700,
    borderRadius: 10,
    padding: "1px 6px",
    marginLeft: 6,
  },
  drawerDivider: {
    height: 1,
    background: "#1a1a1a",
    margin: "8px 0",
  },
  drawerSearch: {
    padding: "16px 20px",
  },
  drawerSearchInput: {
    width: "100%",
    padding: "10px 14px",
    background: "#111",
    border: "1px solid #2a2a2a",
    borderRadius: 20,
    color: "#f0e6d3",
    fontSize: 13,
    outline: "none",
    fontFamily: "'Courier New', monospace",
    boxSizing: "border-box",
  },
};

export default Navbar;