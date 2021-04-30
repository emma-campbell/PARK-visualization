import styled from "styled-components";

const ModalDiv = styled.div`
  margin-left: 25%;
  padding-left: 100px;
  background-color: white;
  width: 50%;
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