import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://ams-jersey-city-production.up.railway.app";

function AdminDashboard() {
  const [tab, setTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [form, setForm] = useState({
    name: "", price: "", category: "", type: "home",
    image: "", badge: "", stock: 10, description: ""
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const username = localStorage.getItem("adminUsername");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    if (!token) { navigate("/admin"); return; }
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API}/api/admin/products`, { headers });
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API}/api/admin/orders`, { headers });
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    const url = editProduct
      ? `${API}/api/admin/products/${editProduct._id}`
      : `${API}/api/admin/products`;
    const method = editProduct ? "PUT" : "POST";
    try {
      const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify({ ...form, price: Number(form.price), stock: Number(form.stock) }),
      });
      const data = await res.json();
      if (editProduct) {
        setProducts(products.map((p) => p._id === data._id ? data : p));
      } else {
        setProducts([data, ...products]);
      }
      setShowAddForm(false);
      setEditProduct(null);
      setForm({ name: "", price: "", category: "", type: "home", image: "", badge: "", stock: 10, description: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      type: product.type,
      image: product.image,
      badge: product.badge || "",
      stock: product.stock || 10,
      description: product.description || "",
    });
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await fetch(`${API}/api/admin/products/${id}`, { method: "DELETE", headers });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleOrderStatus = async (id, status) => {
    try {
      const res = await fetch(`${API}/api/admin/orders/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      setOrders(orders.map((o) => o._id === data._id ? data : o));
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
    navigate("/admin");
  };

  const statusColors = {
    pending: "#c8a96e",
    confirmed: "#2196f3",
    shipped: "#9c27b0",
    delivered: "#4caf50",
    cancelled: "#e53935",
  };

  return (
    <div style={S.page}>

      {/* Header */}
      <div style={S.header}>
        <div>
          <h1 style={S.title}>Admin Dashboard</h1>
          <p style={S.welcome}>Welcome, {username}</p>
        </div>
        <button onClick={logout} style={S.logoutBtn}>Logout</button>
      </div>

      {/* Tabs */}
      <div style={S.tabs}>
        {["products", "orders"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              ...S.tab,
              background: tab === t ? "#c8a96e" : "transparent",
              color: tab === t ? "#000" : "#888",
              borderColor: tab === t ? "#c8a96e" : "#2a2a2a",
            }}
          >
            {t === "products" ? `Products (${products.length})` : `Orders (${orders.length})`}
          </button>
        ))}
      </div>

      {/* Products Tab */}
      {tab === "products" && (
        <div style={S.content}>
          <div style={S.contentHeader}>
            <h2 style={S.sectionTitle}>All Products</h2>
            <button
              onClick={() => { setShowAddForm(!showAddForm); setEditProduct(null); setForm({ name: "", price: "", category: "", type: "home", image: "", badge: "", stock: 10, description: "" }); }}
              style={S.addBtn}
            >
              {showAddForm ? "Cancel" : "+ Add Product"}
            </button>
          </div>

          {/* Add/Edit Form */}
          {showAddForm && (
            <div style={S.form}>
              <h3 style={S.formTitle}>{editProduct ? "Edit Product" : "Add New Product"}</h3>
              <div style={S.formGrid}>
                {[
                  { label: "Product Name", key: "name", placeholder: "e.g. Arsenal Home Jersey" },
                  { label: "Price (₦)", key: "price", placeholder: "e.g. 20000" },
                  { label: "Category", key: "category", placeholder: "e.g. Premier League (England)" },
                  { label: "Image URL", key: "image", placeholder: "https://ams-jersey-front.vercel.app/jerseys/arsenal-home.png" },
                  { label: "Badge", key: "badge", placeholder: "e.g. NEW, HOT, RETRO" },
                  { label: "Stock", key: "stock", placeholder: "e.g. 10" },
                ].map(({ label, key, placeholder }) => (
                  <div key={key} style={S.formField}>
                    <label style={S.formLabel}>{label}</label>
                    <input
                      style={S.formInput}
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    />
                  </div>
                ))}
                <div style={S.formField}>
                  <label style={S.formLabel}>Kit Type</label>
                  <select
                    style={S.formInput}
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="home">Home</option>
                    <option value="away">Away</option>
                  </select>
                </div>
              </div>
              <button onClick={handleSave} style={S.saveBtn}>
                {editProduct ? "Update Product" : "Save Product"}
              </button>
            </div>
          )}

          {/* Products List */}
          {loading ? (
            <p style={S.loading}>Loading products...</p>
          ) : (
            <div style={S.productGrid}>
              {products.map((p) => (
                <div key={p._id} style={S.productCard}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={S.productImg}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div style={S.productInfo}>
                    <p style={S.productName}>{p.name}</p>
                    <p style={S.productPrice}>₦{p.price?.toLocaleString()}</p>
                    <p style={S.productMeta}>{p.category} · {p.type}</p>
                    <p style={S.productStock}>Stock: {p.stock ?? "N/A"}</p>
                  </div>
                  <div style={S.productActions}>
                    <button onClick={() => handleEdit(p)} style={S.editBtn}>Edit</button>
                    <button onClick={() => handleDelete(p._id)} style={S.deleteBtn}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Orders Tab */}
      {tab === "orders" && (
        <div style={S.content}>
          <h2 style={S.sectionTitle}>All Orders</h2>
          {orders.length === 0 ? (
            <p style={S.loading}>No orders yet.</p>
          ) : (
            <div style={S.orderList}>
              {orders.map((order) => (
                <div key={order._id} style={S.orderCard}>
                  <div style={S.orderHeader}>
                    <div>
                      <p style={S.orderName}>{order.customerName}</p>
                      <p style={S.orderPhone}>{order.customerPhone}</p>
                      <p style={S.orderDate}>{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div style={S.orderRight}>
                      <p style={S.orderTotal}>₦{order.total?.toLocaleString()}</p>
                      <span style={{ ...S.statusBadge, background: statusColors[order.status] + "22", color: statusColors[order.status], borderColor: statusColors[order.status] + "55" }}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div style={S.orderItems}>
                    {order.items?.map((item, i) => (
                      <p key={i} style={S.orderItem}>
                        {item.name} — Size: {item.size} × {item.quantity}
                      </p>
                    ))}
                  </div>
                  <div style={S.orderStatusRow}>
                    <label style={S.formLabel}>Update Status</label>
                    <select
                      style={S.statusSelect}
                      value={order.status}
                      onChange={(e) => handleOrderStatus(order._id, e.target.value)}
                    >
                      {["pending", "confirmed", "shipped", "delivered", "cancelled"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}

const S = {
  page: { background: "#080808", minHeight: "100vh", fontFamily: "'Georgia', serif", color: "#f0e6d3", padding: "0 0 80px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 24px 20px", borderBottom: "1px solid #1a1a1a", flexWrap: "wrap", gap: 12 },
  title: { fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, margin: "0 0 4px", letterSpacing: "-1px" },
  welcome: { fontSize: 12, color: "#555", margin: 0, fontFamily: "'Courier New', monospace", letterSpacing: "0.15em" },
  logoutBtn: { padding: "8px 18px", background: "transparent", border: "1px solid #e53935", color: "#e53935", borderRadius: 3, fontFamily: "'Courier New', monospace", fontSize: 11, cursor: "pointer", letterSpacing: "0.1em" },
  tabs: { display: "flex", gap: 8, padding: "16px 24px", borderBottom: "1px solid #1a1a1a" },
  tab: { padding: "8px 20px", border: "1px solid", borderRadius: 3, fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.12em", cursor: "pointer", transition: "all 0.2s", textTransform: "uppercase" },
  content: { padding: "24px" },
  contentHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 },
  sectionTitle: { fontSize: 20, fontWeight: 700, margin: 0, color: "#f0e6d3" },
  addBtn: { padding: "9px 18px", background: "#c8a96e", color: "#000", border: "none", borderRadius: 3, fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.1em", cursor: "pointer", fontWeight: 700 },
  form: { background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 6, padding: 20, marginBottom: 24 },
  formTitle: { fontSize: 16, fontWeight: 700, margin: "0 0 16px", color: "#c8a96e" },
  formGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14, marginBottom: 16 },
  formField: { display: "flex", flexDirection: "column", gap: 6 },
  formLabel: { fontSize: 9, fontFamily: "'Courier New', monospace", letterSpacing: "0.2em", color: "#666", textTransform: "uppercase" },
  formInput: { padding: "10px 12px", background: "#111", border: "1px solid #2a2a2a", borderRadius: 3, color: "#f0e6d3", fontSize: 13, outline: "none" },
  saveBtn: { padding: "11px 24px", background: "#c8a96e", color: "#000", border: "none", borderRadius: 3, fontFamily: "'Courier New', monospace", fontSize: 12, letterSpacing: "0.1em", cursor: "pointer", fontWeight: 700 },
  loading: { color: "#555", fontFamily: "'Courier New', monospace", fontSize: 13, textAlign: "center", padding: "40px 0" },
  productGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 },
  productCard: { background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 6, padding: 14, display: "flex", gap: 12, alignItems: "flex-start" },
  productImg: { width: 70, height: 70, objectFit: "contain", background: "#0a0a0a", borderRadius: 4, flexShrink: 0 },
  productInfo: { flex: 1, minWidth: 0 },
  productName: { fontSize: 12, color: "#d4c4a8", margin: "0 0 3px", fontFamily: "'Courier New', monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  productPrice: { fontSize: 15, fontWeight: 700, color: "#c8a96e", margin: "0 0 3px" },
  productMeta: { fontSize: 10, color: "#555", margin: "0 0 3px", fontFamily: "'Courier New', monospace" },
  productStock: { fontSize: 10, color: "#666", margin: 0, fontFamily: "'Courier New', monospace" },
  productActions: { display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 },
  editBtn: { padding: "6px 12px", background: "transparent", border: "1px solid #c8a96e", color: "#c8a96e", borderRadius: 3, fontSize: 10, fontFamily: "'Courier New', monospace", cursor: "pointer" },
  deleteBtn: { padding: "6px 12px", background: "transparent", border: "1px solid #e53935", color: "#e53935", borderRadius: 3, fontSize: 10, fontFamily: "'Courier New', monospace", cursor: "pointer" },
  orderList: { display: "flex", flexDirection: "column", gap: 12 },
  orderCard: { background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: 6, padding: 16 },
  orderHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 },
  orderName: { fontSize: 14, fontWeight: 700, color: "#f0e6d3", margin: "0 0 3px" },
  orderPhone: { fontSize: 12, color: "#888", margin: "0 0 3px", fontFamily: "'Courier New', monospace" },
  orderDate: { fontSize: 11, color: "#555", margin: 0, fontFamily: "'Courier New', monospace" },
  orderRight: { textAlign: "right" },
  orderTotal: { fontSize: 18, fontWeight: 700, color: "#c8a96e", margin: "0 0 6px" },
  statusBadge: { fontSize: 10, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", padding: "3px 8px", borderRadius: 2, border: "1px solid", textTransform: "uppercase" },
  orderItems: { borderTop: "1px solid #1a1a1a", paddingTop: 10, marginBottom: 12 },
  orderItem: { fontSize: 12, color: "#888", margin: "0 0 4px", fontFamily: "'Courier New', monospace" },
  orderStatusRow: { display: "flex", alignItems: "center", gap: 10 },
  statusSelect: { padding: "6px 10px", background: "#111", border: "1px solid #2a2a2a", borderRadius: 3, color: "#f0e6d3", fontSize: 12, fontFamily: "'Courier New', monospace", cursor: "pointer", outline: "none" },
};

export default AdminDashboard;