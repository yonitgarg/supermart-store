import { useState } from "react";
import axios from "axios";

function Admin() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: ""
  });

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/products",
      product,
      {
        headers: { Authorization: token }
      }
    );

    alert("Product Added");
  };

  return (
    <div className="container mt-5">
          <div className="card">
      <h2>Admin Panel</h2>

      <input className="form-control my-2" placeholder="Name"
        onChange={e => setProduct({...product, name: e.target.value})} />

      <input className="form-control my-2" placeholder="Price"
        onChange={e => setProduct({...product, price: e.target.value})} />

      <input className="form-control my-2" placeholder="Category"
        onChange={e => setProduct({...product, category: e.target.value})} />

      <input className="form-control my-2" placeholder="Stock"
        onChange={e => setProduct({...product, stock: e.target.value})} />

      <button className="btn btn-danger" onClick={handleSubmit}>
        Add Product
      </button></div>
    </div>
  );
}

export default Admin;