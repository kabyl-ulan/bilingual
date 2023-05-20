import React from "react";

import { ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";

export default function Loader() {
    return (
        <Main>
            <ThreeCircles
                height="100"
                width="100"
                color="#3A10E5"
                wrapperStyle={{}}
                wrapperClass=""
                visible
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </Main>
    );
}

const Main = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, 50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;
