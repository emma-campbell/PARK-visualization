import styled from "styled-components";

const ShareDiv = styled.div`
  background-color: #003972;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const ShareResults = () => {
  return (
    <ShareDiv>
      <h2>Want to save your data?</h2>
      <button>
        <p>SIGN UP</p>
      </button>
      <button>
        <p>EMAIL RESULTS</p>
      </button>
    </ShareDiv>
  );
};

export default ShareResults;
