import { useState } from "react";

{/* Add product form */}

function AddProductForm({ onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Sandwiches",
    price: "",
    stock: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => {
      if (!res.ok) throw new Error("Failed to add product");
      return res.json();
    })
    .then(() => {
        setMessage("✅ Product added!");
        setFormData({ name: "", category: "Sandwiches", price: "", stock: "" });
        onProductAdded(); // trigger refresh
      })
      
    .catch(() => setMessage("❌ Error adding product"));
  };

  return (
    <div>
      <h3>Add a New Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Sandwiches">Sandwiches</option>
          <option value="Drinks">Drinks</option>
          <option value="Snacks">Snacks</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddProductForm;
