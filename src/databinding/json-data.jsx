import { useState } from "react";

export function JsonDataBinding() {
  const [product] = useState({
    Name: "Samsung TV",
    Price: 5000.44,
    Cities: ["Delhi", "Hyd"],
    Rating: { Rate: 4.5, Count: 560 },
  });

  const [productDetails] = useState({
    Name: "Samsung TV",
    Price: 5000.44,
    Cities: ["Delhi", "Hyd"],
    Rating: { Rate: 4.5, Count: 560 },
  });

  return (
    <div className="container-fluid">
      <h3>Product Details</h3>
      {Object.keys(product).map((key) => (
        <p key={key}>
          <strong>{key}:</strong> {JSON.stringify(product[key])}
        </p>
      ))}
      {/* </div>

    <div className="conttainer-fluid"> */}
      <h5>Product details 1</h5>

      <dl>
        <dt>Product Name</dt>
        <dd>{productDetails.Name}</dd>
        <dt>Product Price</dt>
        <dd>{productDetails.Price}</dd>
        <dt>Product Cities</dt>
        <dd>
          {productDetails.Cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </dd>
        <dt>Rating</dt>
        <dd>
          {productDetails.Rating.Rate}{" "}
          <span className="bi bi-star-fill text-success"></span> [
          {productDetails.Rating.Count}]
        </dd>
      </dl>
    </div>
  );
}
