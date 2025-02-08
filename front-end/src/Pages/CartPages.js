import React, { useState, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react"; // Modern delete icon


const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const TotalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  //Increare the quantity of the product

  const [count, setCount] = useState(1);



  return (
    <Container className="py-4">
      <h2 className="text-center text-warning fw-bold mb-4">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4 className="text-center text-muted">Your cart is empty! 🛍️</h4>
      ) : (
        <>
          <Row className="g-4">
            {cart.map((item, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="shadow-lg rounded">
                  
                  <Card.Img variant="top" src={item.image} className="p-3" style={{ height: "200px", objectFit: "contain" }} />
                  <Card.Body>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.description}</Card.Text>
                    <h5 className="text-success fw-bold">₹{item.price}</h5>
                    <button onClick={() => setCount(count + 1)} className="btn">+</button>
                    <span>{count}</span>
                    <button onClick={() => setCount(count - 1)} className="btn">-</button>
                    <Card.Subtitle className="text-muted">Rating: ⭐{item.rating}</Card.Subtitle>
                    <Button variant="danger" className="w-100 mt-2" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={18} /> Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Total Price & Checkout */}
          <div className="text-center mt-4">
            <h4 className="fw-bold text-dark">Total: ₹{TotalPrice.toFixed(2)}</h4>
            <Button variant="success" size="lg" className="mt-3 px-5">
              🛍️ Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
