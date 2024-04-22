import { useState } from "react";

export function TouchDemo() {
  const [tip, setTip] = useState("");
  function handleTouch(msg) {
    setTip(msg);
  }
  return (
    <div className="container-fluid">
      <div className="mt-3">
        <img
          onTouchStart={() => {
            handleTouch("5% OFF - 79,999/-");
          }}
          src="images/iphone-black.jpg"
          width="300"
          height="300"
        />
        <img
          onTouchStart={() => {
            handleTouch("Best Seller - 10% OFF 69,999/-");
          }}
          src="images/iphone-blue.jpg"
          width="300"
          height="300"
        />
      </div>
      <p className="text-center h1">{tip}</p>
    </div>
  );
}
