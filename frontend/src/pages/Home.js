import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="container mt-5">
  <h2 style={{ color: "white" }}>Products</h2>

  <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
    {products.map(p => (
      <div className="card" style={{ width: "200px" }}>
        <h4>{p.name}</h4>
        <p>₹{p.price}</p>
      </div>
    ))}
  </div>
</div>
  );
}

export default Home;