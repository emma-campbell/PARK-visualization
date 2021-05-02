import styled from "styled-components";

// IMAGES
import Score4 from "../../../images/Score4.png";
import Score3 from "../../../images/Score3.png";
import Score2 from "../../../images/Score2.png";
import Score1 from "../../../images/Score1.png";
import Score0 from "../../../images/Score0.png";

const ConfidenceDiv = styled.div`
  padding: 1em;
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
    padding-top: 0.5em;
    font-size: 1.75em;
  }

  @media only screen and (min-width: 1030px) and (max-width: 1366px) {
    & h1 {
      font-size: 2em;
    }
  }
`;

const Confidence = ({ score, confidence }) => {
  var img;

  if (score === "4") {
    img = Score4;
  } else if (score === "3") {
    img = Score3;
  } else if (score === "2") {
    img = Score2;
  } else if (score === "1") {
    img = Score1;
  } else {
    img = Score0;
  }

  return (
    <ConfidenceDiv> 
        <img src={img} alt="score" />
        <h1>CONFIDENCE | {confidence}%</h1>
    </ConfidenceDiv>
  );
};

export default Confidence;
