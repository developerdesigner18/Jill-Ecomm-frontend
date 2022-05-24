import React from "react";
import { useNavigate } from "react-router-dom";

export const MainRegister = () => {
  let navigate = useNavigate();

  return (
    <div className="MainLogin_cont">
      <div className="MainLogin_cont_form">
        <h2 className="MainLogin_cont_Login_h2">Register</h2>
        <h6 className="MainLogin_cont_h6">
          Please register using account detail below.
        </h6>
        <form>
          <div className="input-container">
            <input placeholder="UserName" type="text" name="uname" required />
          </div>
          <div className="input-container">
            <input
              placeholder="Email Address"
              type="email"
              name="email"
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

          <div className="button-container">
            <input type="submit" value="Sign Up" />
          </div>
          <h6
            className="MainLogin_cont_h6"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Already have an account?Sign In here
          </h6>
        </form>
      </div>
    </div>
  );
};
export default MainRegister;
