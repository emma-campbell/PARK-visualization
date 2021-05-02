import styled from "styled-components";

import ProgressBar from "../ProgressBar";

const ModalDiv = styled.div`
  border-radius: 9px;
  margin-top: 15%;
  margin-left: 20%;
  padding-left: 4em;
  padding-right: 4em;
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: white;
  width: 50%;
  height: 55%;

  & h2 {
    margin: 0;
    padding: 0;
  }

  & p {
    margin: 0;
  }
`;

const ProgressDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    padding-left: 1em;
  }
`;

const Disclaimer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  & p {
    padding-top: 1em;
    color: #c4c4c4;
  }
`;

const ModalData = ({ categories, descriptions, scores }) => {
  return (
    <ModalDiv>
      <h2>{categories[0]}</h2>
      <p>{descriptions[0]}</p>
      <ProgressDiv>
        <ProgressBar completed={scores[0]} />
        <h1>{scores[0]}%</h1>
      </ProgressDiv>
      <h2>{categories[1]}</h2>
      <p>{descriptions[1]}</p>
      <ProgressDiv>
        <ProgressBar completed={scores[1]} />
        <h1>{scores[1]}%</h1>
      </ProgressDiv>
      <h2>{categories[2]}</h2>
      <p>{descriptions[2]}</p>
      <ProgressDiv>
        <ProgressBar completed={scores[2]} />
        <h1>{scores[2]}%</h1>
      </ProgressDiv>
      <Disclaimer>
        <p>
          The symptoms measured above are meant to be analyzed by a medical
          professional. If you have questions or concerns, please contact a
          neurologist.
        </p>
      </Disclaimer>
    </ModalDiv>
  );
};

export default ModalData;
