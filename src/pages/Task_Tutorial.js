import React, { Component, useContext } from 'react'
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import AppContext from '../components/AppContext';


const styles = { 
    button: {
      color: "#ffffff",
      border: "none",
      borderRadius: "40px",
      backgroundColor: "#003972",
    }
  };


const task_description = [["Quick Brown Fox", "Remain at rest while reciting this sentence: The quick brown fox jumps over the lazy dog. The dog wakes up and follows the fox into the forest but again the quick brown fox jumps over the lazy dog."],
                            ["Finger Tapping", "Tap your index finger on your thumb 10 times as quickly and as big as possible. DO NOT count out loud. Do this task twice, once for each hand."],
                            ["Facial Expression Mimicry I", "Please mimic the facial expression in the video."]]




const Task_Tutorial = () => {

  const {videoNumber, setVideoNumber} = useContext(AppContext);
  let history = useHistory(); 

  const handleStartStudy = () => {
    let nextVideoNumber = videoNumber+1;
    setVideoNumber(nextVideoNumber); 
    console.log(videoNumber); 
    history.push('/record')
  }

  if(videoNumber > 3){
      history.push('/feedback/new-client');
  }
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2 style={{alignSelf: 'center'}}>
                    {videoNumber < 4 ? `${task_description[videoNumber-1][0]}` : null}
                </h2>
                <h3 style={{alignSelf: 'center', margin: '-20x'}}>
                    {videoNumber < 4 ? `${task_description[videoNumber-1][1]}` : null}
                </h3>
                
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '30px'}}>
                <video id="video1" style={{width:"60%", height: "50%"}} controls="controls">
					<source src={`instructionVideos/Task${videoNumber}.mp4`} type="video/mp4" />
						Your browser does not support the video tag.
				</video>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBottom: '30px'}}>
            <Button style={styles.button} onClick={handleStartStudy}>Start Task</Button>
           </div>
           </div>
        );
};

export default Task_Tutorial;
