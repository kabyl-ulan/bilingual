import React from "react";

import styled from "styled-components";

import Human1 from "../../assets/images/landingPage/Human1.svg";

import Human2 from "../../assets/images/landingPage/Human2.svg";

import Human3 from "../../assets/images/landingPage/Human3.svg";

import Human4 from "../../assets/images/landingPage/Human4.svg";

import Human5 from "../../assets/images/landingPage/Human5.svg";

import Human6 from "../../assets/images/landingPage/Human6.svg";

function OurTeam() {
    const Data = [
        {
            photo: Human1,
            name: "Alice Archie",
            status: "Founder Bilingual",
        },
        {
            photo: Human2,
            name: "Mia George",
            status: "Marketer",
        },
        {
            photo: Human3,
            name: "Oscar Ryan",
            status: "Developer",
        },
        {
            photo: Human4,
            name: "Jack William",
            status: "UX/UI Designer",
        },
        {
            photo: Human5,
            name: "Rose Thomas",
            status: "Chief Editor",
        },
        {
            photo: Human6,
            name: "Albert Stanley",
            status: "Chief Editor",
        },
    ];
    return (
        <div>
            <StyledContainerMain>
                <StyledTittle>Our Team</StyledTittle>
                <StyledPhotoBox>
                    {Data.map((item) => {
                        return (
                            <StyledContainer key={item.name}>
                                <StyledImage src={item.photo} />
                                <StyledTittleName>{item.name}</StyledTittleName>
                                <StyledTittleStatus>{item.status}</StyledTittleStatus>
                            </StyledContainer>
                        );
                    })}
                </StyledPhotoBox>
            </StyledContainerMain>
        </div>
    );
}
export default OurTeam;

const StyledContainerMain = styled.div`
    width: 1232px;
    height: 335px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const StyledTittle = styled.h1`
    width: 200px;
    height: 52px;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    color: #3752b4;
`;
const StyledPhotoBox = styled.div`
    width: 1232px;
    height: 235px;
    display: flex;
    justify-content: space-between;
`;
const StyledContainer = styled.div`
    width: 180px;
    height: 135px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const StyledImage = styled.img`
    width: 180px;
    height: 180px;
`;
const StyledTittleName = styled.div`
    width: 110px;
    height: 21px;
    text-align: center;
    color: #3a10e5;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
`;
const StyledTittleStatus = styled.div`
    width: 170px;
    height: 18px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
`;
