import React from "react";

import Container from "components/CustomUi/Container";
import CustomSlider from "components/CustomUi/CustomSlider";
import Section from "components/CustomUi/Section";
import styled from "styled-components";

import Globus from "../../assets/images/landingPage/Globus.svg";
import SliderItem from "./SliderItem";

const sliderArray = [
    {
        title: "Confirm your English proficiency today! ",
        text: "For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.",
        image: Globus,
        background: "#333",
    },

    {
        title: "Confirm your English proficiency today! ",
        text: "For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.",
        image: Globus,
        background: "#333",
    },

    {
        title: "Confirm your English proficiency today! ",
        text: "For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.",
        image: Globus,
        background: "#333",
    },
    {
        title: "Confirm your English proficiency today! ",
        text: "For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.",
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
