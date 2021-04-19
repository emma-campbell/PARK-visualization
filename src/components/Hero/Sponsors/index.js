import styled from "styled-components";

import URMC from "../../../images/urmc.png";
import ROCHCI from "../../../images/rochcilogo.png";
import CHET from "../../../images/chet.png";

import Wave from "../Wave";

const SponsorsDiv = styled.div`
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: -25em;
`;

const ImageDiv = styled.div`
  padding-left: 2em;
  padding-right: 2em;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  background-color: #003972;
  align-items: center;
  padding-bottom: 10em;

  & img {
    width: 300px;
  }
`;

const Sponsors = () => {
  return (
    <SponsorsDiv>
      <Wave/>
      <ImageDiv>
        <img src={URMC} alt="URMC" />
        <img src={CHET} alt="CHeT" />
        <img src={ROCHCI} alt="Roc HCI" />
      </ImageDiv>
    </SponsorsDiv>
  );
};

export default Sponsors;
