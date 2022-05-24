import React from "react";
import "../../public/MainLogin.css";
import { useNavigate } from "react-router-dom";

const MainLogin = () => {
  let navigate = useNavigate();
  return (
    <div className="MainLogin_cont">
      <div className="MainLogin_cont_form">
        <h2 className="MainLogin_cont_Login_h2">Login</h2>
        <h6 className="MainLogin_cont_h6">
          Please login using account detail below.
        </h6>
        <form>
          <div className="input-container">
            <input
              placeholder="Email Address"
              type="email"
              name="uname"
              required
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Password"
              type="password"
              name="pass"
              required
            />
          </div>
          <h6 className="MainLogin_cont_h6_left">Forgot your password?</h6>
          <div className="button-container">
            <input type="submit" value="Sign In" />
          </div>
          <h6
            className="MainLogin_cont_h6"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Don't have any account?Create account
          </h6>
        </form>
      </div>
    </div>
  );
};
export default MainLogin;
