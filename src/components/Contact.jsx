import styled from "styled-components";

const GetTouch = styled.div`
  text-align: center;
  padding: 30px 30px 0px 0px;
`;

function Contact() {
  return (
    <GetTouch>
      <p className="d-none d-md-block">GET IN TOUCH</p>

      <div className="social">
        <a href="mailto:viegadilson@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/adilson-pires-lima-viegas-0629221a2/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ViegasAdilson" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </GetTouch>
  );
}

export default Contact;
