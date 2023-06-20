import "./about.scss";

import Title from "../sectionTitle";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

function About(props) {
  // ! svg circle length = 1040.5220947265625
  useEffect(() => {
    const svg = document.getElementById("img-circle");
    const l = svg.getTotalLength();
    console.log(l);
    
    
  });

  // const path = gsap.fromTo(
  //   "#img-circle",
  //   { x: 0 },
  //   { x: 450, delay: 3, repeat: 5 }
  // );
  // console.log(path);
  return (
    <section id="about">
      <div className="container">
        <Title title="About Me" />
        <div className="about-me">
          <div className="about-description">
            <p>{props.aboutDesc}</p>
            <a
              href="mailto:marouane.bazghifan@gmail.com"
              className="primary-btn"
            >
              {props.aboutCta}
            </a>
          </div>
          <div className="about-img">
            <img src="/src/assets/images/marwan.png" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="380.031"
              height="416.003"
              viewBox="0 0 380.031 416.003"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.842"
                  y1="1.129"
                  x2="0.348"
                  y2="0.348"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#55c8c4" stopOpacity="0" />
                  <stop offset="1" stopColor="#72b4bd" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                id="img-circle"
                d="M67.081,18.394c32.713,6.758,55.975,35.692,79.152,66.273,28.753,37.939,68.8,71.737,66.117,125.409-3.023,60.507-37.192,113.607-79.363,139.726-41.631,25.784-92.123,22.444-130.352-9.839-33.811-28.553-92.32-59.895-102.163-111.023C-109.946,174.823-81.019,87.694-54.495,43.2-27.871-1.461,24.642,9.627,67.081,18.394"
                transform="translate(108.955 28.849) rotate(-8)"
                stroke="#b97051"
                strokeLinecap="round"
                strokeWidth="17"
                strokeDasharray="133 100"
                fill="url(#linear-gradient)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
