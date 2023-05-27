import "./LandingPage.scss";

function LandingPage(props) {
  return (
    <section>
      <div id="home" className="landing">
        <div className="container">
          <div className="landing-left">
            <h1>{props.title}</h1>
            <p> {props.desc}</p>
            <div className="btn-landing">
              <a href="#contact" className="primary-btn">
                {props.ctaText}
              </a>
              <a href="#portfolio" className="secondary-btn">
                {props.workText}
              </a>
            </div>
          </div>
          <div className="landing-right">
            <div className="svg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
