import React from "react";
import ProductCard from "../components/ProductCard"; // Import ProductCard component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Home = () => {
  // Sample products for display
  const products = [
    { id: 1, title: "Smartphone", description: "Latest 5G smartphone.", price: 699, rating: 4, 
        image: "./Images/1.jpg" ,stock: 5},
    { id: 2, title: "Laptop", description: "Powerful gaming laptop.", price: 1299, rating: 5, image: "./Images/2.jpg" ,stock: 0},
    { id: 3, title: "Earphones", description: "Noise-canceling earphones.", price: 199, rating: 4, image: "./Images/3.jpg",stock: 5 },
    { id: 4, title: "Smartwatch", description: "Fitness tracking smartwatch.", price: 299, rating: 4, image: "./Images/4.jpg" , stock: 5},
    { id: 5, title: "Tablet", description: "Portable and powerful tablet.", price: 499, rating: 4, image: "./Images/5.jpg",
      stock: 5
     },
    { id: 6, title: "Camera", description: "DSLR professional camera.", price: 899, rating: 5, image: "./Images/6.jpg" ,stock: 5},
    { id: 7, title: "Headphones", description: "Wireless over-ear headphones.", price: 149, rating: 4, image: "./Images/7.jpg" , stock: 1},
    { id: 8, title: "Speaker", description: "Bluetooth portable speaker.", price: 99, rating: 4, image: "./Images/1.jpg" ,stock: 2},
    { id: 9, title: "Gaming Console", description: "Next-gen gaming console.", price: 499, rating: 5, image: "./Images/1.jpg" ,stock: 6},
    { id: 10, title: "Monitor", description: "4K ultra HD monitor.", price: 399, rating: 4, image: "./Images/1.jpg" ,stock: 5},
  ];

  return (
    <div className="container mt-4">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-2"> {/* Adjust column width */}
              <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
