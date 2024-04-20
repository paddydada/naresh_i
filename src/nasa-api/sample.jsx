import axios from "axios";
import { useEffect, useState } from "react";

export function UVIndex() {
  const [uvData, setUVData] = useState(null);

  function loadData() {
    axios
      .get("https://api.openuv.io/api/v1/uv?lat=18.55&lng=73.78&alt=100&dt=", {
        headers: {
          "x-access-token": "openuv-1t3lrlv7upki8-io",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUVData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching UV data:", error);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <h2>UV Index</h2>
      {uvData ? (
        <div>
          <p>UV Index: {uvData.result.uv}</p>
          <p>Safe Exposure Time: {uvData.result.safe_exposure_time.st1}</p>
        </div>
      ) : (
        <p>Loading UV data...</p>
      )}
    </div>
  );
}
