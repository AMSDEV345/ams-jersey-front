import { useState } from "react";

function Custom() {
  const [name, setName] = useState("");
  const [jerseyName, setJerseyName] = useState("");
  const [number, setNumber] = useState("");
  const [size, setSize] = useState("M");

  const handleSubmit = () => {
    if (!name || !jerseyName || !number) {
      alert("Please fill in all fields before submitting!");
      return;
    }

    const message = `Hello, I want to order a custom jersey!
Name: ${name}
Jersey Name: ${jerseyName}
Number: ${number}
Size: ${size}`;

    window.open("https://wa.me/2349160313567?text=" + encodeURIComponent(message));
  };

  return (
    <div className="page">
      <h1>Custom Jersey Order</h1>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Jersey Name (e.g Messi)"
        value={jerseyName}
        onChange={(e) => setJerseyName(e.target.value)}
      />
      <input
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>

      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
}

export default Custom;