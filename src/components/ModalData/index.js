import styled from "styled-components";

// import ProgressBar from "../ProgressBar";
import BidirectionalProgressBar from "../BidirectionalProgressBar";

const ModalDiv = styled.div`
  border-radius: 9px;
  margin-top: 15%;
  margin-left: 25%;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: white;
  width: 50%;
  height: 50%;

  & h2 {
    margin: 0;
    padding: 0;
  }

  & p {
    margin: 0;
    font-size: 14px;
    color: #999999;
  }
`;

const ProgressDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        <h1>{100-parseInt(scores[0])}%</h1>
        <BidirectionalProgressBar width="75" completed={scores[0] > 100 - scores[0] ? scores[0] : 100-scores[0]} direction={ 100 - scores[0] > scores[0]}/>
        <h1>{scores[0]}%</h1>
      </ProgressDiv>
      <h2>{categories[1]}</h2>
      <p>{descriptions[1]}</p>
      <ProgressDiv>
        <h1>{100-parseInt(scores[1])}%</h1>
        <BidirectionalProgressBar width="75" completed={scores[1] > 100 - scores[1] ? scores[1] : 100-scores[1]} direction={ 100 - scores[1] > scores[1]}/>
        <h1>{scores[1]}%</h1>
      </ProgressDiv>
      <h2>{categories[2]}</h2>
      <p>{descriptions[2]}</p>
      <ProgressDiv>
        <h1>{100-parseInt(scores[2])}%</h1>
        <BidirectionalProgressBar width="75" completed={scores[2] > 100 - scores[2] ? scores[2] : 100-scores[2]} direction={ 100 - scores[2] > scores[2]} />
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
