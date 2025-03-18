import { useState } from "react";

function SalesForm({ onSaleAdded }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const saleData = { item, quantity: parseInt(quantity), price: parseFloat(price) };

    fetch("http://127.0.0.1:5000/api/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(saleData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sale added:", data);
        onSaleAdded(); // Refresh sales list
        setItem("");
        setQuantity(1);
        setPrice("");
      })
      .catch((error) => console.error("Error submitting sale:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Sale</h2>
      <label>Item:</label>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} required />

      <label>Quantity:</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />

      <label>Price (£):</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} step="0.01" required />

      <button type="submit">Submit Sale</button>
    </form>
  );
}

export default SalesForm;
