import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const checkout = () => {
    let message = "Hello, I want to order:\n";
    cart.forEach((item) => {
      message += `${item.name} x${item.quantity || 1} - ₦${item.price.toLocaleString()}\n`;
    });
    message += "\n💳 Payment Details:\n";
    message += "Bank: GTBank\n";
    message += "Account Number: 0627348988\n";
    message += "Name: Lawal Mubarak Adekunle";
    window.open(`https://wa.me/2349160313567?text=${encodeURIComponent(message)}`);
  };

  return (
    <div style={S.page}>
      <div style={S.container}>

        <div style={S.header}>
          <h1 style={S.title}>Your Cart</h1>
          <p style={S.subtitle}>{cart.length} {cart.length === 1 ? "item" : "items"}</p>
        </div>

        {cart.length === 0 ? (
          <div style={S.empty}>
            <p style={S.emptyIcon}>🛒</p>
            <p style={S.emptyText}>Your cart is empty</p>
            <a href="/shop" style={S.shopBtn}>Browse Jerseys</a>
          </div>
        ) : (
          <>
            <div style={S.items}>
              {cart.map((item) => (
                <div key={item._id} style={S.item}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={S.itemImg}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div style={S.itemInfo}>
                    <p style={S.itemName}>{item.name}</p>
                    <p style={S.itemPrice}>₦{item.price?.toLocaleString()}</p>
                    {item.size && <p style={S.itemSize}>Size: {item.size}</p>}
                  </div>
                  <button onClick={() => removeFromCart(item._id)} style={S.removeBtn}>✕</button>
                </div>
              ))}
            </div>

            <div style={S.summary}>
              <div style={S.summaryRow}>
                <span style={S.summaryLabel}>Total</span>
                <span style={S.summaryTotal}>₦{total.toLocaleString()}</span>
              </div>
              <button onClick={checkout} style={S.checkoutBtn}>
                Checkout via WhatsApp
              </button>
              <p style={S.checkoutNote}>You will be redirected to WhatsApp to complete your order</p>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

const S = {
  page: { background: "#080808", minHeight: "100vh", padding: "40px 16px 80px", fontFamily: "'Georgia', serif" },
  container: { maxWidth: 600, margin: "0 auto" },
  header: { marginBottom: 32, borderBottom: "1px solid #1a1a1a", paddingBottom: 20 },
  title: { fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, color: "#f0e6d3", margin: "0 0 6px", letterSpacing: "-1px" },
  subtitle: { fontSize: 12, color: "#555", margin: 0, fontFamily: "'Courier New', monospace", letterSpacing: "0.15em" },
  empty: { textAlign: "center", padding: "60px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 },
  emptyIcon: { fontSize: 48, margin: 0 },
  emptyText: { fontSize: 16, color: "#666", margin: 0 },
  shopBtn: { padding: "12px 28px", background: "#c8a96e", color: "#000", textDecoration: "none", fontWeight: 700, fontSize: 12, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", borderRadius: 3 },
  items: { display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 },
  item: { display: "flex", alignItems: "center", gap: 14, background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 6, padding: 14 },
  itemImg: { width: 70, height: 70, objectFit: "contain", background: "#0a0a0a", borderRadius: 4, flexShrink: 0 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 13, color: "#d4c4a8", margin: "0 0 4px", fontFamily: "'Courier New', monospace" },
  itemPrice: { fontSize: 16, fontWeight: 700, color: "#c8a96e", margin: "0 0 2px" },
  itemSize: { fontSize: 11, color: "#666", margin: 0, fontFamily: "'Courier New', monospace" },
  removeBtn: { background: "transparent", border: "1px solid #2a2a2a", color: "#888", width: 32, height: 32, borderRadius: 3, cursor: "pointer", fontSize: 12, flexShrink: 0 },
  summary: { background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 6, padding: 20 },
  summaryRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #1a1a1a" },
  summaryLabel: { fontSize: 12, color: "#888", fontFamily: "'Courier New', monospace", letterSpacing: "0.15em" },
  summaryTotal: { fontSize: 22, fontWeight: 900, color: "#c8a96e" },
  checkoutBtn: { width: "100%", padding: "14px", background: "#25D366", color: "#fff", border: "none", borderRadius: 4, fontWeight: 700, fontSize: 14, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", cursor: "pointer", marginBottom: 10 },
  checkoutNote: { fontSize: 11, color: "#555", textAlign: "center", margin: 0, fontFamily: "'Courier New', monospace" },
};

export default Cart;