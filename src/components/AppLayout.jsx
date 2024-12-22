import styled from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "./Footer";

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

function AppLayout() {
  return (
    <>
      <Body>
        <LeftSide />
        <RightSide />
      </Body>
      <Footer />
    </>
  );
}

export default AppLayout;
