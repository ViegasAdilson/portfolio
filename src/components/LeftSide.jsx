import styled from "styled-components";
import Menu from "./Menu";
import Contact from "./Contact";

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100vh;
  color: var(--text-color);
  border-right: 5px solid var(--main-color);
  background: var(--aside-color);
  padding: 0 10px;
  overflow: hidden;

  & img:hover {
    transform: scale(1.05);
    filter: grayscale(0%);
    box-shadow: 5px 5px 20px black;
    cursor: pointer;
  }
`;
const Conteude = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
`;
const Img = styled.img`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px auto;
  padding: 3px 0px;
  border: 5px solid var(--main-color);
  box-shadow: 5px 5px, 20px var(--text-color);
  cursor: pointer;
  transition: 0.5s ease-in-out;
  user-select: none;
`;

function LeftSide() {
  return (
    <Aside>
      <Conteude>
        <Img src="img/aplv.jpg" alt="Adilson Viegas" />
        <p>Adilson Pires Lima Viegas</p>
        <p>
          My name is Adilson Viegas, and I am a
          <samp className="highlight"> Junior Software/Web Developer</samp>
        </p>
        <p className="aside-welcome">Welcome</p>
      </Conteude>
      <Menu />
      <Contact />
    </Aside>
  );
}

export default LeftSide;
