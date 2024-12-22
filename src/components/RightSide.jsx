import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  width: 70%;
`;

function RightSide() {
  return (
    <Section>
      <Outlet />
    </Section>
  );
}

export default RightSide;
