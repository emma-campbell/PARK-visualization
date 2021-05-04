import styled from "styled-components";


const ModalDiv = styled.div`
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

const ModalImage = (props) => {



  return (
    <ModalDiv>
      <img src={props.img} alt="PARKTest" width="60%" height="auto"/>
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

export default ModalImage;
