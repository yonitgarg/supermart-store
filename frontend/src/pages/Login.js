import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      data
    );

    localStorage.setItem("token", res.data.token);
    alert("Login Success");

    navigate("/"); // 🔥 go to home
  };

  return (
    <div className="container mt-5">
        <div className="card">
      <h2>Login</h2>

      <input className="form-control my-2" placeholder="Email"
        onChange={e => setData({...data, email: e.target.value})} />

      <input type="password" className="form-control my-2" placeholder="Password"
        onChange={e => setData({...data, password: e.target.value})} />

      <button className="btn btn-success" onClick={handleSubmit}>
        Login
      </button></div>
    </div>
  );
}

export default Login;