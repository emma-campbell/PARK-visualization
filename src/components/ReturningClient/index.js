import React from "react";
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

const ReturningClients = () => {
  
  const [motorModalShow, setMotorModalShow] = React.useState(false);
  const [faceModalShow, setFaceModalShow] = React.useState(false);
  const [speechModalShow, setSpeechModalShow] = React.useState(false);

  const speech_categories = ["Jitter", "Shimmer", "Pitch"];
  const face_categories = ["Rigidity", "Stiffness", "Slowness"];
  const motor_categories = ["Tremor", "Stiffness", "Balance"];
  const descriptions = ["lorem ipsum", "lorem ipsum", "lorem ipsum"];

  const generate_random_score = () => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const z = Math.floor(Math.random() * 100);
    return [x, y, z];
  };

  const body = (categories, descriptions, scores) => (
    <ModalData
      categories={categories}
      descriptions={descriptions}
      scores={scores}
    />
  );
  
  return (
    <ReturningClientDiv>
      <Modal
    open={motorModalShow}
    onClose={() => setMotorModalShow(false)}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body(motor_categories, descriptions, generate_random_score())}
  </Modal>

  <Modal
    open={faceModalShow}
    onClose={() => setFaceModalShow(false)}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body(face_categories, descriptions, generate_random_score())}
  </Modal>

  <Modal
    open={speechModalShow}
    onClose={() => setSpeechModalShow(false)}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body(speech_categories, descriptions, generate_random_score())}
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
          <SubScore faceScore="2" speechScore="0" motorScore="1" setMotorShow={setMotorModalShow}
              setSpeechShow={setMotorModalShow}
              setFaceShow={setMotorModalShow}/>
        </SideBar>
        <Graph/>
      </Content>
    </ReturningClientDiv>
  );
};

export default ReturningClients;
