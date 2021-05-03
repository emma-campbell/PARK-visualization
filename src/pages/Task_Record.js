import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const videoType = 'video/webm';

const styles = { 
    Button: {
      color: "#ffffff",
      border: "none",
      borderRadius: "40px",
      backgroundColor: "#003972",
    }
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
        const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
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
        this.mediaRecorder.ondataavailable = e => {
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
        this.setState({recording: true});
      }
      
      stopStream() {
        var videoEl = document.getElementById('webcam');
        // now get the steam 
        const stream = videoEl.srcObject;
        // now get all tracks
        let tracks = stream.getTracks();
        // now close each track by having forEach loop
        tracks.forEach(function(track) {
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
        this.setState({recording: false});
        // save the video to memory
        this.stopStream();
        h.push('/task');

      }

      deleteVideo(videoURL) {
        // filter out current videoURL from the list of saved videos
        const videos = this.state.videos.filter(v => v !== videoURL);
        this.setState({videos});
      }
    
      render() {
        const {recording, videos} = this.state;
        const { history } = this.props;

        return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className="camera" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '-60px'}}>
            <video
              style={{width: 700, height: 700}}
              id="webcam"
              ref={v => {
                this.video = v;
              }}>
              Video stream not available.
            </video>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBottom: '30px'}}>
          {!recording &&  <Button style={styles.Button} onClick={e => this.startRecording(e)}>Record</Button>}
          {recording &&  <Button style={styles.Button} onClick={e => this.stopRecording(e, history)}>Stop</Button>}
         </div>
        </div>
        );
      }
}
  
export default withRouter(Task_Record);
