import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import AppContext from "../components/AppContext";

import FeedbackLayout from "../components/FeedbackLayout";

import PARK from "../images/PARK.png";

const TaskDescriptionDiv = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  & p {
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const TextDiv = styled.div`
  text-align: left;
  padding-left: 4em;
  padding-right: 4em;
  & h1 {
    font-size: 4em;
    padding-bottom: 0;
    margin-bottom: 0;
    margin-top: 0.25em;
  }

  & p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.25em;
  }
`;

const VideoDiv = styled.div`
  height: 60vh;
  width: 75%;
  padding-left: 4em;
  padding-right: 4em;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const styles = {
  button: {
    color: "#ffffff",
    border: "none",
    paddingTop: "1em",
    paddingBottom: "1em",
    paddingRight: "2em",
    paddingLeft: "2em",
    borderRadius: "40px",
    backgroundColor: "#003972",
  },
};

const task_description = [
  [
    "Quick Brown Fox",
    "Remain at rest while reciting this sentence: The quick brown fox jumps over the lazy dog. The dog wakes up and follows the fox into the forest but again the quick brown fox jumps over the lazy dog.",
  ],
  [
    "Finger Tapping",
    "Tap your index finger on your thumb 10 times as quickly and as big as possible. DO NOT count out loud. Do this task twice, once for each hand.",
  ],
  [
    "Facial Expression Mimicry I",
    "Please mimic the facial expression in the video.",
  ],
];

const Task_Tutorial = () => {
  const { videoNumber, setVideoNumber } = useContext(AppContext);
  let history = useHistory();

  const handleStartStudy = () => {
    let nextVideoNumber = videoNumber + 1;
    setVideoNumber(nextVideoNumber);
    console.log(videoNumber);
    history.push("/record");
  };

  if (videoNumber > 3) {
    history.push("/feedback/new-client");
  }

  return (
    <FeedbackLayout>
      <LogoBar>
        <img src={PARK} alt="PARKTest" />
      </LogoBar>
      <TaskDescriptionDiv>
        <TextDiv>
          <h1 style={{ alignSelf: "center" }}>
            {videoNumber < 4 ? `${task_description[videoNumber - 1][0]}` : null}
          </h1>
          <p style={{ alignSelf: "center", margin: "-20x" }}>
            {videoNumber < 4 ? `${task_description[videoNumber - 1][1]}` : null}
          </p>
        </TextDiv>
        <VideoDiv>
          <video id="video1" style={{height:"75%", width: "75%"}} controls="controls">
            <source
              src={`instructionVideos/Task${videoNumber}.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </VideoDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: "30px",
          }}
        >
          <Button style={styles.button} onClick={handleStartStudy}>
            <p>Start Task</p>
          </Button>
        </div>
      </TaskDescriptionDiv>
    </FeedbackLayout>
  );
};

export default Task_Tutorial;
