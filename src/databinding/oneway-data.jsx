import { useState } from "react";

export function OneDataBinding() {
  const [Name, setName] = useState("TV");
  const [Price, setPrice] = useState(0);
  const [Stock, setStock] = useState(true);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }
  function handleStockChange(e) {
    setStock(e.target.checked);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h2>Edit Product</h2>
          <dl>
            <dt>Name</dt>
            <dd>
              <input type="text" onChange={handleNameChange} value={Name} />
            </dd>
            <dt>Price</dt>
            <dd>
              <input type="number" onChange={handlePriceChange} value={Price} />
            </dd>
            <dt>Stock</dt>
            <dd>
              <input
                type="checkbox"
                onChange={handleStockChange}
                checked={Stock}
              />{" "}
              Available{" "}
            </dd>
          </dl>
        </div>
        <div className="col">
          <h2>Details</h2>
          <dl>
            <dt>Name</dt>
            <dd>{Name}</dd>
            <dt>Price</dt>
            <dd>{Price}</dd>
            <dt>Stock</dt>
            <dd>
              {Stock === true ? (
                <span>Available</span>
              ) : (
                <span>Out of Stock</span>
              )}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
