import { useEffect, useState } from "react";

function SalesTable({ refresh }) {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/sales")
      .then((response) => response.json())
      .then((data) => setSales(data))
      .catch((error) => console.error("Error fetching sales:", error));
  }, [refresh]); // Refresh table when a new sale is added

  return (
    <div>
      <h2>Sales Records</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price (£)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.item}</td>
              <td>{sale.quantity}</td>
              <td>£{sale.price.toFixed(2)}</td>
              <td>{sale.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
