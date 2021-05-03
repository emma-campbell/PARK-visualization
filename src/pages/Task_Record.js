import React, { Component } from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

import FeedbackLayout from "../components/FeedbackLayout";
import PARK from "../images/PARK.png";

const videoType = "video/webm";

const TaskRecordDiv = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;

  & p {
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const VideoDiv = styled.div`
  height: 60vh;
  padding-left: 4em;
  padding-right: 4em;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDiv = styled.div`
  padding-left: 4em;
  padding-right: 4em;
  padding-top: 1em;
  padding-bottom: 1em;
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
  Button: {
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

export class Task_Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      videos: [],
      stream: {},
      h: {},
    };
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    // show it to user
    this.setState(stream);
    this.video.srcObject = stream;
    this.video.play();
    // init recording
    this.mediaRecorder = new MediaRecorder(stream, {
      type: "video",
      mimeType: videoType,
    });
    // init data storage for video chunks
    this.chunks = [];
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    };
  }

  startRecording(e) {
    e.preventDefault();
    // wipe old data chunks
    this.chunks = [];
    // start recorder with 10ms buffer
    this.mediaRecorder.start(10);
    // say that we're recording
    this.setState({ recording: true });
  }

  stopStream() {
    var videoEl = document.getElementById("webcam");
    // now get the steam
    const stream = videoEl.srcObject;
    // now get all tracks
    let tracks = stream.getTracks();
    // now close each track by having forEach loop
    tracks.forEach(function (track) {
      // stopping every track
      track.stop();
    });
    // assign null to srcObject of video
  }

  stopRecording(e, h) {
    e.preventDefault();
    // stop the recorder
    this.mediaRecorder.stop();
    // say that we're not recording
    this.setState({ recording: false });
    // save the video to memory
    this.stopStream();
    h.push("/task");
  }

  deleteVideo(videoURL) {
    // filter out current videoURL from the list of saved videos
    const videos = this.state.videos.filter((v) => v !== videoURL);
    this.setState({ videos });
  }

  render() {
    const { recording } = this.state;
    const { history } = this.props;

    return (
      <FeedbackLayout>
        <LogoBar>
          <img src={PARK} alt="PARKTest" />
          <h1>Record your response...</h1>
        </LogoBar>
        <TaskRecordDiv>
          <VideoDiv>
            <video
              id="webcam"
              ref={(v) => {
                this.video = v;
              }}
            >
              Video stream not available.
            </video>
          </VideoDiv>
          <ButtonDiv>
            {!recording && (
              <Button
                style={styles.Button}
                onClick={(e) => this.startRecording(e)}
              >
                <p>Record</p>
              </Button>
            )}
            {recording && (
              <Button
                style={styles.Button}
                onClick={(e) => this.stopRecording(e, history)}
              >
                <p>Stop</p>
              </Button>
            )}
          </ButtonDiv>
        </TaskRecordDiv>
      </FeedbackLayout>
    );
  }
}

export default withRouter(Task_Record);
