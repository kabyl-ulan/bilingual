import React from "react";

import mainBg from "assets/images/landingPage/way.svg";
import Container from "components/CustomUi/Container";
import Section from "components/CustomUi/Section";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "utils/constants/theme";

const Way = () => {
    return (
        <Section>
            <Main>
                <Container>
                    <Box>
                        <LearnMore to="/">Learn more</LearnMore>
                        <Wrapper>
                            <Row>
                                <BoxItem className="box__item-1">
                                    <Title>Expand your applicant pool</Title>
                                    <Description>
                                        Tap into a diverse pool of candidates from 210+ countries
                                        and territories of origin, who have taken the Bilingual
                                        English Test because of its radical accessibility.
                                    </Description>
                                </BoxItem>
                                <BoxItem className="box__item-2">
                                    <Title>Built on the latest assessment sciencee</Title>
                                    <Description>
                                        The Duolingo English Test is a computer adaptive test backed
                                        by rigorous research, with results that are highly
                                        correlated with other major assessments such as the TOEFL
                                        and the IELTS.{" "}
                                    </Description>
                                </BoxItem>
                                <BoxItem className="box__item-3">
                                    <Title>Innovative test security</Title>
                                    <Description>
                                        Industry-leading security protocols, individual test
                                        proctoring, and computer adaptive technology help prevent
                                        fraud and cheating and ensure results you can trust.
                                    </Description>
                                </BoxItem>
                                <BoxItem className="box__item-4">
                                    <Title>Convenient results dashboard</Title>
                                    <Description>
                                        Access candidates’ certificates, video interviews, and
                                        writing samples through a free and secure dashboard. Quickly
                                        and easily view applicant data with filtering tools.{" "}
                                    </Description>
                                </BoxItem>
                                <BoxItem className="box__item-5">
                                    <Title>Secure Design</Title>
                                    <Description>
                                        Adaptive test engine dynamically administers test questions
                                        from a database of hundreds of thousands of items. Someone
                                        would have to take the test more than 1,000 times to see a
                                        question repeated.
                                    </Description>
                                </BoxItem>
                            </Row>
                        </Wrapper>
                    </Box>
                </Container>
            </Main>
        </Section>
    );
};

const Main = styled.div`
    margin-top: 220px;
`;
const Box = styled.div`
    height: 1955px;
    background-image: url(${mainBg});
    background-position: center;
    background-repeat: no-repeat;
`;

const Wrapper = styled.div``;
const Row = styled.div`
    display: flex;
    flex-direction: column;
`;
const BoxItem = styled.div`
    max-width: 494px;

    &.box__item-1 {
        margin-top: 130px;
    }

    &.box__item-2 {
        margin-top: 315px;
        align-self: flex-end;
    }

    &.box__item-3 {
        margin-top: 205px;
    }

    &.box__item-4 {
        margin-top: 188px;
        align-self: flex-end;
    }

    &.box__item-5 {
        margin-top: 275px;
    }
`;
const Title = styled.div`
    color: ${Styles.colors.Secondary.Scd23};
    font-size: ${Styles.FontSizes["24"]}px;
    font-weight: 600;
`;
const Description = styled.div`
    margin-top: 16px;
    color: ${Styles.colors.Secondary.Scd23};
    font-weight: 400;
    font-size: ${Styles.FontSizes["16"]}px;
    line-height: 24px;
`;
const LearnMore = styled(Link)`
    color: #3752b4;
    font-size: ${Styles.FontSizes["40"]}px;
    font-weight: 700;
    display: block;
    text-align: center;
`;
export default Way;
