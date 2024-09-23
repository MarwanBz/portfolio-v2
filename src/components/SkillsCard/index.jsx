import "./skillsCard.scss";

function SkillsCard() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-icon">
          <i>
            <img src="/src/assets/images/paint.png" alt="" srcset="" />
          </i>
        </div>
        <h2 className="card-title">Designer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          consequatur officiis, maxime impedit voluptates tempore nemo pariatur
          veritatis quia. Soluta.
        </p>
        <h2 className="card-title">Things I enjoy designing: </h2>
        <p>UI,UX,Web Design</p>
        <h2 className="card-title">Design Tools : </h2>
        <p>
          one <br />
          tow <br />
          three
        </p>
      </div>
    </div>
  );
}

export default SkillsCard;