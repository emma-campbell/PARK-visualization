import styled from "styled-components";

import ProgressBar from "../ProgressBar";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const SubScoreDiv = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  & h1 {
    padding-top: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  & h2 {
    margin-top: 0;
    margin-bottom: 5px;
  }

  & p {
    margin-top: 0;
    color: #878787;
  }
`;

const RightAlignedButtonDiv = styled.div`
  display: flex;
  padding-top: 1em;
  justify-content: flex-end;

  & button {
    padding: 1em;
    border: none;
    border-radius: 20px;
    background-color: #003972;
    & p {
      margin: 0;
      padding: 0;
      font-size: 1.5em;
      color: #ffffff;
    }
  }

  & button:hover {
    background-color: #002d5a;
  }
`;

const ArrowDiv = styled.div`
  display: flex;
  padding-top: 1em;
  justify-content: space-between;

  & .icon:hover {
    fill: #7d7878;
  }
`;

function rightClick() {
  console.log("RIGHT CLICK");
  if (state.category === "MOTOR") {
    state.category = "FACE";
    state.score = faceScore;
  }
  if (state.category === "FACE") {
    state.category = "SPEECH";
    state.score = speechScore;
  }
  if (state.category === "SPEECH") {
    state.category = "MOTOR";
    state.score = motorScore;
  }
}

function leftClick() {
  console.log("LEFT CLICK");
  if (state.category === "MOTOR") {
    state.category = "SPEECH";
    state.score = speechScore;
  }
  if (state.category === "FACE") {
    state.category = "MOTOR";
    state.score = motorScore;
  }
  if (state.category === "SPEECH") {
    state.category = "FACE";
    state.score = faceScore;
  }
}

const SubScore = ({ faceScore, speechScore, motorScore }) => {
  const state = {
    category: "MOTOR",
    score: motorScore,
  };

  return (
    <SubScoreDiv>
      <h1>{state.category}</h1>
      <p>Task 4</p>
      <h2>SCORE | {state.score}</h2>
      <ProgressBar completed="70" />
      <RightAlignedButtonDiv>
        <button>
          <p>EXPLAIN MY SCORE</p>
        </button>
      </RightAlignedButtonDiv>
      <ArrowDiv>
        <LeftArrow onClick={leftClick()} />
        <RightArrow onClick={rightClick()} />
      </ArrowDiv>
    </SubScoreDiv>
  );
};

export default SubScore;
