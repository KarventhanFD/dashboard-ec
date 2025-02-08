import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";  

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);  

  return (
    <Card style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)", gap: "10px" }} className="">  
      <Card.Img variant="top" src={product.image} style={{ height: "150px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Price: ₹{product.price}</Card.Text>
        <Card.Text>Rating: ⭐{product.rating}</Card.Text>
        <Card.Text>Stock: {product.stock}</Card.Text>
        <p>
  Status: <span id="stock_status" className={product.stock > 0 ?
'text-success':'text-danger'}>{product.stock > 0 ?'In Stock': 'Out of stock'}</span> </p>
        <Button variant="danger" onClick={() => addToCart(product)} >Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
