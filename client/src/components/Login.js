import React, { useState } from "react";
import Axios from "axios";
//import { toast } from "react-toastify";

function Login() {
  const [loginStatus, setLoginStatus] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:6001/login", {
      username: loginData.username,
      password: loginData.password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        //toast.error("user name and password mismatch");
      } else {
        setLoginStatus(response.data[0].username);
        setLoginStatus(
          "Hi " +
            response.data[0].username +
            " you have logged in successfully!"
        );
        //toast.success("You have logged in successfully! ");
      }
    });
  };

  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>User ID</label>
        <input
          type="text"
          className="form-control"
          placeholder="User ID"
          name="username"
          value={loginData.username}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="password"
          name="password"
          value={loginData.password}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={loginHandler}
        >
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
      <div style={{ marginTop: "8%", color: "blue" }}>
        <h6>{loginStatus}</h6>
      </div>
    </form>
  );
}

export default Login;
