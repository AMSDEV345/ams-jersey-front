import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import products from "../data/products";

function Club() {
  const { name } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const filtered = products.filter((p) => {
    const productKey = p.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    return productKey.includes(name);
  });

  if (filtered.length === 0) {
    return (
      <div style={S.page}>
        <p style={S.empty}>No jerseys found for this team.</p>
      </div>
    );
  }

  return (
    <div style={S.page}>
      <h1 style={S.title}>{filtered[0]?.name.replace("Home Jersey", "").replace("Away Jersey", "").trim()}</h1>
      <div style={S.grid}>
        {filtered.map((p) => (
          <div key={p._id} style={S.card}>
            <img
              src={p.image}
              alt={p.name}
              style={S.image}
              onError={(e) => (e.target.style.display = "none")}
            />
            <p style={S.name}>{p.name}</p>
            <p style={S.price}>₦{p.price.toLocaleString()}</p>
            <div style={S.buttons}>
              <button onClick={() => addToCart(p)} style={S.cartBtn}>Add to Cart</button>
              <button onClick={() => addToWishlist(p)} style={S.wishBtn}>Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const S = {
  page:    { padding: "32px 24px", fontFamily: "'Georgia', serif" },
  title:   { fontSize: 28, fontWeight: 900, marginBottom: 24, color: "#111" },
  empty:   { textAlign: "center", color: "#888", marginTop: 60, fontSize: 16 },
  grid:    { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 },
  card:    { background: "#fff", border: "1px solid #eee", borderRadius: 8, padding: 16, textAlign: "center" },
  image:   { width: "100%", height: 240, objectFit: "contain", marginBottom: 12 },
  name:    { fontSize: 14, fontWeight: 600, color: "#222", margin: "0 0 4px" },
  price:   { fontSize: 16, fontWeight: 700, color: "#c8a96e", margin: "0 0 12px" },
  buttons: { display: "flex", gap: 8, justifyContent: "center" },
  cartBtn: { padding: "8px 14px", background: "#111", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 12 },
  wishBtn: { padding: "8px 14px", background: "transparent", color: "#111", border: "1px solid #111", borderRadius: 4, cursor: "pointer", fontSize: 12 },
};

export default Club;