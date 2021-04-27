import styled from "styled-components";

import ProgressBar from "../ProgressBar";

const FaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 30vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    & h1 {
      padding-top: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  
    & h2 {
      margin-bottom: 5px;
    }
    
    & p {
      margin-top: 0;
      color: #878787;
    }
`;

const RightAlignedButtonDiv = styled.div`
  display: flex;
  padding-top: 2em;
  justify-content: flex-end;

  & button {
    padding: 1em;
    border: none;
    border-radius: 20px;
    background-color: #003972;
    & p {
      margin: 0;
      padding: 0;
      color: #ffffff;
    }
  }

  & button:hover {
    background-color: #002D5A;
  }
`

const Face = ({score}) => {
  var percent;

  if (score === "4") {
    percent = 100;
  } else if (score === "3") {
    percent = 75;
  } else if (score === "2") {
    percent = 50;
  } else if (score === "1") {
    percent = 25;
  } else {
    percent = 0;
  }

  return (
    <FaceDiv>
      <h1>FACE</h1>
      <p>Task 3</p>
      <h2>SCORE | {score}</h2>
      <ProgressBar completed={percent}/>
      <RightAlignedButtonDiv>
        <button><p>MORE INFO +</p></button>
      </RightAlignedButtonDiv>
    </FaceDiv>
  );
};

export default Face;
