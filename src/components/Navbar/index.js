import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

import PARK from "../../images/PARK.png"

const Navigation = styled.div`
    display: flex;
    background-color: #F6F6F6;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;

    & img {
        padding: 0.5em;
        padding-left: 2em;
        width: 4em;
        height: 4em;
    }
`

const Links = styled.div`
    padding-right: 2em;
    width: 40%;
    display: flex;
    justify-content: space-between;

    & a {
        color: #8C8C8C;
        text-decoration: none;
    }

    & a:hover {
        color: #6F6F6F;
    }
`

const NavBar = () => {
    return (
        <Navigation>
            <Link to="/">
                <img src={PARK} alt="PARK"/>
            </Link>
            <Links>
                <NavLink to="/about">
                    <h3>ABOUT</h3>
                </NavLink>
                <NavLink to="/faq">
                    <h3>FAQ</h3>
                </NavLink>
                <NavLink to="/sign-up">
                    <h3>SIGN UP</h3>
                </NavLink>
                <NavLink to="/log-in">
                    <h3>LOG IN</h3>
                </NavLink>
            </Links>
        </Navigation>
    )
}

export default NavBar