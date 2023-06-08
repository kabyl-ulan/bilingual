import React from "react";

import ReactPlayer from "react-player";
import styled from "styled-components";

const UseFullVideoItem = () => {
    return (
        <Main>
            <Head>
                <ReactPlayer controls url="https://www.youtube.com/watch?v=A5wEBcQ96Gk" />
            </Head>
        </Main>
    );
};

const Main = styled.div`
    width: 100%;
`;
const Head = styled.div`
    height: 261px;
    border-radius: 16px;
    overflow: hidden;

    width: 100%;
    div {
        width: 100% !important;
        height: 100% !important;
    }
`;

export default UseFullVideoItem;
