import React from "react";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

import CountUpScroll from "./CountUpScroll";
import accessible from "./image/accessible.png";
import bonus from "./image/bonus.png";
import earth from "./image/earth.png";
import extensive from "./image/extensive.png";
import englishBook from "./image/Group.png";
import speech from "./image/speech.png";
import tutoring from "./image/tutoring.png";
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
                            Over 10,000 fee waivers for the Bilingual English Test are offered
                            annually.
                        </TextForAdvertisement>
                    </Commission>

                    <Commission>
                        <img src={earth} alt="" />
                        <TextForAdvertisement>
                            Students from over 200 countries and territories have benefitted.
                        </TextForAdvertisement>
                    </Commission>

                    <Commission>
                        <img src={bonus} alt="" />
                        <TextForAdvertisement>
                            Eligible students can take the test with absolutely zero cost to them.
                        </TextForAdvertisement>
                    </Commission>
                </BoxForAdvertisement>

                <BoxForAdditionallyInfo>
                    <Box>
                        <TitleForAdditionallyInfo>
                            Unparalleled user experience
                        </TitleForAdditionallyInfo>
                        <TextForAdditionallyInfo>
                            The most effective way to perfect a language is by immersing yourself in
                            it. Rosetta Stone for Enterprise delivers an effective end-to-end
                            experience, founded on a wealth of carefully structured content. Each
                            learner has the opportunity to balance independent study with optional
                            online tutoring in a way that fits their schedule and language learning
                            goals.
                        </TextForAdditionallyInfo>
                        <UsefulInform>
                            <NavForUsefulInform>
                                <img src={accessible} alt="" />
                                <Typography>Accessible anytime, anywhere</Typography>
                            </NavForUsefulInform>
                            <NavForUsefulInform>
                                <img src={extensive} alt="" />
                                <Typography>Extensive business content</Typography>
                            </NavForUsefulInform>

                            <NavForUsefulInform>
                                <img src={speech} alt="" />
                                <Typography>Leading speech recognition</Typography>
                            </NavForUsefulInform>
                            <NavForUsefulInform>
                                <img src={tutoring} alt="" />
                                <Typography>Unlimited live tutoring</Typography>
                            </NavForUsefulInform>
                        </UsefulInform>
                    </Box>

                    <Img>
                        <img src={englishBook} alt="" />
                    </Img>
                </BoxForAdditionallyInfo>
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
const Img = styled.div`
    margin-left: 100px;
    margin-top: 33px;
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
const BoxForAdditionallyInfo = styled.div`
    height: 437px;
    width: 1206px;
    margin-top: 266px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;
const TitleForAdditionallyInfo = styled.h1`
    width: 340px;
    left: 81px;
    font-family: "Gilroy-Bold", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #3752b4;
    text-align: left;
`;
const TextForAdditionallyInfo = styled.p`
    text-align-last: left;
    width: 600px;
    height: 120px;
    text-align: justify;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 34px;
    color: #23212a;
`;
const UsefulInform = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    width: 530px;
    font-family: "Poppins" sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`;
const NavForUsefulInform = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 36px;
    margin-top: 53px;
    width: 230.12px;
    height: 50px;
    text-align: left;
    text-align-last: left;
`;
