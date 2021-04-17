import styled from "styled-components"

import LandingImage from "../../images/landing-bg.jpg"

const HeroDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    padding-top: 0;
    margin-top: 0;
    background-image: url(${LandingImage});
    background-size: cover;
    height: 100vh;

    & h1, h2 {
        padding: 0;
        margin: 0;
        color: #ffffff;
    }
`

const TitleDiv = styled.div`
    text-align: left;
    padding-left: 4em;

    & h1 {
        font-size: 4em;
    }

    & h2 {
        font-size: 2em;
    }
`

const Hero = () => {
    return (
        <HeroDiv>
            <TitleDiv>
                <h1>PARKTest.net</h1>
                <h2>On-Demand Parkinson's Evaluation</h2>
            </TitleDiv>
        </HeroDiv>
    )
}


export default Hero