import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Modern cart icon
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const MyNavbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand="lg"  variant="dark" className="py-3 shadow-lg" style={{ backgroundColor: "#3a9188" }}>
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-warning">
          🛍️ Luna Store
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Home Link */}
            <Nav.Link as={Link} to="/" className="text-light fs-5 mx-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="text-light fs-5 mx-3">
              Dashboard </Nav.Link>

            {/* Cart Icon with Badge */}
            <Nav.Link as={Link} to="/cart" className="text-light fs-5 mx-3">
              <ShoppingCart size={24} />{" "}
              <Badge bg="danger">{cart.length}</Badge>
            </Nav.Link>

            {/* Login Button */}
            <Nav.Link as={Link} to="/login" className="btn  px-4 ms-3" >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
