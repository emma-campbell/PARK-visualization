import styled from "styled-components";

import Footer from "../Footer";

const BodyWrapper = styled.div``;

const FooterWrapper = styled.div`
  width: 100%;
`;

const FeedbackLayout = ({ children }) => {
  return (
    <BodyWrapper>
      {children}
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </BodyWrapper>
  );
};

export default FeedbackLayout;
