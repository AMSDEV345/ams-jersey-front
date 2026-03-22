import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState("M");

  const product = products.find((p) => p._id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container">

      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>
      <p>₦{product.price}</p>

      <select onChange={(e) => setSize(e.target.value)}>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>

      <button onClick={() => addToCart(product, size)}>
        Add to Cart
      </button>

    </div>
  );
}

export default Product;