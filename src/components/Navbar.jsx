import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import logo from "../assets/logos/logo.png";
import "./Navbar.css";

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
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <div>
            AMS Jersey City
            <small>Premium Jerseys</small>
          </div>
        </Link>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search jerseys..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        className="search"
      />

      {/* LINKS */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/custom" onClick={() => setMenuOpen(false)}>Custom</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        <Link to="/wishlist" className="icon-btn" onClick={() => setMenuOpen(false)}>
          ❤️
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </Link>

        <Link to="/cart" className="icon-btn" onClick={() => setMenuOpen(false)}>
          🛒
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>
      </div>

    </nav>
  );
}

export default Navbar; 