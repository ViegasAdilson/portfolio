import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <setion className="about">
      <h3 className="decription">Adilson Viegas</h3>
      <p>
        An energetic junior software developer Software Engineering graduate in{" "}
        <Link
          to="https://autonoma.pt/cursos/engenharia-informatica/"
          target="blank"
        >
          Autonomous University of Lisbon
        </Link>{" "}
        with fundamental knowledge of software design, development, and testing.
        Seeking to utilize broad educational background with excellent
        analytical, technical, and programming skills to thrive as an
        entry-level software engineer. I am positive, hardworking, enthusiastic,
        committed, professional self motivate, fast learner with ability to
        quickly adjust the new responsibility in diverse environment and strong
        time management and multi-tasking skills. Strong work ethic in team or
        individual settings product success and process efficiency. Front end
        and the back end developer. I study every day to feel better and better
        and write quality codes.
      </p>
      <p className="decription">
        As web developer, I enjoy to participate in the project since the
        definition of business rules and requirements gathering to the
        application deployment. I also enjoy using my obsessive attention to
        detail, my unequivocal love for making things.
      </p>
    </setion>
  );
}

export default About;
