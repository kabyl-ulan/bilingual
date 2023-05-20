import React from "react";

import Marquee from "react-fast-marquee";

import styled from "styled-components";

import Play1 from "../../assets/images/play1.svg";

import Play2 from "../../assets/images/play2.svg";

import Play5 from "../../assets/images/play5.svg";

import Play6 from "../../assets/images/play6.svg";

import PartnersItem from "./PartnersItem";

function Autoplay() {
    const playerPhotos = [
        { id: "f1", alt: "play1", playUrlPhoto: Play1 },
        { id: "f2", alt: "play2", playUrlPhoto: Play2 },
        { id: "f3", alt: "play3", playUrlPhoto: Play5 },
        { id: "f4", alt: "play5", playUrlPhoto: Play6 },
        { id: "f5", alt: "play1", playUrlPhoto: Play1 },
        { id: "f6", alt: "play2", playUrlPhoto: Play2 },
        { id: "f7", alt: "play3", playUrlPhoto: Play5 },
    ];
    const settings = {
        speed: 150,
        gradient: false,
    };
    return (
        <SectionContainer>
            <div>
                <StyledTitle className="no-marg">Partners</StyledTitle>
            </div>
            <Marquee {...settings}>
                <StyledDiv>
                    {playerPhotos.map((item) => (
                        <PartnersItem key={item.id} {...item} />
                    ))}
                </StyledDiv>
            </Marquee>
        </SectionContainer>
    );
}

export default Autoplay;

const SectionContainer = styled.section``;

const StyledTitle = styled.h1`
    width: 157px;
    height: 48px;
    margin: 0 auto;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #3752b4;
    margin-bottom: 40px;
`;
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
