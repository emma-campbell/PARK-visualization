import { Link } from "react-router-dom";
import styled from "styled-components";

// LOGO
import PARK from "../../images/PARK.png";

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

const ReturningClients = () => {
  return (
    <ReturningClientDiv>
      <LogoBar>
        <Link to="/">
          <img src={PARK} alt="PARK" />
        </Link>
        <h1>Your results are in...</h1>
      </LogoBar>
    </ReturningClientDiv>
  );
};

export default ReturningClients;
