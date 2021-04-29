import styled from "styled-components";

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Modal = ({ categories, show }) => {
  if (!show) {
    return null;
  }

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

export default Modal;
