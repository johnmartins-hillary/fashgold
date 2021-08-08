import React from "react";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";


function SignUp() {
  return (
    <div className="signup">
      <h2>SignUp</h2>
      <form>
        <div className="inputBox">
          <input type="text" name="" required />
          <label>Fullname</label>
        </div>
        <div className="inputBox">
          <input type="email" name="" required />
          <label>email</label>
        </div>
        <div className="inputBox">
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <div className="inputBox">
          <input type="password" name="" required />
          <label>Confirm Password</label>
        </div>
        <input type="submit" name="" value="submit" />
      </form>
      <p>
        Already a member?{" "}
        <span>
          <Link to="/LogIn" className="link-login">
            login
          </Link>
        </span>
      </p>
    </div>
  );
}

export default SignUp;
