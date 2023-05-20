import React from "react";

import { Container } from "@mui/material";

import styled from "styled-components";

const ContainerStyled = ({ children, maxWidth }) => {
    return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};

export default ContainerStyled;

const StyledContainer = styled(Container)`
    &.MuiContainer-root {
        padding: 0;
        margin: 0;
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0px 4px 39px -5px rgba(196, 196, 196, 0.6);
    }
    &.MuiContainer-maxWidthXl {
        max-width: 1130px;
    }
    &.MuiContainer-maxWidthMd {
        max-width: 900px;
    }
    & .MuiContainer-maxWidthLg {
        max-width: 1092px;
    }
    &.MuiContainer-maxWidthXs {
        max-width: 755px;
    }
    &.MuiContainer-maxWidthSm {
        max-width: 862px;
    }
`;
