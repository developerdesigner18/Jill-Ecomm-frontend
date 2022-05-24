import React, { useState } from "react";
import "../../public/Heading.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall, BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
// import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

import NavbarRes from "./NavbarRes";
import { Navbar } from "./Navbar";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="Header_main">
        <div className="Header_leftSide">
          <ul>
            <li className="Header_icons">
              <MdOutlineMailOutline size={25} />
              <li> Test100@gmail.com</li>
            </li>
            <li className="Header_icons">
              <BiPhoneCall size={25} />
              <li>(12345)67890</li>
            </li>
          </ul>
        </div>
        <div className="Header_rightSide">
          <ul>
            <li className="Header_icons">
              <li>Login</li>
              <BiUser size={25} />
            </li>

            <li className="Header_icons">
              <li>Wishlist</li>
              <FaRegHeart size={25} />
            </li>
            <li>
              {" "}
              <BsCart2 size={25} />
            </li>
            <li>
              {" "}
              <IoMdNotificationsOutline size={25} />
            </li>
            <li>
              {" "}
              <FiSettings size={25} />
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={() => setShow(true)}>
          <NavbarRes placement="end" />
        </div>
      </div>
      <Navbar />
    </>
  );
};
export default Header;
