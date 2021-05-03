import { useEffect, useState } from "react";
import styled from "styled-components";

import ProgressBar from "../../ProgressBar";
import LeftArrow from "../../NewClient/SubScore/LeftArrow";
import RightArrow from "../../NewClient/SubScore/RightArrow";

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
    margin-bottom: 0.25em;
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

const SubScore = ({ faceScore, speechScore, motorScore , setMotorShow, setFaceShow, setSpeechShow}) => {
  const [category, setCategory] = useState("MOTOR");
  const [task, setTask] = useState("4");
  const [score, setScore] = useState(motorScore);

  const [percent, setPercent] = useState("0");

  function calcPercent() {
    if (score === "4") {
      setPercent("100");
    } else if (score === "3") {
      setPercent("75");
    } else if (score === "2") {
      setPercent("50");
    } else if (score === "1") {
      setPercent("25");
    } else {
      setPercent("0");
    }
  }

  function rightClick() {
    if (category === "MOTOR") {
      setCategory("FACE");
      setTask("1 and 2");
      setScore(faceScore);
    }
    if (category === "FACE") {
      setCategory("SPEECH");
      setTask("3");
      setScore(speechScore);
    }
    if (category === "SPEECH") {
      setCategory("MOTOR");
      setTask("4");
      setScore(motorScore);
    }
  }

  function leftClick() {
    if (category === "MOTOR") {
      setCategory("SPEECH");
      setTask("3");
      setScore(speechScore);
    }
    if (category === "FACE") {
      setCategory("MOTOR");
      setTask("4");
      setScore(motorScore);
    }
    if (category === "SPEECH") {
      setCategory("FACE");
      setTask("1 and 2");
      setScore(faceScore);
    }
  }

  useEffect(() => {
      calcPercent();
  })

  return (
    <SubScoreDiv>
      <h1>{category}</h1>
      <p>Task {task}</p>
      <h2>SCORE | {score}</h2>
      <ProgressBar completed={percent} />
      <RightAlignedButtonDiv>
        <button onClick={() => 
          {
            setMotorShow(false);
            setFaceShow(false);
            setSpeechShow(false);

            switch(category){
              case "MOTOR":
                setMotorShow(true);
                break;
              case "FACE":
                setFaceShow(true);
                break;
              case "SPEECH":
                setSpeechShow(true);
                break;
              default:
                break;
            }
          }
        }>
          <p>EXPLAIN MY SCORE</p>
        </button>
      </RightAlignedButtonDiv>
      <ArrowDiv>
        <LeftArrow onClick={leftClick} />
        <RightArrow onClick={rightClick} />
      </ArrowDiv>
    </SubScoreDiv>
  );
};

export default SubScore;
