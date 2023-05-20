import React from "react";

import styled from "styled-components";

import Autoplay from "./Autoplay";
import SecondarySlider from "./SecondarySlider";

function SliderPage() {
    return (
        <ContainerDiv>
            <SecondarySlider />
            <Autoplay />
        </ContainerDiv>
    );
}

export default SliderPage;

const ContainerDiv = styled.div`
    width: 100%;
`;
