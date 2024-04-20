import { useState } from "react";

export function FlipProdArrayDataBinding() {
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
      {products.map((product) => (
        <div key={product.title} className="row my-4">
          <div className="col-2">
            <img src={product.image} width="100%" />
          </div>
          <div className="col-8">
            <div className="h4">{product.title}</div>
            <div className="my-3">
              <span className="badge bg-success text-white rounded">
                {" "}
                <span className="bi bi-star-fill"></span> {product.rating.rate}{" "}
              </span>
              <span className="text-secondary mx-2 fw-bold">
                {" "}
                {product.rating.ratings.toLocaleString()} <b>Ratings</b> &{" "}
                {product.rating.reviews.toLocaleString()} <b>Reviews</b>{" "}
              </span>
            </div>
            <div>
              <ul>
                {product.features.map((feature) => (
                  <li className="my-1" key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-2">
            <h2>
              {product.price.toLocaleString("en-in", {
                style: "currency",
                currency: "INR",
              })}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
