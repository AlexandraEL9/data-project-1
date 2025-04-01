# data-project-1

# 📌 Web-Based POS System - Sandwich Sales Tracker

## 📝 Project Overview
This is a **web-based point-of-sale (POS) system** designed for a sandwich seller. The system allows:
- **Adding, removing, and updating products** (sandwiches, drinks, snacks) in a database.
- **Tracking stock levels** for each product.
- **Recording sales** in a database.
- **Displaying products and their details** in the interface.
- **Providing sales data** for staff to analyze.

The backend is built with **Flask + SQLite/PostgreSQL**, while the frontend is powered by **React (Vite).**

---

## 🚀 Setup Instructions
### **1️⃣ Clone the Repository**
```bash
 git clone https://github.com/YourGitHubUsername/sandwich-sales-tracker.git
 cd sandwich-sales-tracker
```

### **2️⃣ Backend Setup (Flask API)**
```bash
cd backend
python -m venv venv  # Create virtual environment
source venv/bin/activate  # Activate venv (Mac/Linux)
# On Windows, use: venv\Scripts\activate

pip install -r requirements.txt  # Install dependencies
python app.py  # Start Flask server
```
Flask should now run on: **http://127.0.0.1:5000/**

---

### **3️⃣ Frontend Setup (React + Vite)**
```bash
cd frontend
npm install  # Install dependencies
npm run dev  # Start development server
```
React should now run on: **http://localhost:5173/**

---

## 🛠️ API Testing & Validation
This section explains how to **test the Flask API** endpoints using `curl` commands or Postman.

### **✅ API Test Summary**
| Test | Command | Expected Result | Why It’s Important | Screenshot |
|------|---------|----------------|--------------------|------------|
| **Start Flask** | ```python -m flask run``` | Server runs on `127.0.0.1:5000` | Ensures Flask is running | ![Flask Running](/docs/testing/api-testing/api-test-1.png) |
| **Get all products** | ```curl http://127.0.0.1:5000/api/products``` | `[]` if no products exist | Ensures API responds correctly | ![Get Products](/docs/testing/api-testing/api-test-2.png) |
| **Add a product** | ```curl -X POST ...``` | Returns product details | Tests adding to the database | ![Add Product](/docs/testing/api-testing/api-test-3.png) |
| **Get products again** | ```curl http://127.0.0.1:5000/api/products``` | Product list updates | Confirms data persistence | ![Product List](/docs/testing/api-testing/api-test-4.png) |
| **Update stock** | ```curl -X PATCH ...``` | Updates stock count | Ensures updates work correctly | ![Stock Update](/docs/testing/api-testing/api-test-6.png) |
| **Delete a product** | ```curl -X DELETE ...``` | Returns `Product deleted!` | Confirms deletion works | ![Delete Product](/docs/testing/api-testing/api-test-7.png) |

---

## 🔹 Product Management Interface

I implemented a React-based admin interface for adding products directly into the database. This is a crucial step before implementing cart and sales features.

### 🔖 What it does:

- **Provides a form to add new products with:**

- - Name, Category, Price, Stock

- - Sends data to the Flask API using a POST request

- - Triggers an automatic refresh to display the new product in the product list

- - Reuses the existing ProductsList.jsx component to display up-to-date stock

### ⚖️ Key Concepts Used:

| Concept | Description & Use | Official Source |
|--------|-------------------|------------------|
| **React Hooks: `useState`** | Manages the local state of the form (e.g., input values, messages). | [React Docs – useState](https://react.dev/reference/react/useState) |
| **React Hooks: `useEffect`** | Triggers product re-fetching after new additions or updates. | [React Docs – useEffect](https://react.dev/reference/react/useEffect) |
| **Props & Callbacks** | Enables child components (e.g. `AddProductForm`) to notify parents to refresh the product list. | [React Docs – Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component) |
| **Controlled Components** | Form inputs are tied to React state for real-time validation and user input control. | [React Docs – Controlled vs Uncontrolled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) |
| **Fetch API** | Used to send POST requests from the frontend to the Flask backend to add products. | [MDN Web Docs – Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) |
| **Component Reuse** | `ProductsList` is reused for Sandwiches, Drinks, Snacks, and the Admin view. | [React Docs – Composing Components](https://react.dev/learn/your-first-component#composing-components) |


### 📄 Code Sample: AddProductForm.jsx
``` jsx
function AddProductForm({ onProductAdded }) {
  const [formData, setFormData] = useState({ name: "", category: "Sandwiches", price: "", stock: "" });
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
      .then((res) => res.json())
      .then(() => {
        setMessage("✅ Product added!");
        setFormData({ name: "", category: "Sandwiches", price: "", stock: "" });
        onProductAdded();
      })
      .catch(() => setMessage("❌ Error adding product"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Sandwiches">Sandwiches</option>
        <option value="Drinks">Drinks</option>
        <option value="Snacks">Snacks</option>
      </select>
      <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
      <button type="submit">Add Product</button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

### 📝 How to Access It:

- Visit http://localhost:5173/admin in your browser after starting the frontend server. You’ll see:

- A form to add new products

- A list of all existing products grouped by category

---

## 🎯 Features Implemented
- ✅ **Multi-tab interface** (Sandwiches, Drinks, Snacks) in React.
- ✅ **Product database** with stock tracking.
- ✅ **Add, remove, update products & stock levels.**
- ✅ **Fetch product data from Flask API into React UI.**
- ✅ **Frontend product creation form to populate the database.**

---

## 🏗️ Next Steps / Future Enhancements
- [ ] **Implement a cart system for sales tracking.**
- [ ] **Improve UI styling for better user experience.**
- [ ] **Generate sales reports & analytics.**
- [ ] **Migrate database from SQLite to PostgreSQL.**

---

## 🤝 Contributing
Feel free to fork this repository and submit a pull request with any improvements!

---

## 📜 License
This project is licensed under the MIT License.

---

### **📧 Contact & Support**
For any issues, contact: [your-email@example.com](mailto:your-email@example.com)

Happy coding! 🚀

