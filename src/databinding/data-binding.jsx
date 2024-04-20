import { useState } from "react";

export function DataBinding() {
  const [price] = useState(45000.56);
  const [age] = useState(22);
  const [categories] = useState(["All", "Electronics", "Fashion"]);
  const [product] = useState({
    Name: "Samsung TV",
    Price: 5000.44,
    Cities: ["Delhi", "Hyd"],
    Rating: { Rate: 4.5, Count: 560 },
  });

  return (
    <div className="container-fluid">
      <h4>Data Binding number with local conversion currency</h4>
      Price :{" "}
      {price.toLocaleString("en-in", { style: "currency", currency: "INR" })}
      <h4>Data Binding : check number is numeric or not</h4>
      Age: {isNaN(age) ? <span>Age must be a number</span> : <span>{age}</span>}
      <h4>Array and display data dropdown , list, </h4>
      <div className="container-fluid">
        <ol>
          {categories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <ul>
          {categories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <select>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <ul className="list-unstyled">
          {categories.map((item) => (
            <li key={item}>
              {" "}
              <input type="checkbox" /> {item}{" "}
            </li>
          ))}
        </ul>
        <nav>
          {categories.map((item) => (
            <span className="me-4" key={item}>
              <a href="{item}">{item}</a>
            </span>
          ))}
        </nav>
      </div>
      <h4>display json data</h4>
    </div>
  );
}
