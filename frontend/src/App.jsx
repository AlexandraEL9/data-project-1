import { useState } from "react";
import SalesForm from "./components/SalesForm";
import SalesTable from "./components/SalesTable";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>Sandwich Sales Tracker</h1>
      <SalesForm onSaleAdded={() => setRefresh(!refresh)} />
      <SalesTable refresh={refresh} />
    </div>
  );
}

export default App;
