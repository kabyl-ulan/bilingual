import React from "react";

import { East, KeyboardBackspace } from "@mui/icons-material";
import Slider from "react-slick";
import styled, { css } from "styled-components";

const CustomSlider = ({ settings, children, bottomArrows }) => {
    const slider = React.useRef(null);
    const isShow = children.length > settings.slidesToShow;
    return (
        <>
            <SliderStyled gap={settings.gap} bottomArrows={bottomArrows} ref={slider} {...settings}>
                {children}
            </SliderStyled>
            {isShow ? (
                <>
                    <ArrowPrev
                        childrens={children}
                        className={bottomArrows ? "bottom_arrow" : ""}
                        onClick={() => slider?.current?.slickPrev()}>
                        <KeyboardBackspace />
                    </ArrowPrev>
                    <ArrowNext
                        childrens={children}
                        className={bottomArrows ? "bottom_arrow" : ""}
                        onClick={() => slider?.current?.slickNext()}>
                        <East />
                    </ArrowNext>
                </>
            ) : (
                ""
            )}
        </>
    );
};

const SliderStyled = styled(Slider)`
    .slick-dots {
        bottom: -44px;
    }

    .slick-slide > div {
        margin: 0 ${(props) => props.gap}px;
    }

    ${(props) => {
        return (
            props.bottomArrows &&
            css`
                .slick-dots {
                    bottom: -95px !important;
                }
            `
        );
    }}

    .slick-dots li {
        margin: 0 10px;
    }

    .slick-dots li,
    .slick-dots li button {
        width: auto;
        padding: 0;
    }

    .slick-dots li button:before {
        position: absolute;
        content: "";
        background: rgba(58, 16, 229, 0.2);
        opacity: 1;
        width: 6px;
        height: 16px;
        transition: all 0.3s ease;
        border-radius: 20px;
    }
    .slick-dots li.slick-active :before {
        transform: translateY(-15px);
        height: 30px;
        background: rgba(58, 16, 229, 1);
    }
`;

const ArrowNext = styled.button`
    ${(props) => {
        return css`
            position: absolute;
            border: 1px solid #3a10e5;
            right: -600px;
            top: calc(50% - 30px);
            background: transparent;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: rgba(58, 16, 229, 1);

            :hover {
                background-color: blue;
                color: white;
            }

            &.bottom_arrow {
                top: inherit;
                bottom: -104px !important;
                right: calc(50% - ${Math.trunc(props.childrens.length / 3 + 1) * 25 + 60}px);
            }
        `;
    }}
`;
const ArrowPrev = styled.button`
    ${(props) => {
        return css`
            position: absolute;
            left: -60px;
            top: calc(50% - 30px);
            border: 1px solid #3a10e5;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: transparent;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(58, 16, 229, 1);
            cursor: pointer;

            :hover {
                background-color: blue;
                color: white;
            }

            &.bottom_arrow {
                bottom: -104px !important;
                top: inherit;
                left: calc(50% - ${Math.trunc(props.childrens.length / 3 + 1) * 25 + 60}px);
            }
        `;
    }}
`;

export default CustomSlider;
