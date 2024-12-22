import styled from "styled-components";

const FooterDiv = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  background-color: var(--main-color);
  & p {
    margin-top: 10px;
    text-align: center;
    justify-content: center;
  }
`;

function Footer() {
  return (
    <FooterDiv>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              &copy; Copyright {new Date().getFullYear()}, by Adilson Viegas
            </p>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
}

export default Footer;
