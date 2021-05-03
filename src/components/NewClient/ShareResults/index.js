import styled from "styled-components";

const ShareDiv = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  background-color: #003972;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  height: 25vh;

  & h2 {
    margin: 0;
    padding-bottom: 0.25em;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  & button {
    margin: 1em;
    padding: 0;
    background-color: #ffffff;
    border: none;
    border-radius: 30px;
    & p {
      padding: 0;
      margin: 0;
      font-size: 2em;
    }
  }
  & button:hover {
    background-color: #D7D7D7;
  }

  @media only screen and (min-width: 500px) and (max-width: 1366px) {
    & button {
      padding-top: 1em;
      padding-bottom: 1em;
    }  
  }  
`;

const ShareResults = () => {
  return (
    <ShareDiv>
      <h2>Want to save your data?</h2>
      <Buttons>
        <button>
          <p>SIGN UP</p>
        </button>
        <button>
          <p>EMAIL RESULTS</p>
        </button>
      </Buttons>
    </ShareDiv>
  );
};

export default ShareResults;
