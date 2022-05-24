import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import "../../public/Navbar.css";
import { MDBCol, MDBIcon } from "mdbreact";
export const Navbar = () => {
  return (
    <div className="navbar_main">
      <div className="navbar_leftSide">
        <img src="/assets/logo.png" alt="hello" width="160px" />
        <div className="navbar_leftSide_content">
          <ul>
            <li className="navbar_icons">
              <li>Home</li>
              <IoIosArrowDown size={25} />
            </li>
            {/* <li>Pages</li> */}

            <li>Products</li>

            {/* <li>Blog</li> */}
            {/* <li>Shop</li> */}
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="navbar_rightSide">
        <MDBCol md="6">
          <div className="margin_navbar">
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-prepend">
              <span
                className="input-group-text purple lighten-3"
                id="basic-text1"
              >
                <MDBIcon className="text-white" icon="search" />
              </span>
            </div>
          </div>
        </MDBCol>
      </div>
    </div>
  );
};
export default Navbar;
