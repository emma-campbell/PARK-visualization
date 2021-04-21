import styled from "styled-components";

import NavBar from "../Navbar";
import Footer from "../Footer";


const BodyWrapper = styled.body`
    height: 110vh;
`

const FooterWrapper = styled.footer`
    width: 100%;
`

const Layout = ({children}) => {
    return (
        <BodyWrapper>
            <header>
                <NavBar/>
            </header>
            {children}
            <FooterWrapper>
                <Footer/>
            </FooterWrapper>
        </BodyWrapper>
    )
}

export default Layout