import styled from "styled-components";

const ModalDiv = styled.div`
  border-radius: 9px;
  margin-top: 15%;
  margin-left: 15%;
  padding-left: 6em;
  padding-right: 6em;
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: white;
  width: 50%;
  height: 50%;
`;

const ModalData = ({categories, descriptions}) => {
  return (
    <ModalDiv>
      <h2>{categories[0]}</h2>
      <p>{descriptions[0]}</p>
      <h2>{categories[1]}</h2>
      <p>{descriptions[1]}</p>
      <h2>{categories[2]}</h2>
      <p>{descriptions[2]}</p>
    </ModalDiv>
  );
};

export default ModalData;