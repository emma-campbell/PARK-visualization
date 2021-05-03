import styled from "styled-components";

// ACCORDION
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FAQDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #003972;
  color: #ffffff;
`;

const TextDiv = styled.div`
  text-align: left;
  padding-left: 4em;
  & h1 {
    font-size: 3.75em;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  & p {
    margin-top: 0;
    font-size: 1.25em;
  }
`;

const AccordionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Accordions = styled.div`
  display: block;
  width: 70%;
`;

const FAQ = () => {
  return (
    <FAQDiv>
      <TextDiv>
        <h1>FAQ</h1>
        <p>Click on the question below to view the answer.</p>
      </TextDiv>
      <AccordionDiv>
        <Accordions>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <p>
                Who do I contact if I have a question not answered on the site?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>Please send an email to urparkstudy@gmail.com</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <p>Why am I not showing up on the screen for recording?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                After you click "I AGREE" on the first page, you will be taken
                to an instruction page and then to the first task page. There,
                you will be asked for permission to record your audio and video
                through your webcam. Please select "Allow" so that both your
                audio and video can be recorded.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <p>How do I know that the recordings were successful?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                When you click the button "Stop Recording" and move on to the
                next page, rest assured that your video was successfully
                recorded in our secured servers.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <p>Where is the consent form?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>You can find it by clicking <a href="https://parktest.net/img/EConsent_v7_June6th_2019.pdf">HERE</a>!</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <p>Who will have access to my data?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Only the researchers involved in this study will have access to
                your data which is stored in secured servers, although the
                general analysis will be later made public so that everyone
                knows our progress with the research in general.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <p>
                I don't have Parkison's Disease. Can I still participate in
                PARK?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Definitely! We need both people with Parkinson's and without
                Parkinson's to participate, so that we can better train our AI
                models to be able to recognize and predict the disease in any
                person.
              </p>
            </AccordionDetails>
          </Accordion>
        </Accordions>
      </AccordionDiv>
    </FAQDiv>
  );
};

export default FAQ;
