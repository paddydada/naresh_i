import { useState } from "react";

export function FlipcartDataBinding() {
  const [product] = useState({
    title: "Apple iPhone 15 (Black, 128 GB)",
    rating: { rate: 4.6, ratings: 21827, reviews: 1511 },
    price: 72999,
    offers: [
      "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
      "Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C",
      "Bank Offer₹2000 Off On SBI Credit Card TransactionsT&C",
      "Special PriceGet extra ₹4901 off (price inclusive of cashback/coupon)T&C",
    ],
    image: "images/iphone-black.jpg",
  });

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-3">
          <img src={product.image} width="100%" />
        </div>
        <div className="col-9">
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
          <div className="my-4">
            <h1>
              {product.price.toLocaleString("en-in", {
                style: "currency",
                currency: "INR",
              })}
            </h1>
          </div>
          <div>
            <div className="fw-bold">Available Offers</div>
            <ul className="list-unstyled">
              {product.offers.map((offer) => (
                <li key={offer} className="text-success my-2 bi bi-tag-fill">
                  {" "}
                  <span className="text-secondary">{offer}</span>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
