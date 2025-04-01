import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Sandwiches from "./components/Sandwiches";
import Drinks from "./components/Drinks";
import Snacks from "./components/Snacks";
import ProductAdmin from "./pages/ProductAdmin";


function App() {
  return (
    <Router>
      <div>
        <h1>Sandwich Sales POS</h1>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Navigate to="/sandwiches" />} />
          <Route path="/sandwiches" element={<Sandwiches />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/admin" element={<ProductAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
