import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/auth/register", data);
    alert("Registered Successfully");
    navigate("/login"); // 🔥 redirect
  };

  return (
    <div className="container mt-5">
        <div className="card">
      <h2>Register</h2>

      <input className="form-control my-2" placeholder="Name"
        onChange={e => setData({...data, name: e.target.value})} />

      <input className="form-control my-2" placeholder="Email"
        onChange={e => setData({...data, email: e.target.value})} />

      <input type="password" className="form-control my-2" placeholder="Password"
        onChange={e => setData({...data, password: e.target.value})} />

      <button className="btn btn-primary" onClick={handleSubmit}>
        Register
      </button></div>
    </div>
  );
}

export default Register;