import styled from "styled-components";

import LandingImage from "../../images/landing-bg.jpg";

const HeroDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0;
  margin-top: 0;
  background-image: url(${LandingImage});
  background-size: cover;
  height: 100vh;

  & h1,
  h2 {
    padding: 0;
    margin: 0;
    color: #ffffff;
  }

  & button {
    margin-top: 2em;
    color: #ffffff;
    padding-top: 2em;
    padding-bottom: 2em;
    padding-right: 3em;
    padding-left: 3em;
    border: none;
    border-radius: 40px;
    background-color: #003972;

    & p {
      font-size: 2.5em;
      padding: 0;
      margin: 0;
    }
  }

  & button:hover {
    background-color: #002D5A;
  }
`;

const TitleDiv = styled.div`
  text-align: left;
  padding-left: 4em;
  & h1 {
    font-size: 4em;
  }

  & h2 {
    font-size: 2em;
  }
`;

const Hero = () => {
  return (
    <HeroDiv>
      <TitleDiv>
        <h1>PARKTest.net</h1>
        <h2>On-Demand Parkinson's Evaluation</h2>
        <button><p>GET STARTED</p></button>
      </TitleDiv>
    </HeroDiv>
  );
};

export default Hero;
