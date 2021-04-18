import styled from "styled-components";

const FooterDiv = styled.div`
  padding: 2em;
  display: flex;
  background-color: #333333;
  color: #ffffff;
  bottom: -25em;
`;

const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  & h2 {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  & p {
    padding: 0;
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <InformationDiv>
        <h2>Center for Health and Technology</h2>
        <p>Saunders Research Building</p>
        <p>256 Crittenen Blvd.</p>
        <p>Rochester, NY 14642</p>
      </InformationDiv>
    </FooterDiv>
  );
};

export default Footer;
