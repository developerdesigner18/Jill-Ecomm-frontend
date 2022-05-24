import React from "react";
import "../../public/SubHeader.css";
export const SubHeader = () => {
  return (
    <div className="main_subHeader">
      <div className="Sub_main_subHeader">
        <div className="myAccount_sh">My Account</div>
        <div className="home_sh">Home . Pages . MyAccount</div>
      </div>
      <div className="hidden_sh"></div>
    </div>
  );
};
export default SubHeader;
