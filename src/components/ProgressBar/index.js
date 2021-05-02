import styled from "styled-components";

const ProgressBar = ({ completed }) => {

  const ProgressBarDiv = styled.div`
    height: 2em;
    width: 100%;
    background-color: #c4c4c4;
    border-radius: 16px;
  `;

  const FilledDiv = styled.div`
    height: 100%;
    background-color: #003972;
    width: ${completed}%;
    border-radius: inherit;
    text-align: right;
  `;


  return (
    <ProgressBarDiv>
      <FilledDiv></FilledDiv>
    </ProgressBarDiv>
  );
};

export default ProgressBar;
