import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "../../public/NavbarRes.css";
import { MDBCol, MDBIcon } from "mdbreact";
import { BiPhoneCall, BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
function NavbarRes({ ...props }) {
  const [show, setShow] = useState(false);
  // const { height, width } = useWindowDimensions();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="me-2">
        <div className="threeLines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
          <div className="navbarRes_content">
            <ul>
              <li className="navbar_icons">
                <li>Home</li>
                <IoIosArrowDown size={25} />
              </li>

              <li>Products</li>

              <li>Settings</li>
            </ul>
          </div>
          <div className="Header_rightSide_responsive">
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
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
// function Example() {
//   return (
//     <>
//       <OffCanvasExample key={idx} placement="end" name="end" />
//     </>
//   );
// }

export default NavbarRes;
