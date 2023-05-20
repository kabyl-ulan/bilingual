import React from "react";

import styled from "styled-components";

const SliderItem = ({ data }) => {
    return (
        <SliderInner bg={data.background}>
            <SliderRow>
                <SliderContent>
                    <SliderTitle>{data.title}</SliderTitle>
                    <SliderDescription>{data.text}</SliderDescription>
                </SliderContent>
                <SliderImg>
                    <img src={data.image} alt="title" />
                </SliderImg>
            </SliderRow>
        </SliderInner>
    );
};

export default SliderItem;

const SliderInner = styled.div`
    max-width: 960px;
    background: ${({ bg }) => bg};
    width: 100%;
    height: 440px;
    overflow: hidden;
    border-radius: 70px 70px 70px 0px;
    margin: 100px 10px 80px 100px;
    transition: all 3s ease;
    padding: 44px 46px;
`;

const SliderRow = styled.div`
    display: flex;
    align-items: center;
    gap: 42px;
`;

const SliderDescription = styled.div`
    max-width: 579px;
    color: white;
    font-size: 24px;
    margin-top: 25px;
`;

const SliderImg = styled.div`
    img {
        width: 100%;
        height: 100%;
    }
`;

const SliderContent = styled.div``;

const SliderTitle = styled.h2`
    color: #fe9102;
    font-size: 38px;
    line-height: 46px;
    max-width: 508px;
`;
