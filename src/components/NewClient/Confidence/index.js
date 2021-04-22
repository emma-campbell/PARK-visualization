import styled from "styled-components";

const ConfidenceDiv = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Confidence = () => {
  return (
    <ConfidenceDiv>
      <h3>CONFIDENCE |</h3>
    </ConfidenceDiv>
  );
};

export default Confidence;
