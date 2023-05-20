import React from "react";

import Container from "components/CustomUi/Container";
import CustomSlider from "components/CustomUi/CustomSlider";
import Section from "components/CustomUi/Section";
import styled from "styled-components";

import UseFullVideoItem from "./UseFullVideoItem";

const UseFullVideo = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        gap: 15,
    };
    return (
        <Section>
            <UseFullVideoMain>
                <Container>
                    <UseFullVideoWarpp>
                        <UseFullVideoTitle>Useful videos</UseFullVideoTitle>
                        <UseFullVidoeRow>
                            <CustomSlider settings={settings} bottomArrows>
                                <UseFullVideoItem />
                                <UseFullVideoItem />
                                <UseFullVideoItem />
                                <UseFullVideoItem />
                            </CustomSlider>
                        </UseFullVidoeRow>
                    </UseFullVideoWarpp>
                </Container>
            </UseFullVideoMain>
        </Section>
    );
};

const UseFullVideoMain = styled.div``;
const UseFullVideoWarpp = styled.div``;
const UseFullVideoTitle = styled.div`
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #3752b4;
    text-align: center;
`;
const UseFullVidoeRow = styled.div`
    margin-top: 48px;
    position: relative;
`;
export default UseFullVideo;
