import React from "react";

import styled from "styled-components";

function PartnersItem({ id, playUrlPhoto, alt }) {
    return (
        <StyledDiv id={id}>
            <StyledImg src={playUrlPhoto} alt={alt} />
        </StyledDiv>
    );
}

export default PartnersItem;
const StyledDiv = styled.div`
    width: 255px;
    height: 126px;
    background: #ffffff;
    border: 1px solid #e4e4e4;
    border-radius: 20px;
    padding: 20px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;
`;
const StyledImg = styled.img`
    width: 175px;
    height: 86px;
    margin: 0 auto;
    text-align: center;
`;
