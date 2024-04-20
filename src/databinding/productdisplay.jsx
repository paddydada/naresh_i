import { useState } from "react";

export function ProductsDataBinding() {
  const [products] = useState([
    { Name: "TV", Price: 45000.44 },
    { Name: "Mobile", Price: 12000.44 },
  ]);

  return (
    <div className="container-fluid">
      <h2>Product Table</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.Name}>
              <td>{product.Name}</td>
              <td>{product.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
