import styled from "styled-components";

import NavBar from "../Navbar";
import Footer from "../Footer";


const BodyWrapper = styled.body`
    height: 110vh;
`

const Layout = ({children}) => {
    return (
        <BodyWrapper>
            <header>
                <NavBar/>
            </header>
            {children}
            <footer>
                <Footer/>
            </footer>
        </BodyWrapper>
    )
}

export default Layout