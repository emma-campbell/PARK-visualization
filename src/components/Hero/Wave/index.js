import styled from "styled-components";

const StyledWave = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  bottom: -2px;
`;

const Wave = () => {
  return (
    <StyledWave>
      <svg xmlns="http://www.w3.org/2000/svg" stroke="none" viewBox="0 0 1440 320">
        <path
          fill="#003972"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,138.7C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </StyledWave>
  );
};

export default Wave