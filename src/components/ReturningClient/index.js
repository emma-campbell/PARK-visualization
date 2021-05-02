import { useState } from "react";
import { Link } from "react-router-dom";

// STYLED COMPONENTS
import styled from "styled-components";

// MODAL
import { Modal } from "@material-ui/core";
import ModalData from "../ModalData";

// GRAPH
import Graph from "../Graph";

// LOGO
import PARK from "../../images/PARK.png";

// COMPONENTS
import SubScore from "./SubScore";
import Confidence from "./Confidence";

const ReturningClientDiv = styled.div`
  height: 100vh;
`;

const LogoBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
  align-items: center;
  & img {
    padding: 0.5em;
    width: 4em;
    height: 4em;
  }

  & h1 {
    padding: 0;
    margin: 0;
  }
`;

const Content = styled.div`
  justify-content: space-between;
  height: 90vh;
  display: flex;
  padding: 2em;
`;

const SideBar = styled.div`
  padding-bottom: 1em;
  display: grid;
  grid-template-rows: 25vh 55vh;
  gap: 20px;
  width: 35%;
`;

// const FillerDiv = styled.div`
//   padding: 1em;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
//     rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
// `;

const ReturningClients = () => {

  const [modalShow, setModalShow] = useState(false);
  
  const categories = ["Jitter", "Shimmer", "Pitch"];
  const descriptions = ["lorem ipsum", "lorem ipsum", "lorem ipsum"];
  const scores = [45, 95, 70];
  const body = (
    <ModalData
      categories={categories}
      descriptions={descriptions}
      scores={scores}
    />
  );
  
  return (
    <ReturningClientDiv>
      <Modal
        open={modalShow}
        onClose={() => setModalShow(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <LogoBar>
        <Link to="/">
          <img src={PARK} alt="PARK" />
        </Link>
        <h1>Your results are in...</h1>
      </LogoBar>
      <Content>
        <SideBar>
          <Confidence score="1" confidence="78"/>
          <SubScore faceScore="2" speechScore="0" motorScore="1" setModalShow={setModalShow}/>
        </SideBar>
        <Graph/>
      </Content>
    </ReturningClientDiv>
  );
};

export default ReturningClients;
