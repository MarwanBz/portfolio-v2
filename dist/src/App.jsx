import "./assets/styles/global.scss";

import Header from "./components/Header/index";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage
        title="I create beautiful websites"
        desc="Hello, I’m Marwan a freelancer front-end developer
          I build and design websites"
        ctaText="Download My Resume"
        workText="My work"
      />
    </div>
  );
}

export default App;
