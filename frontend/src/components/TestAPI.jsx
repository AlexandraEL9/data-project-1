import { useEffect, useState } from "react";

function TestAPI() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/test")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error("Fetch error:", error);
        setMessage("Error fetching data");
      });
  }, []);

  return (
    <div>
      <h2>Flask API Response:</h2>
      <p>{message}</p>
    </div>
  );
}

export default TestAPI;
