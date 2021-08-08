import React from "react";
import "../styles/LogIn.css";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="inputBox">
          <input type="text" name="" required />
          <label>Username</label>
        </div>
        <div className="inputBox">
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <input type="submit" name="" value="submit" />
      </form>
      <p>
        Not a member?{" "}
        <span>
          <Link to="/SignUp" className="link-SignUp">
            SignUp
          </Link>
        </span>
      </p>
    </div>
  );
}

export default LogIn;
