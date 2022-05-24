import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./Navbar.css";
function Navbar({ ...props }) {
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
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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

export default Navbar;
