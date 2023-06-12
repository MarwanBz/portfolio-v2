import "./about.scss";

import Title from "../sectionTitle";

function About(props) {
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
              width="360"
              height="360"
              viewBox="0 0 360 360"
            >
              <g
                id="img-circle"
                fill="none"
                stroke="#b97051"
                stroke-width="17"
                stroke-dasharray="82 99"
              >
                <circle cx="180" cy="180" r="180" stroke="none" />
                <circle cx="180" cy="180" r="171.5" fill="none" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
