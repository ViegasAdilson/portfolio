import "./mycv.css";
import { employment } from "../../data/data-cv";

import PropTypes from "prop-types";

function Container({ children, icon, title }) {
  return (
    <>
      <div className="cv-title">
        <i className={icon}></i>
        <h4 className="highlight">{title}</h4>
      </div>
      {children}
    </>
  );
}

Container.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

function MyCV() {
  return (
    <div className="cv-container">
      <div id="cv-cabecalho">
        <h3 className="highlight">Adilson Pires Lima Viegas</h3>
        <h4 className="highlight">Junior Web\Software Developer</h4>
        <p>
          <strong>Address:</strong> Leigh, Manchester
        </p>
        <p>
          <strong>Telephone:</strong> 07831185225
        </p>
      </div>
      <div className="perfil">
        <Container icon="fas fa-user" title="Personal Profile">
          <p>
            A junior Software Engineering graduate with fundamental knowledge of
            software design, development, and testing. An energetic junior
            software developer with fundamental knowledge of software design,
            development, and testing. Seeking to utilize broad educational
            background with excellent analytical, technical, and programming
            skills to thrive as an entry-level software engineer. Ability to
            work by myself without the need for constant supervision by
            employees. Able to work harmoniously with another member of the
            team. Possesses great analytical and problem-solving skills. I am
            positive, hardworking, enthusiastic, committed, professional
            self-motivate, fast learner with ability to quickly adjust the new
            responsibility in diverse environment and strong time management and
            multi-tasking skills. Strong work ethic in team or individual
            settings product success and process efficiency.
          </p>
        </Container>
        <Container icon="fas fa-book" title={"IT / Tecnical Skills"}>
          <ul>
            {/* id="skills-cv" style="padding-left: 0" */}
            <li>
              <strong>Languages:</strong> java, C#, Python,MySQL, JavaScripts
            </li>
            <li>
              <strong>Platforms and Frameworks:</strong> Windows, Linux, Django,
              Bootstraps, Git and GitHub
            </li>
            <li>
              <strong>Networks:</strong> Network Configuration, WAN, LAN
            </li>
            <li>
              <strong>Other:</strong>VS Code, Eclipse, Android Studio, Visual
              Studio, Microsoft Office
            </li>
          </ul>
        </Container>
        <Container icon={"fas fa-briefcase"} title={"Employment History"}>
          {employment.map((empl) => (
            <>
              <div className="d-flex">
                <h5>{empl.placement}</h5>
                <span className="ml-auto">
                  <strong>({empl.dateTime})</strong>
                </span>
              </div>
              <p>
                <strong>{empl.position}</strong>
              </p>

              <ul>
                {empl.skills.map((skill) => (
                  <li key={skill[0]}>{skill}</li>
                ))}
              </ul>
            </>
          ))}
        </Container>
        <Container icon={"fas fa-box-open"} title={"Interests / Hobbies"}>
          <p>
            In my free time, I enjoy read forum and blog about technology,
            Robotics and Automation. Socializing with my friends and family and
            colleagues over the weekends. Building some car robot, drone,
            self-balance, Led cube. Playing football with friend during the
            spring and summer months.
          </p>
        </Container>
      </div>
    </div>
  );
}

export default MyCV;
