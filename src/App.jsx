import "./assets/styles/global.scss";

import About from "./components/About";
import Header from "./components/Header/index";
import LandingPage from "./components/LandingPage";
import SkillsAndTools from "./components/SkillsAndTools/index";

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
      <About
        title="About Me"
        aboutDesc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi porro laboriosam dicta deleniti quia iure sunt magni ducimus vel exercitationem impedit cum ullam laudantium voluptate praesentium, odit inventore atque nesciunt ad. Cupiditate similique quia quidem ipsum rem dicta, modi eos quos amet omnis fuga asperiores facere natus! Voluptates laudantium repellat dicta, voluptatibus, expedita dolor reprehenderit quaerat est veritatis quisquam corporis optio? Minima fugit nesciunt molestiae sed ipsa culpa quasi voluptates aliquid, ratione itaque totam asperiores, obcaecati ducimus, ad nulla beatae? Laboriosam dolorum officiis necessitatibus, obcaecati ad sunt in nesciunt commodi."
        aboutCta="Drop Me an Email"
      />
      <SkillsAndTools />
    </div>
  );
}

export default App;
