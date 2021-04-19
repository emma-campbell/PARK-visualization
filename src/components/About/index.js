import styled from "styled-components";

const AboutDiv = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
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
    display: flex;
    background-color: #C4C4C4;
`

const About = () => {
  return (
    <AboutDiv>
        <TextDiv>
            <h1>About</h1>
            <p>Watch this video for information on how to complete the study tasks.</p>
        </TextDiv>
        <VideoDiv>
            
        </VideoDiv>
    </AboutDiv>
  );
};

export default About;
