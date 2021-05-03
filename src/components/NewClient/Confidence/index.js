import styled from "styled-components";

import Score4 from "../../../images/Score4.png";
import Score3 from "../../../images/Score3.png";
import Score2 from "../../../images/Score2.png";
import Score1 from "../../../images/Score1.png";
import Score0 from "../../../images/Score0.png";

const ConfidenceDiv = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  & img {
    width: 65%;
  }

  & h1 {
    margin-top: 0;
    padding-top: 1em;
    font-size: 1.75em;
  }

  @media only screen and (min-width: 500px) and (max-width: 1366px) {
    & h1 {
      font-size: 2em;
    }
  }
`;

const FeedbackText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;

  & p {
    color: #9a9a9a;
    font-size: 1.5em;
  }
`;

const Confidence = ({ score, confidence }) => {
  var feedback = "";
  var img;
  if (score === "4") {
    feedback =
      "We recommend that you consult with a neurologist about your symptoms";
    img = Score4;
  } else if (score === "3") {
    feedback = "";
    img = Score3;
  } else if (score === "2") {
    feedback =
      "You are displaying mild symptoms. It may be time to consult with a neurologist.";
    img = Score2;
  } else if (score === "1") {
    feedback =
      "You are displaying minimal symptoms. Please continue to track your symptoms.";
    img = Score1;
  } else {
    feedback = "";
    img = Score0;
  }

  return (
    <ConfidenceDiv>
      <img src={img} alt={score} />
      <h1>CONFIDENCE | {confidence}%</h1>
      <FeedbackText>
        <p>{feedback}</p>
      </FeedbackText>
    </ConfidenceDiv>
  );
};

export default Confidence;
