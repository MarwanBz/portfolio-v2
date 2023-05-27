import  "../UnderBuilding/maintenance.scss";

import { useEffect, useRef } from "react";

import { ReactDOM } from "react";
import animationData from "./137052-building-page.json";
import lottie from "lottie-web";

function Maintenance() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <div className="main-container">
      <div className="svg-container" ref={container}></div>
      <h2>Version 2 of My Portfolio is Under building👨‍💻🛠️</h2>
      <p>Gonna be available ASAP🏃‍♀️</p>
      <h4>
        See V1{" "}
        <a
          href="https://marwanbaz.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
      </h4>
    </div>
  );
}

export default Maintenance;
