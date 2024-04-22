import React, { useState, useEffect } from "react";

export function ProductList() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const productsArray = Object.values(data);
        setProducts(productsArray);
        setLoading(false);
        console.log(productsArray);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  //   if (loading) {
  //     return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  //   }

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
}
