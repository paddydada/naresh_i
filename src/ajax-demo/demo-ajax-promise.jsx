import { useEffect, useState } from "react";

export function AjaxDemoPromise() {
  const [products, setProducts] = useState([
    {
      title: "",
      price: 0,
      rating: { rate: 0, ratings: 0, reviews: 0 },
      image: "",
    },
  ]);

  function LoadProducts() {
    fetch("products.json")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }

  useEffect(() => {
    LoadProducts();
  }, []);

  return (
    <div className="container-fluid">
      {products.map((product) => (
        <div key={product.title} className="row my-4">
          <div className="col-2">
            <img src={product.image} width="100%" />
          </div>
          <div className="col-10">
            <div className="h4"> {product.title} </div>
            <div className="my-2">
              <span className="badge bg-success rounded">
                {" "}
                {
                  product.rating.rate
                } <span className="bi bi-star-fill"></span>{" "}
              </span>
              <span className="mx-2 text-secondary fw-bold">
                {" "}
                {product.rating.ratings} Ratings & {product.rating.reviews}{" "}
                Reviews{" "}
              </span>
            </div>
            <div className="my-2">
              <div className="h3">
                {" "}
                {product.price.toLocaleString("en-in", {
                  style: "currency",
                  currency: "INR",
                })}{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
