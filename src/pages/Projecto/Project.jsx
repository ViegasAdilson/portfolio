import "./project.css";
import { projectos } from "../../data/data-project";

import PropTypes from "prop-types";

function Project() {
  return (
    <div className="project-section">
      <div className="titile-section">
        <h1>Project</h1>
      </div>
      <div className="contain">
        {projectos.map((projeto) => (
          <Capa objProject={projeto} key={projeto.picture} />
        ))}
      </div>
    </div>
  );
}

function Capa({ objProject }) {
  return (
    <div className="capa">
      <div className="front">
        <img src={objProject.picture} alt="" />
      </div>
      <div className="back social">
        <a href={objProject.git} target="blank">
          <i className="fab fa-github"></i>
        </a>
        <a href={objProject.onlineSite} target="blank">
          <i className="fas fa-eye"></i>
        </a>
      </div>
    </div>
  );
}
Capa.propTypes = {
  objProject: PropTypes.object,
};
export default Project;
