import React from "react";

import { Button } from "@mui/material";
import styled, { css } from "styled-components";

const ButtonUi = ({
    disabled,
    color,
    variant,
    maxwidth,
    fontSize,
    maxheight,
    icon,
    children,
    onClick,
    text,
}) => {
    return (
        <ButtonMain
            disabled={disabled}
            onClick={onClick}
            maxwidth={maxwidth}
            fontSize={fontSize}
            maxheight={maxheight}
            variant={variant}
            color={color}>
            {icon && <ButtonSpan>{icon}</ButtonSpan>}
            {text}
            {children}
        </ButtonMain>
    );
};

const ButtonMain = styled(Button)`
    ${({ maxwidth, maxheight = "42px", fontSize = "14" }) => {
        return css`
            display: flex;
            align-items: center;
            ${maxwidth && `max-width: ${maxwidth}; width: 100%;`}
            height: ${maxheight};
            font-size: 14px;
            letter-spacing: 0.02em !important;
            font-size: ${fontSize}px !important;
            &.css-f3g22s-MuiButtonBase-root-MuiButton-root,
            &.css-sghohy-MuiButtonBase-root-MuiButton-root {
                background-color: #3a10e5;
                box-shadow: none;
                :hover {
                    background-color: rgba(58, 16, 229, 0.9);
                    box-shadow: none;
                }
                :active {
                    background: #3007da;
                }
            }
            &.css-jzc2lf-MuiButtonBase-root-MuiButton-root,
            &.css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
                border: 2px solid #3a10e5 !important;
                font-size: 14px;
                letter-spacing: 0.02em !important;
                color: #3a10e5;
                :hover {
                    background-color: #3a10e5 !important;
                    color: #fff;
                }
                &:active {
                    background: #3007da !important;
                }
            }
            &.css-1at7div-MuiButtonBase-root-MuiButton-root,
            &.css-sxix9q-MuiButtonBase-root-MuiButton-root {
                border: 2px solid #2ab930 !important;
                &:hover {
                    background: #2ab930;
                    color: #fff;
                }
                &:active {
                    background: #08af10;
                }
            }
            .MuiTouchRipple-root {
                display: none;
            }
            &.css-rlclm-MuiButtonBase-root-MuiButton-root,
            &.css-ke5b6m-MuiButtonBase-root-MuiButton-root {
                background: #2ab930;
                box-shadow: none;
                &:hover {
                    background: #31cf38;
                    box-shadow: none;
                }
                &:active {
                    background: #08af10;
                    box-shadow: none;
                }
            }
            // --------------------- DISABLED --------------------
            &.Mui-disabled {
                background: rgba(196, 196, 196, 0.2) !important;
                border: 2px solid #c4c4c4 !important;
                box-shadow: 0px 1px 2px rgba(196, 196, 196, 0.2),
                    0px 1px 2px rgba(196, 196, 196, 0.2);
                border-radius: 8px;
                padding: 12px 15px !important;
            }
        `;
    }}
`;

const ButtonSpan = styled.span`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;

export default ButtonUi;
