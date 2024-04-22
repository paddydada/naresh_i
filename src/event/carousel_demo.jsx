import axios from "axios";
import { useEffect, useRef, useState } from "react";

export function CarouselDemo() {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
    rating: { rate: 0, count: 0 },
  });
  const [status, setStatus] = useState("");
  let count = useRef(1);
  let auto = useRef(null);

  function LoadProductManual(id) {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }

  function LoadProductAuto() {
    count.current = count.current + 1;
    axios
      .get(`https://fakestoreapi.com/products/${count.current}`)
      .then((response) => {
        setProduct(response.data);
      });
  }

  function handlePlayClick() {
    auto.current = setInterval(LoadProductAuto, 3000);
    setStatus("Slide Show - Started");
  }
  function handlePauseClick() {
    clearInterval(auto.current);
    setStatus("Slide Show - Paused");
  }

  function handleNextClick() {
    count.current = count.current + 1;
    LoadProductManual(count.current);
  }
  function handPrevClick() {
    count.current = count.current - 1;
    LoadProductManual(count.current);
  }

  useEffect(() => {
    LoadProductManual(1);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card p-2 m-2 w-50">
        <div className="card-header text-center" style={{ height: "70px" }}>
          <div>{product.title}</div>
          <p>{status}</p>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
              <button
                onClick={handPrevClick}
                className="bi bi-chevron-left btn btn-lg"
              ></button>
            </div>
            <div className="col-10">
              <img height="300" width="100%" src={product.image} />
            </div>
            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
              <button
                onClick={handleNextClick}
                className="bi bi-chevron-right btn btn-lg"
              ></button>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button
            onClick={handlePlayClick}
            className="bi bi-play btn btn-success"
          ></button>
          <button
            onClick={handlePauseClick}
            className="bi bi-pause ms-1 btn btn-danger"
          ></button>
        </div>
      </div>
    </div>
  );
}
