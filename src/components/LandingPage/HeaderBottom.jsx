import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import PhotoCap from "../../assets/images/landingPage/Group 4264.png";

import PhotoBook from "../../assets/images/landingPage/Group 4265.png";

import PhotoHeader from "../../assets/images/landingPage/PhotoHeader.png";

import Header from "./Header";

function HeaderBottom() {
    return (
        <SHeaderBottom>
            <Header Choice="false" />
            <StyledHeaderBottom>
                <StyledHeaderContainerText>
                    <StyledHeaderLiderText>BILINGUAL</StyledHeaderLiderText>
                    <StyledHeaderText>менен кыргыз тилин билериңизди далилдеңиз</StyledHeaderText>
                    <StyledHeaderButton to="/home">БАШТОО</StyledHeaderButton>
                </StyledHeaderContainerText>
                <StyledHeaderImageBook src={PhotoBook} />
                <StyledHeaderImageCap src={PhotoCap} />
            </StyledHeaderBottom>
        </SHeaderBottom>
    );
}

const SHeaderBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fcd200;
    overflow: hidden;
`;

const StyledHeaderBottom = styled.div`
    width: 1510px;
    height: 878px;
    background: url(${PhotoHeader});
    position: relative;
    top: 168px;
    background-size: 1550px;
    background-repeat: no-repeat;
`;

const StyledHeaderContainerText = styled.div`
    width: 635px;
    height: 219px;
    position: relative;
    top: 90px;
    left: 80px;
`;
const StyledHeaderText = styled.h1`
    font-weight: 700;
    font-size: 60px;
    margin-bottom: 10px;
`;
const StyledHeaderLiderText = styled.h1`
    width: 295px;
    height: 75px;
    font-weight: 900;
    font-size: 60px;
    color: #c93d7d;
`;
const StyledHeaderButton = styled(Link)`
    width: 200px;
    height: 60px;
    margin-top: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-start-end-radius: 30px;
    border-start-start-radius: 30px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    background-color: #cb4080;
    box-shadow: inset 4px -5px 0px rgba(255, 204, 191, 0.68);
`;
const StyledHeaderImageBook = styled.img`
    width: 595px;
    height: 499px;
    position: relative;
    left: 765px;
`;

const StyledHeaderImageCap = styled.img`
    width: 236px;
    height: 243px;
    position: relative;
    top: -400px;
    left: 200px;
`;
export default HeaderBottom;
