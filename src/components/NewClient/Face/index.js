import styled from "styled-components";

const FaceDiv = styled.div`
  padding: 1em;
  height: 30vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    & h2 {
        padding-top: 0;
        margin-top: 0;
    }
`;

const Face = () => {
    return (
        <FaceDiv>
            <h2>FACE</h2>
        </FaceDiv>
    )
};

export default Face;
