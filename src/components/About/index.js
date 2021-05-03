import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #003972;
  color: #ffffff;
`;

const TextDiv = styled.div` 
    text-align: left;
    padding-left: 4em;
    & h1 {
        font-size: 4em;
        padding-bottom: 0;
        margin-bottom: 0;
    }
    & p {
        margin-top: 0;
        font-size: 1.5em;
    }
`

const VideoDiv = styled.div`
  padding-left: 4em;
  padding-right: 4em;
  padding-bottom: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <AboutDiv>
        <TextDiv>
            <h1>About</h1>
            <p>Watch this video for information on how to complete the study tasks.</p>
        </TextDiv>
        <VideoDiv>
        <video id="video1" style={{width: "75%"}} controls="controls">
            <source
              src={`instructionVideos/Task0.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </VideoDiv>
    </AboutDiv>
  );
};

export default About;
