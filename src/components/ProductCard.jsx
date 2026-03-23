import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlist } = useContext(WishlistContext);
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const images = Array.isArray(product.images) ? product.images : [product.image];
  const [index, setIndex] = useState(0);

  const isWishlisted = wishlist?.some((p) => p._id === product._id);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);

  const order = () => {
    const msg = `Hello, I want ${product.name} - ₦${product.price}`;
    window.open(`https://wa.me/2349160313567?text=${encodeURIComponent(msg)}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const handleWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div
      style={{
        ...S.card,
        borderColor: hovered ? "#c8a96e44" : "#1a1a1a",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 12px 40px #00000066" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {product.badge && <span style={S.badge}>{product.badge}</span>}
      <span style={{
        ...S.typeBadge,
        background: product.type === "home" ? "#1a2a1a" : "#1a1a2a",
        color: product.type === "home" ? "#4caf50" : "#7b8cde"
      }}>
        {product.type?.toUpperCase()}
      </span>

      <div style={S.imgWrap} onClick={nextImage}>
        <img
          src={images[index]}
          alt={product.name}
          style={S.img}
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      <div style={S.body}>
        <p style={S.name}>{product.name}</p>
        <p style={S.price}>₦{product.price?.toLocaleString()}</p>

        <div style={S.actions}>
          <button
            onClick={handleAddToCart}
            style={{
              ...S.btn,
              background: added ? "#2d6a2d" : "#c8a96e",
              color: added ? "#fff" : "#000"
            }}
          >
            {added ? "Added!" : "Add to Cart"}
          </button>
          <button onClick={order} style={S.buyBtn}>Buy Now</button>
          <button
            onClick={handleWishlist}
            style={{
              ...S.wishBtn,
              background: isWishlisted ? "#c8a96e" : "transparent",
              color: isWishlisted ? "#000" : "#c8a96e",
              borderColor: "#c8a96e",
            }}
            title={isWishlisted ? "In Wishlist" : "Add to Wishlist"}
          >
            {isWishlisted ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}

const S = {
  card: { background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 8, overflow: "hidden", position: "relative", transition: "all 0.2s ease", fontFamily: "'Georgia', serif" },
  badge: { position: "absolute", top: 10, left: 10, background: "#c8a96e", color: "#000", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 2, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", zIndex: 2 },
  typeBadge: { position: "absolute", top: 10, right: 10, fontSize: 8, fontFamily: "'Courier New', monospace", letterSpacing: "0.12em", padding: "3px 8px", borderRadius: 2, zIndex: 2 },
  imgWrap: { background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", height: 200, cursor: "pointer", overflow: "hidden" },
  img: { width: "85%", height: "85%", objectFit: "contain", transition: "transform 0.3s ease" },
  body: { padding: "12px 14px 14px" },
  name: { fontSize: 12, color: "#d4c4a8", margin: "0 0 4px", fontFamily: "'Courier New', monospace", letterSpacing: "0.04em", lineHeight: 1.4 },
  price: { fontSize: 16, fontWeight: 700, color: "#c8a96e", margin: "0 0 12px" },
  actions: { display: "flex", gap: 6, alignItems: "center" },
  btn: { flex: 1, padding: "9px 0", border: "none", borderRadius: 3, fontWeight: 700, fontSize: 11, fontFamily: "'Courier New', monospace", letterSpacing: "0.08em", cursor: "pointer", transition: "all 0.2s" },
  buyBtn: { flex: 1, padding: "9px 0", background: "#25D366", color: "#fff", border: "none", borderRadius: 3, fontWeight: 700, fontSize: 11, fontFamily: "'Courier New', monospace", letterSpacing: "0.08em", cursor: "pointer" },
  wishBtn: { width: 36, height: 36, border: "1px solid", borderRadius: 3, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", flexShrink: 0 },
};

export default ProductCard;