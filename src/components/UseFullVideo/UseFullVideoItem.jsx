import React from "react";

import ReactPlayer from "react-player";
import styled from "styled-components";

const UseFullVideoItem = () => {
    return (
        <Main>
            <Head>
                <ReactPlayer controls url="https://youtu.be/fr3yF30GWi0" />
            </Head>
            <Body>
                <h3>Test Overview</h3>
                <span>Duration 1:00</span>
            </Body>
        </Main>
    );
};

const Main = styled.div`
    width: 100%;
`;
const Head = styled.div`
    height: 261px;
    border-radius: 16px 16px 0 0;
    overflow: hidden;

    width: 100%;
    div {
        width: 100% !important;
        height: 100% !important;
    }
`;

const Body = styled.div`
    background: white;
    padding: 20px 16px;
    border-radius: 0 0 16px 16px;
    border: 1px solid #dddddd;

    h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #3a10e5;
    }

    span {
        margin-top: 10px;
        font-weight: 400;
        font-size: 18px;
        color: #212629;
        display: inline-block;
    }
`;

export default UseFullVideoItem;
