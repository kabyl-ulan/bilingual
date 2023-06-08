import React from "react";

import Container from "components/CustomUi/Container";
import CustomSlider from "components/CustomUi/CustomSlider";
import Section from "components/CustomUi/Section";
import styled from "styled-components";

import Globus from "../../assets/images/landingPage/Globus.svg";
import SliderItem from "./SliderItem";

const sliderArray = [
    {
        title: "Кыргызча билимиңизди азыр өркүндөтүңүз!",
        text: "Тил – жазуучунун, мылтык жоокердин куралы. Курал канчалык кубаттуу болсо, анын ээси ошончо күчтүү болот.",
        image: Globus,
        background: "#333",
    },

    {
        title: "Тилдин байлыгы ал ойдун байлыгы!",
        text: "Элди түбөлүк эл кылып турган – анын тили. Ар бир тил – өз элине улуу. Биздин ар бирибиз бизди бул жарык дүйнөгө алып келип, эбегейсиз зор байлыкты – өз тилин тартуулаган элибизге түбөлүк милдеткербиз: анын тазалыгын сактап, байлыгына байлык кошушубуз керек.",
        image: Globus,
        background: "#333",
    },
];

const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 1500,
};

const PrimarySlider = () => {
    return (
        <Section>
            <SliderMain>
                <SliderWrapp>
                    <Container>
                        <SliderBox>
                            <CustomSlider settings={settings} bottomArrows>
                                {sliderArray.map((item) => {
                                    return <SliderItem key={item.text} data={item} />;
                                })}
                            </CustomSlider>
                        </SliderBox>
                    </Container>
                </SliderWrapp>
            </SliderMain>
        </Section>
    );
};

export default PrimarySlider;

const SliderMain = styled.div``;
const SliderWrapp = styled.div``;
const SliderBox = styled.div`
    width: 1370px;

    margin-right: -185px;
    position: relative;

    .slick-center {
        transition: all 0.3s ease;
        transform: scale(1.15);
    }
`;
