import React from "react";
import "../../public/Footer.css";
const Footer = () => {
  return (
    <div className="Footer_main">
      <img src="/assets/logo.png" alt="hello" width="160px" />
      <div className="Footer_main_cont">
        <div className="Footer_part2">
          <h4 className="Footer_cont_Header"> Catagories</h4>
          <ul>
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>
        <div className="Footer_part2">
          <h4 className="Footer_cont_Header"> Customer Care</h4>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>
        <div className="Footer_part2">
          <h4 className="Footer_cont_Header"> Pages</h4>
          <ul>
            <li>Blog</li>
            <li>Browse the shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual composer Elements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
