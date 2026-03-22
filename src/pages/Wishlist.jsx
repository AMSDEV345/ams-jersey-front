import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="page">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 && <p>Your wishlist is empty.</p>}

      <div className="shop">
        {wishlist.map((p) => (
          <div key={p._id}>
            <ProductCard product={p} />
            <button
              onClick={() => removeFromWishlist(p._id)}
              style={{ marginTop: 8, background: "#e53935", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 4, cursor: "pointer" }}
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;