import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const checkout = () => {
    let message = "Hello, I want to order:%0A";

    cart.forEach((item) => {
      message += `${item.name} x${item.quantity} - ₦${item.price}%0A`;
    });

    message += "%0A💳 Payment Details:%0A";
    message += "Bank: GTBank%0A";
    message += "Account Number: 0627348988%0A";
    message += "Name: Lawal Mubarak Adekunle";

    window.open(`https://wa.me/2349160313567?text=${message}`);
  };

  return (
    <div className="container">

      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item._id} className="card">
          <h4>{item.name}</h4>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <button onClick={checkout}>Checkout</button>
      )}

    </div>
  );
}

export default Cart; 