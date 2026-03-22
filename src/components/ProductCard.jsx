import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const [index, setIndex] = useState(0);

  // ✅ normalize: support both single image and array of images
  const images = Array.isArray(product.images)
    ? product.images
    : [product.image];

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const order = () => {
    const msg = `Hello, I want ${product.name} - ₦${product.price}`;
    window.open(`https://wa.me/2349160313567?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="card">

      <img
  src={images[index]}
  alt={product.name}
  onClick={nextImage}
  onError={(e) => (e.target.src = "/images/hero.jpg")}
  style={{ width: "100%", height: "250px", objectFit: "contain" }}
/>

      <h4>{product.name}</h4>

      <p>{product.type === "home" ? "🏠 Home" : "✈️ Away"}</p>

      <p className="price">₦{product.price}</p>

      <div className="buttons">
        <button className="buy" onClick={order}>Buy</button>
        <button className="cart" onClick={() => addToCart(product)}>Cart</button>
      </div>

      <button onClick={() => addToWishlist(product)}>❤️ Wishlist</button>

    </div>
  );
}

export default ProductCard;