import { Link } from "react-router-dom";
import styled from "styled-components";

// LOGO
import PARK from "../../images/PARK.png";

// COMPONENTS
import SubScore from "./SubScore";

const ReturningClientDiv = styled.div`
  height: 100vh;
`;

const LogoBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
  align-items: center;
  & img {
    padding: 0.5em;
    width: 4em;
    height: 4em;
  }

  & h1 {
    padding: 0;
    margin: 0;
  }
`;

const Content = styled.div`
  justify-content: space-between;
  height: 90vh;
  display: flex;
  padding: 2em;
`;

const SideBar = styled.div`
  padding-bottom: 1em;
  display: grid;
  grid-template-rows: 25vh 55vh;
  gap: 20px;
  width: 35%;
`;

const FillerDiv = styled.div`
  padding: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const ReturningClients = () => {
  return (
    <ReturningClientDiv>
      <LogoBar>
        <Link to="/">
          <img src={PARK} alt="PARK" />
        </Link>
        <h1>Your results are in...</h1>
      </LogoBar>
      <Content>
        <SideBar>
          <FillerDiv>CONFIDENCE</FillerDiv>
          <SubScore faceScore="2" speechScore="3" motorScore="4"/>
        </SideBar>
      </Content>
    </ReturningClientDiv>
  );
};

export default ReturningClients;
