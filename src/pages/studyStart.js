import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = { 
    Button: {
      marginTop: "2em",
      color: "#ffffff",
      paddingTop: "2em",
      paddingBottom: "2em",
      paddingRight: "3em",
      paddingLeft: "3em",
      border: "none",
      borderRadius: "40px",
      backgroundColor: "#003972",
    }
  };

export class startStudy extends Component {

    render() {
        return (
            <div className="container">
			<div className="row">
				<div className="col s10 offset-s1">
					<div className="center-align" style={{marginTop: "40px", marginBottom: "0px"}}>
						<h3><strong>Introduction</strong></h3>
					</div>

					<div style={{marginTop: "40px"}}>

						<h4>This study consists of 3 tasks. It should take about 5 minutes. Make sure you are using Google Chrome Browser!</h4>

						<p style={{marginTop: "20px", fontSize: "17px"}}>During the tasks, you will either read instructions or watch a video with instructions on how to perform the task. After, you will be asked to perform the task yourself. Click on <strong>Start Recording</strong> once you are ready and <strong>Stop Recording</strong> once you have finished performing the task.</p>

						<p style={{marginTop: "20px", fontSize: "17px"}}>Remain seated still and try to minimize background motion and noise.</p>

						<p style={{marginTop: "20px", fontSize: "17px"}}>Please make sure your computer is on a steady surface, and you are seated in front of it. You should be at least two feet away from the monitor. Please do not place it on your lap.</p>

						<p style={{marginTop: "20px", fontSize: "17px"}}>Once you start recording and you see yourself on the screen, <strong>make sure that you can see yourself from head to below your chest</strong>.</p>

						<p style={{marginTop: "20px", fontSize: "17px"}}>If using the computer mouse is difficult for you, you are able to advance through the test <strong>using your spacebar</strong>. Use the spacebar to begin the instructional video at the start of each task. Once the video is over, and you see yourself on the screen, you can press spacebar again to start recording. After completing the task, you can stop recording and advance to the next task by pressing spacebar.
						</p>

					</div>
					<div className="center-align" style={{marginTop: "50px"}}>
                        <Button style={styles.Button} component={Link} to={"/task"}> 
                            Begin Study
                        </Button>
					</div>
				</div>
			</div>
		</div>
        )
    }
}

export default (withStyles(styles)(startStudy));
