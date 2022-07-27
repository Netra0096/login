import React, { useState } from "react";
import Axios from "axios";

function Signup() {
  const [loginStatus, setLoginStatus] = useState("");

  const [regData, setRegData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value,
    });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:6001/register", {
      firstname: regData.firstname,
      lastname: regData.lastname,
      username: regData.username,
      password: regData.password,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setLoginStatus("Error: Signup Records");
      } else {
        //setLoginStatus(response.data[0].username);
        setLoginStatus("Signup completed successfully!");
      }
    });
  };

  return (
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="firstname"
          value={regData.firstname}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="lastname"
          value={regData.lastname}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          name="username"
          value={regData.username}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={regData.password}
          onChange={changeHandler}
        />
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={signupHandler}
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>

      <p style={{ color: "blue" }}>{loginStatus}</p>
    </form>
  );
}

export default Signup;
