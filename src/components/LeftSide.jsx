import Menu from "./Menu";
import Contact from "./Contact";

function LeftSide() {
  return (
    <aside className="leftSide">
      <div className="leftDiv">
        <img src="img/aplv.jpg" alt="Adilson Viegas" />
        <p>Adilson Pires Lima Viegas</p>
        <p>
          My name is Adilson Viegas, and I am a
          <samp className="highlight"> Junior Software/Web Developer</samp>
        </p>
        <p className="aside-welcome">Welcome</p>
      </div>
      <Menu />
      <Contact />
    </aside>
  );
}

export default LeftSide;
