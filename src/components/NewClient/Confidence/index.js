import styled from "styled-components";

import Score5 from "../../../images/Score5.png";
import Score4 from "../../../images/Score4.png";
import Score3 from "../../../images/Score3.png";
import Score2 from "../../../images/Score2.png";
import Score1 from "../../../images/Score1.png";

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
    margin-bottom: 0;
  }
`;

const FeedbackText = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;

  @media only screen and (min-width: 1200px) {
    & p {
      margin-top: 1em;
      font-size: 1.5em;
      color: #9a9a9a;
    }
  }

  @media only screen and (min-width : 1824px) {
    & p {
      margin: 0;
      font-size: 2em;
      color: #9a9a9a;
    }
  }
`;

const Confidence = ({ score, confidence }) => {
  var feedback = "";
  var img;
  if (score === "5") {
    feedback =
      "We recommend that you consult with a neurologist about your symptoms";
    img = Score5;
  } else if (score === "4") {
    feedback = "";
    img = Score4;
  } else if (score === "3") {
    feedback =
      "You are displaying mild symptoms. It may be time to consult with a neurologist.";
    img = Score3;
  } else if (score === "2") {
    feedback =
      "You are displaying minimal symptoms. Please continue to track your symptoms.";
    img = Score2;
  } else {
    feedback = "";
    img = Score1;
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
