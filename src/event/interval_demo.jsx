import { useRef, useState } from "react";

export function IntervalDemo() {
  const [buttonDisplay, setButtonDisplay] = useState("d-block");
  const [progressDisplay, setProgressDisplay] = useState("d-none");
  const [imageDisplay, setImageDisplay] = useState("d-none");
  const [progressValue, setProgressValue] = useState(1);
  const [statusMsg, setStatusMsg] = useState("");
  let count = useRef(1);
  let status = useRef(null);

  function Loading() {
    count.current = count.current + 1;
    setProgressValue(count.current);
    if (count.current == 100) {
      setProgressDisplay("d-none");
      setImageDisplay("d-block");
    }
  }

  function handleLoadClick() {
    status.current = setInterval(Loading, 100);
    setButtonDisplay("d-none");
    setProgressDisplay("d-block");
  }

  function handlePauseClick() {
    clearInterval(status.current);
    setStatusMsg("Paused");
  }
  function handlePlayClick() {
    status.current = setInterval(Loading, 200);
    setStatusMsg("");
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <div className={buttonDisplay}>
          <button onClick={handleLoadClick} className="btn btn-primary">
            Load Image
          </button>
        </div>
        <div className={progressDisplay}>
          <progress
            style={{ width: "200px", height: "30px" }}
            min="1"
            max="100"
            value={progressValue}
          ></progress>
          <div className="my-2 text-center">
            <button
              onClick={handlePauseClick}
              className="bi bi-pause btn btn-warning"
            ></button>
            <button
              onClick={handlePlayClick}
              className="bi bi-play btn btn-success ms-3"
            ></button>
          </div>
          <p className="text-center">
            {progressValue} % completed <br /> {statusMsg}{" "}
          </p>
        </div>
        <div className={imageDisplay}>
          <img src="images/iphone-black.jpg" width="300" height="300" />
        </div>
      </div>
    </div>
  );
}
