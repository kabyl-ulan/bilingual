import React, { useState } from "react";

import ButtonStyled from "components/UI/ButtonUi";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";

import { ADMIN_ROUTES_URL } from "routes/AdminRoutes/adminRoutesUrl";
import styled, { keyframes } from "styled-components";

import { scrollHeader } from "utils/helpers";

import Logotip from "../../assets/images/landingPage/LogoBilingual.png";

function Header({ Choice, HeaderBg }) {
    const [bgColor, setBgColor] = useState();
    const navigate = useNavigate();

    window.addEventListener("scroll", () => {
        if (scrollHeader()) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    });

    const logout = () => {
        Cookies.remove("user");
        window.location.pathname = "/";
    };

    return (
        <HeaderGlav bgColor={bgColor} HeaderBg={HeaderBg}>
            <StyledHeader>
                <StyledImage src={Logotip} />
                {Choice ? (
                    <StyledHeaderLandingPage>
                        <ButtonStyled
                            text="КИРҮҮ"
                            variant="contained"
                            maxwidth="152px"
                            maxheight="42px"
                            fontSize="14px"
                            onClick={() => navigate("/sign-in")}
                        />
                        <ButtonStyled
                            text="КАТТАЛУУ"
                            variant="outlined"
                            maxwidth="122px"
                            maxheight="42px"
                            fontSize="14px"
                            onClick={() => navigate("/sign-up")}
                        />
                    </StyledHeaderLandingPage>
                ) : (
                    <StyledHeaderClientRole>
                        <LinkItem to={`/admin${ADMIN_ROUTES_URL.TEST}`}>ТЕСТ</LinkItem>
                        <LinkItem to={ADMIN_ROUTES_URL.SUBMITED_TEST}>
                            ТАПШЫРЫЛГАН ЖЫЙЫНТЫКТАР
                        </LinkItem>
                        <ButtonStyled
                            text="ЧЫГУУ"
                            variant="outlined"
                            maxwidth="104px"
                            maxheight="42px"
                            fontSize="15px"
                            onClick={logout}
                        />
                    </StyledHeaderClientRole>
                )}
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
    background: ${(props) => props.HeaderBg};
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
const StyledHeaderLandingPage = styled.div`
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;
    gap: 10px;

    button {
        width: 120px !important;
    }
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
