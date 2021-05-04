import React from "react";
import { Modal } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

// RECHART
import {
  CartesianGrid,
  XAxis,
  Cell,
  Bar,
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line
} from "recharts";

// LOGO
import PARK from "../../images/PARK.png";

// Sub-Components
import Confidence from "./Confidence";
import SubScore from "./SubScore";
import ShareResults from "./ShareResults";
import ModalData from "../ModalData";

const NewClientDiv = styled.div`
  height: 110vh;
  display: flex;
  flex-direction: column;
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
  grid-template-rows: 55vh 25vh;
  gap: 20px;
  width: 45%;
`;

const Data = styled.div`
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
`;

const Scores = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1em;
`;

const Graph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const NewClient = () => {
  const [motorModalShow, setMotorModalShow] = React.useState(false);
  const [faceModalShow, setFaceModalShow] = React.useState(false);
  const [speechModalShow, setSpeechModalShow] = React.useState(false);

  const populationData = [
    {
      "name": "13th Percentile",
      "here": "you are here",
      "not_here": "",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "23rd Percentile",
      "here": "you are here",
      "not_here": "",
      "uv": 3000,
      "pv": 4800,
      "amt": 2210
    },
    {
      "name": "37th Percentile",
      "here": "you are here",
      "not_here": "",
      "uv": 2000,
      "pv": 7200,
      "amt": 2290
    },
    {
      "name": "50th Percentile",
      "here": "you are here",
      "not_here": "",
      "uv": 2780,
      "pv": 12000,
      "amt": 2000
    },
    {
      "name": "63rd Percentile",
      "here": "you are here",
      "not_here": "",
      "uv": 1890,
      "pv": 7000,
      "amt": 2181
    },
    {
      "name": "76th Percentile",
      "here": "you are here",
      "not_here": "",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "90th+ Percentile",
      "here": "you are here",
      "not_here": "",
      "uv": 3490,
      "pv": 1300,
      "amt": 2100
    }
  ]

  const speech_categories = ["Jitter", "Shimmer", "Pitch"];
  const face_categories = ["Rigidity", "Stiffness", "Slowness"];
  const motor_categories = ["Tremor", "Stiffness", "Balance"];
  const speech_descriptions = ["Aggregate of complex features related to vocal jitter", "Aggregate of complex features related to vocal shimmer", "Aggregate of complex features related to vocal pitch"];
  const motor_descriptions = ["Aggregate of complex features related to facial muscle rigidity", "Aggregate of complex features related to facial muscle stiffness", "Aggregate of complex features related to facial reaction time"];
  const face_descriptions = ["Aggregate of complex features related to muscular tremor", "Aggregate of complex features related to muscular stiffness", "Aggregate of complex features related to muscular balance"];


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
    <NewClientDiv>
      <Modal
        open={motorModalShow}
        onClose={() => setMotorModalShow(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body(motor_categories, motor_descriptions, generate_random_score())}
      </Modal>

      <Modal
        open={faceModalShow}
        onClose={() => setFaceModalShow(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body(face_categories, face_descriptions, generate_random_score())}
      </Modal>

      <Modal
        open={speechModalShow}
        onClose={() => setSpeechModalShow(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body(speech_categories, speech_descriptions, generate_random_score())}
      </Modal>

      <LogoBar>
        <Link to="/">
          <img src={PARK} alt="PARK" />
        </Link>
        <h1>Your results are in...</h1>
      </LogoBar>
      <Content>
        <SideBar>
          <Confidence score="1" confidence="78" />
          <ShareResults />
        </SideBar>
        <Data>
          <Scores>
            <SubScore
              faceScore="1"
              speechScore="0"
              motorScore="1"
              setMotorShow={setMotorModalShow}
              setSpeechShow={setMotorModalShow}
              setFaceShow={setMotorModalShow}
            />
          </Scores>
          <Graph>
            <ResponsiveContainer width="95%" height="95%">
              <ComposedChart width={730} height={250} data={populationData} fontFamily={"Hind, sans-serif"}>
                <XAxis dataKey="name" />
                <CartesianGrid stroke="#f5f5f5" />
                
                <Area type="monotone" dataKey="pv" fill="#C0BBBA" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#003972">
                { populationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? "#0072F0" : "#003972"} />
                    ))
                }
                </Bar>
                <Line type="monotone" dataKey="pv" stroke="#0072F0" />
              </ComposedChart>
            </ResponsiveContainer>
          </Graph>
        </Data>
      </Content>
    </NewClientDiv>
  );
};

export default NewClient;


/*

<BarChart  data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip wrapperStyle={{ fontFamily: "Hind, san-serif" }} />
                <Legend wrapperStyle={{ fontFamily: "Hind, san-serif" }} />
                <Bar dataKey="pv" fill="#003972" />
                <Bar dataKey="uv" fill="#003972" />
              </BarChart>


*/