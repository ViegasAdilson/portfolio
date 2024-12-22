import "./skill.css";
import { stack } from "../../data/data-skill";

import PropTypes from "prop-types";

function Tec({ tec }) {
  return (
    <span>
      <i className={tec}></i>
    </span>
  );
}

Tec.propTypes = {
  tec: PropTypes.object,
};

function Box({ box }) {
  return (
    <div className="box">
      <p>{box.name}</p>
      {box.technologies.map((tec) => (
        <Tec tec={tec} key={tec[0]} />
      ))}
    </div>
  );
}

Box.propTypes = {
  box: PropTypes.object,
};

function Skills() {
  return (
    <div className="section-Skills">
      <h2 id="skills-section-title">Tech Stack</h2>
      <h4 className="decription">Discover the technologies that I studied:</h4>
      <p></p>
      <div className="skill-ontaineir">
        {stack.map((box) => (
          <Box box={box} key={box.name} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
