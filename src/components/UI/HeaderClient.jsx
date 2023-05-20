import React, { useState } from "react";

import ButtonStyled from "components/UI/ButtonUi";
import Cookies from "js-cookie";

import { NavLink } from "react-router-dom";
import { CLIENT_ROUTES_URL } from "routes/ClientRoutes/clientRoutesUrl";
import styled, { keyframes } from "styled-components";

import Logotip from "../../assets/images/landingPage/LogoBilingual.png";

function Header({ HeaderBg }) {
    const [bgColor, setBgColor] = useState();
    const logOut = () => {
        Cookies.remove("user");
        window.location.pathname = "/";
    };

    window.addEventListener("scroll", () => {
        if (scrollHeader()) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    });
    return (
        <HeaderGlav bgColor={bgColor}>
            <StyledHeader>
                <StyledImage src={Logotip} />
                <StyledHeaderClientRole>
                    <LinkItem to="/home/tests">ТЕСТТЕР</LinkItem>
                    <LinkItem to={`/home/${CLIENT_ROUTES_URL.RESULTS}`}>ЖЫЙЫНТЫКТАР</LinkItem>
                    <ButtonStyled
                        text="ЧЫГУУ"
                        variant="outlined"
                        maxwidth="104px"
                        maxheight="42px"
                        fontSize="15px"
                        onClick={logOut}
                    />
                </StyledHeaderClientRole>
            </StyledHeader>
        </HeaderGlav>
    );
}

const HeaderAnimation = keyframes`
to{
    box-shadow: 3px 0 7px #999;
    background-color: white;
}
`;

const LinkItem = styled(NavLink)`
    &.active,
    &:hover {
        color: rgba(58, 16, 229, 0.9);
    }
`;
const HeaderGlav = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    animation: ${(props) => (props.bgColor ? HeaderAnimation : "")} 0.5s forwards;
    background: white;
    z-index: 10;
    transition: 0.2s ease;
    &.active {
        background-color: white;
    }
`;

const StyledHeader = styled.div`
    width: 1550px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledImage = styled.img`
    width: 235px;
    height: 48px;
    margin-left: 80px;
`;
const StyledHeaderClientRole = styled.div`
    width: 411px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;
`;
export default Header;
