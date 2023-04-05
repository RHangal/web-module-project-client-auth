import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:9000/api/login";
const Login = () => {
  const push = useNavigate();

  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL, cred)
      .then(
        (res) => localStorage.setItem("token", res.data.token),
        push("/friends")
      )
      .catch((err) => console.error(err));
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input onChange={handleChange} name="username" id="username" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} name="password" id="password" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
