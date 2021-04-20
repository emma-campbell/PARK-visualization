import styled from "styled-components";

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
    font-size: 4em;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  & p {
    margin-top: 0;
    font-size: 1.5em;
  }
`;

const FAQ = () => {
  return (
    <FAQDiv>
        <TextDiv>
            <h1>FAQ</h1>
            <p>Click on the question below to view the answer.</p>
        </TextDiv>
        {/* INSERT ACCORDION */}
    </FAQDiv>
  );
};

export default FAQ;
