import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styled from "styled-components";

const CountUpScroll = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <MainDiv>
                <Div>
                    <h1>
                        {counterOn && <CountUp start={9900} end={10000} duration={3} delay={0} />}+
                    </h1>
                </Div>
                <Div>
                    <h1>
                        {counterOn && <CountUp start={180} end={200} duration={3} delay={0} />}+
                    </h1>
                </Div>
                <Div>
                    <h1>
                        <sup>$</sup>
                        {counterOn && (
                            <CountUp start={900800} end={1000000} duration={3} delay={0} />
                        )}
                    </h1>
                </Div>
            </MainDiv>
        </ScrollTrigger>
    );
};
export default CountUpScroll;

const MainDiv = styled.div`
    position: absolute;
    width: 1200px;
    display: flex;
    gap: 257px;
`;

const Div = styled.div`
    height: 88px;
    width: 195px;
    left: 53px;
    top: 148px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.94);
    border: 1.5px solid #3785d7;
    position: relative;
    font-family: "poppins-bold", sans-serif !important;
    color: #4c4c4c;
    display: flex;
    justify-content: center;
    align-items: center;
`;
