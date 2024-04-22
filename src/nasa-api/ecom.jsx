import React, { useEffect, useState } from "react";
import axios from "axios";

export function ProductDetails() {
  const [product, setProduct] = useState(null);
  const productUrl =
    "https://www.walmart.com/ip/Media-Remote-for-PlayStation-5/381848762";

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    const options = {
      method: "GET",
      url: "https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
      params: { url: productUrl },
      headers: {
        "X-RapidAPI-Key": "0d79a9ecbfmsh3442e6cc27adb0ep15b231jsn5bd33fd8e52b",
        "X-RapidAPI-Host": "axesso-walmart-data-service.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* You can add more details here */}
    </div>
  );
}
