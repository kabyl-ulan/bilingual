import React from "react";

import Header from "components/LandingPage/Header";
import styled from "styled-components";

function Layout({ children }) {
    return (
        <StyledMain>
            <Header Choice={false} HeaderBg="white" />
            <Wrapper>{children}</Wrapper>
        </StyledMain>
    );
}

export default Layout;

const StyledMain = styled.main`
    width: 100%;
    background: #d7e1f8;
`;

const Wrapper = styled.div`
    padding: 150px 0 50px;
    min-height: 100vh;
    background: #d7e1f8;
`;
