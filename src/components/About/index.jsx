import "./about.scss";

import Title from "../sectionTitle";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

function About(props) {
  // ! svg circle length = 1040.5220947265625
  useEffect(() => {
    // const svg = document.getElementById("img-circle");
    // const l = svg.getTotalLength();
    // console.log(l);
    
    
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
              width="350"
              height="400"
              viewBox="0 0 350 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="15"
                y="15"
                width="320"
                height="370"
                rx="46"
                stroke="url(#paint0_linear_1_2565)"
                stroke-width="30"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_2565"
                  x1="175"
                  y1="0"
                  x2="175"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6797DC" />
                  <stop offset="1" stop-color="#F881E6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
