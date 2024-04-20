import { useState } from "react";

export function CardProductDataBinding() {
  const [products] = useState([
    {
      title: "Apple iPhone 15 (Black, 128 GB)",
      rating: { rate: 4.6, ratings: 21827, reviews: 1511 },
      price: 72999,
      features: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "12MP + 12MP | 12MP Front Camera",
        "A15 Bionic Chip, 6 Core Processor Processor",
        "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
      ],
      image: "images/iphone-black.jpg",
    },
    {
      title: "Apple iPhone 14 (Blue, 128 GB)",
      rating: { rate: 4.7, ratings: 1221827, reviews: 11511 },
      price: 58999,
      features: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "12MP + 12MP | 12MP Front Camera",
        "A15 Bionic Chip, 6 Core Processor Processor",
        "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
      ],
      image: "images/iphone-blue.jpg",
    },
  ]);

  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <div className="card m-2 p-2 w-25">
            <img src={product.image} className="card-img-top" height="200" />
            <div className="card-header">
              <h5>{product.title}</h5>
            </div>
            <div className="card-body">
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <button className="bi bi-cart4 btn btn-warning w-100">
                {" "}
                Add to Cart{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
