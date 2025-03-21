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

## 🎯 Features Implemented
- ✅ **Multi-tab interface** (Sandwiches, Drinks, Snacks) in React.
- ✅ **Product database** with stock tracking.
- ✅ **Add, remove, update products & stock levels.**
- ✅ **Fetch product data from Flask API into React UI.**

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

