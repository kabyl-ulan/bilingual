import React from "react";

import { Container } from "@mui/material";
import styled from "styled-components";

import CountUpScroll from "./CountUpScroll";
import bonus from "./image/bonus.png";
import earth from "./image/earth.png";
import vector from "./image/vector.png";

const CountUp = () => {
    return (
        <MainBox>
            <Container>
                <ByCountUpScroll>
                    <CountUpScroll />
                </ByCountUpScroll>
                <BoxForAdvertisement>
                    <Commission>
                        <img src={vector} alt="" />
                        <TextForAdvertisement>
                            Келечекте 10,000 ден ашык колдонуучу колдоно алат.
                        </TextForAdvertisement>
                    </Commission>

                    <Commission>
                        <img src={earth} alt="" />
                        <TextForAdvertisement>
                            200дөн ашуун өлкөдөн келген студенттер пайда көрөт.
                        </TextForAdvertisement>
                    </Commission>

                    <Commission>
                        <img src={bonus} alt="" />
                        <TextForAdvertisement>
                            Талапка жооп берген студенттер тестти бекер тапшыра алышат.
                        </TextForAdvertisement>
                    </Commission>
                </BoxForAdvertisement>
            </Container>
        </MainBox>
    );
};

export default CountUp;
const ByCountUpScroll = styled.div`
    background: rgba(255, 255, 255, 0.94);
`;
const MainBox = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 200px;
`;
const BoxForAdvertisement = styled.div`
    width: 1203px;
    height: 248px;
    display: flex;
    gap: 150px;
`;
const Commission = styled.div`
    height: 248px;
    margin-top: 105px;
    font-family: "poppins-bold", sans-serif !important;
`;

const TextForAdvertisement = styled.p`
    width: 302px;
    height: 48px;
    font-family: "Poppins" sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-top: 25px;
    color: #23212a;
`;
