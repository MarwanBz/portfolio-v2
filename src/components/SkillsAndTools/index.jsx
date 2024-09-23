import "./skillsAndTools.scss";

import SkillsCard from "../SkillsCard";
import Title from "../sectionTitle";

function SkillsAndTools() {
  return (
    <section id="tools">
      <div className="container">
        <img src="/src/assets/images/toolsAndskills.svg" alt="" />
        <div className="tools-container">
          <Title title="Tools and Skills" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            facere commodi dignissimos .
          </p>
        </div>
        <div className="cards-container">
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
        </div>
      </div>
    </section>
  );
}

export default SkillsAndTools;
