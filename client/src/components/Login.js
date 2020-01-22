import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = props => {
  const body = document.querySelector("body");
  body.className = "hold-transition login-page";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("/auth/login", { username, password })
      .then(res => res.data)
      .then(data => {
        localStorage.setItem("token", data.token);
        props.history.push("/");
      })
      .catch(err => console.log(err));

    console.log(username, password);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/auth/cek-token", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.data)
      .then(data => {
        if (data === "Token Valid!") {
          console.log("token still valid");
          props.history.push("/");
        } else {
          localStorage.removeItem("token");
        }
      })
      .catch(err => console.log(err));
  });

  return (
    <>
      <div className="login-box">
        <div className="login-logo">
          <Link to="/">
            <b>Admin</b>LTE
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <p className="mb-1">
              <a href="/forgot-password">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="/register" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
