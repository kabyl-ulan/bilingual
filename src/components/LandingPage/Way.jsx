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
                        <LearnMore to="/">Көбүрөөк билүү</LearnMore>
                        <Wrapper>
                            <Row>
                                <BoxItem className="box__item-1">
                                    <Title>Тилди үйронүп Кыргызстанда саякатта</Title>
                                    <Description>
                                        Ар кайсы өлкөдөн жана аймактан тапшыргандардын катарына
                                        кириңиз
                                    </Description>
                                </BoxItem>
                                <BoxItem className="box__item-2">
                                    <Title>Акыркы баалоо илиминин негизинде курулган</Title>
                                    <Description>
                                        Duolingo Test - бул TOEFL жана IELTS сыяктуу башка негизги
                                        баа берүүлөр менен жогорку деңгээлде дал келген натыйжалары
                                        менен катуу изилдөөлөр тарабынан колдоого алынган
                                        компьютерге негизделген адаптивдик тест.
                                    </Description>
                                </BoxItem>
                                <BoxItem className="box__item-3">
                                    <Title>Инновациялык тест коопсуздугу</Title>
                                    <Description>
                                        Тармактын алдыңкы коопсуздук протоколдору, жеке тестирлөө
                                        жана компьютердик адаптациялоо технологиясы коопсуздукту
                                        алдын алууга жана сиз ишене турган натыйжаларды камсыз
                                        кылууга жардам берет.
                                    </Description>
                                </BoxItem>
                                <BoxItem className="box__item-4">
                                    <Title>Ыңгайлуу жыйынтыктар тактасы</Title>
                                    <Description>
                                        Талапкерлердин сертификаттарына, видео маектерине жана жазуу
                                        үлгүлөрүнө акысыз жана коопсуз башкаруу тактасы аркылуу
                                        кириңиз. Чыпкалоо куралдары менен арыз берүүчүнүн
                                        маалыматтарын тез жана оңой көрүү.
                                    </Description>
                                </BoxItem>
                                <BoxItem className="box__item-5">
                                    <Title>Коопсуз дизайн</Title>
                                    <Description>
                                        Адаптивдүү тест кыймылдаткычы жүз миңдеген элементтерден
                                        турган маалымат базасынан тест суроолорун динамикалык түрдө
                                        башкарат.
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
