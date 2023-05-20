import React from "react";

import ControlledAccordions from "components/ControlledAccordions";

import CountUp from "components/CountUp/CountUp";

import HeaderBottom from "components/LandingPage/HeaderBottom";

import PrimarySlider from "components/LandingPage/PrimarySlider";

import LandingPage from "components/LandingPage/SliderPage";

import Way from "components/LandingPage/Way";

import OurTeam from "components/OurTeam/OurTeam";

import UseFullVideo from "components/UseFullVideo/UseFullVideo";

import styled from "styled-components";

function HomePage() {
    return (
        <StyledDivCont>
            <header>
                <HeaderBottom />
            </header>
            <section>
                <CountUp />
                <OurTeam />
                <StyledSliderDiv>
                    <PrimarySlider />
                </StyledSliderDiv>
                <UseFullVideo />
                <Way />
                <LandingPage />
            </section>
            <StyledFooter>
                <ControlledAccordions />
            </StyledFooter>
        </StyledDivCont>
    );
}

export default HomePage;

const StyledDivCont = styled.div`
    width: 100%;
    background: #fef5e8;
    margin: 0 auto;
`;
const StyledSliderDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 200px;
`;
const StyledFooter = styled.footer`
    width: 100%;
    margin-top: 200px;
`;
