import styled from "styled-components"

import NavBar from "../components/Navbar"
import Hero from "../components/Hero";
import Sponsors from "../components/Hero/Sponsors";
import Footer from "../components/Footer"

const HomeDiv = styled.div`
  height: 100vh;
`

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: -30em;
`

const Home = () => {
  return (
    <HomeDiv>
      <NavBar/>
      <Hero />
      <Sponsors />
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </HomeDiv>
  );
};

export default Home;
