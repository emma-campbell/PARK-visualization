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

const ModalData = () => {
  const categories = ["Jitter", "Shimmer", "Pitch"];
  return (
    <ModalDiv>
      <h2>{categories[0]}</h2>
      <p>lorem ipsum</p>
      <h2>{categories[1]}</h2>
      <p>lorem ipsum</p>
      <h2>{categories[2]}</h2>
      <p>lorem ipsum</p>
    </ModalDiv>
  );
};

export default ModalData;