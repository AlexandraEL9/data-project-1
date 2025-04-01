import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import ProductsList from "../components/ProductsList";

function ProductAdmin() {
  const [refresh, setRefresh] = useState(false);

  const refreshProducts = () => {
    setRefresh(prev => !prev); // toggles refresh trigger
  };

  return (
    <div>
      <h2>Product Admin Panel</h2>
      <AddProductForm onProductAdded={refreshProducts} />
      <hr />
      <ProductsList category="Sandwiches" refresh={refresh} />
      <ProductsList category="Drinks" refresh={refresh} />
      <ProductsList category="Snacks" refresh={refresh} />
    </div>
  );
}

export default ProductAdmin;
