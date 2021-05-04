import styled from "styled-components";


const ModalDiv = styled.div`
  display: flex;
  border-radius: 9px;
  margin-top: 5%;
  margin-left: 20%;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: white;
  width: 50%;
  height: 75%;
  justify-content: center;
  align-items: center;
  text-align: center;

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


const ModalImage = (props) => {



  return (
    <ModalDiv>
      <img src={props.img} alt="PARKTest" width="60%" height="auto"/>
    </ModalDiv>
  );
};

export default ModalImage;
