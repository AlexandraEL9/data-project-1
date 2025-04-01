import { useEffect, useState } from "react";

function ProductsList({ category, refresh }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(data.filter((product) => product.category === category))
      );
  }, [category, refresh]);

  return (
    <div>
      <h3>{category}</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>£{p.price.toFixed(2)}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsList;
