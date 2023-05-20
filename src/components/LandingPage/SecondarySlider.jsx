import React, { useState } from "react";

import { Rating, Typography } from "@mui/material";

import { styled as StyledMUI } from "@mui/material/styles";

import Slider from "react-slick";

import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as NextIcon } from "../../assets/icons/BackIcon.svg";

import { ReactComponent as BackIcon } from "../../assets/icons/NextIcon.svg";

import Human1 from "../../assets/images/landingPage/Human1.svg";
import Human2 from "../../assets/images/landingPage/Human2.svg";
import Human3 from "../../assets/images/landingPage/Human3.svg";
import Human4 from "../../assets/images/landingPage/Human4.svg";
import Human5 from "../../assets/images/landingPage/Human5.svg";
import Human6 from "../../assets/images/landingPage/Human6.svg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, padding: 20 }} onClick={onClick}>
            <BackIcon />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, padding: 20 }} onClick={onClick}>
            <NextIcon />
        </div>
    );
}

function SecondarySlider() {
    const aboutUser = [
        {
            id: Math.random().toString(),
            name: "- Mahamatalieva Zuli",
            text: "Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.",
            rating: 5,
            avatar: Human1,
        },
        {
            id: Math.random().toString(),
            name: "- Abdimanap k Elnura",
            text: "I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.",
            rating: 5,
            avatar: Human2,
        },
        {
            id: Math.random().toString(),
            name: "- Melisov Abu",
            text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
            rating: 5,
            avatar: Human3,
        },
        {
            id: Math.random().toString(),
            name: "- Zhumaev Emirlan",
            text: "Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.",
            rating: 5,
            avatar: Human4,
        },
        {
            id: Math.random().toString(),
            name: "- Zalkarbekov Chyngyz",
            text: "I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.",
            rating: 5,
            avatar: Human5,
        },
        {
            id: Math.random().toString(),
            name: "- Zalkarbekov Chyngyz",
            text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
            rating: 5,
            avatar: Human6,
        },
    ];
    const [indexImage, setIndexImage] = useState(0);
    const settings = {
        autoplay: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: -10,
        slidesToShow: 3,
        speed: 3000,
        autoplaySpeed: 2000,
        dots: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => setIndexImage(next),
    };

    return (
        <MainBox>
            <MainTitle variant="h1">Why people love Bilingual</MainTitle>
            <StyledSlider {...settings}>
                {aboutUser.map((item, index) => (
                    <BoxActive key={item.id} className={index === indexImage}>
                        <UserPhotos src={item.avatar} alt="user avatar" />
                        <Text className={index === indexImage} variant="subtitle1">
                            {item.text}
                        </Text>
                        <UserName className={index === indexImage} variant="h5">
                            {item.name}
                        </UserName>
                        <UserRating name="read-only" value={item.rating} readOnly />
                    </BoxActive>
                ))}
            </StyledSlider>
        </MainBox>
    );
}
export default SecondarySlider;

const MainBox = styled("div")`
    height: 854px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 120px;
    margin-top: 120px;
`;
const MainTitle = StyledMUI(Typography)`
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #3752b4;
    
`;
const UserPhotos = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 40px 13px 52px 73px;
`;
const Text = StyledMUI(Typography)`
    width: 300px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 33, 42, 0.8);
    margin: 0 10px 0 17px;
    color:${(p) => (p.className ? "#FFFFFF" : "rgba(35, 33, 42, 0.8)")}
`;
const UserName = StyledMUI(Typography)`
    width: 170px;
    height: 24px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #3A10E5;
    margin: 24px 96px 20px 85px;
    color:${(p) => (p.className ? "#FFFFFF" : "#3A10E5")}
`;
const UserRating = StyledMUI(Rating)`
    width: 98px;
    height: 18px;
    margin: 0 134px 94px 104px;
`;
const StyledSlider = styled(Slider)`
    .slick-slide {
        width: 700px;
        background: #e5e5e5;
        border-radius: 40px;
    }
    .slick-track {
        display: flex;
        gap: 30px;
        justify-content: center;
        height: 564px;
        padding-top: 50px;
    }
    ,
    .slick-list {
        margin: 0 auto;
        width: 1100px;
        height: 700px;
        padding-bottom: 50px;
    }

    .slick-arrow {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        z-index: 10;
        margin: 0 -60px;
        border: 1px solid #3a10e5;
    }
    .slick-next,
    .slick-prev {
        color: #3a10e5;
    }

    .slick-next:active,
    .slick-prev:before,
    .slick-next:before {
        content: none;
    }
    .slick-dots {
        margin-top: 50px;
        * {
        }
    }
    .slick-dots li {
        width: 15px;
        margin: 0;
    }
    .slick-dots li button:before {
        content: "";
        width: 6px;
        height: 16px;
        background: rgba(58, 16, 229, 0.2);
        border-radius: 20px;
    }
    .slick-dots li.slick-active button:before {
        background: #3a10e5;
        width: 6px;
        height: 30px;
        margin-top: -14px;
        transition: all 0.5s ease;
    }
`;
const BoxActive = styled("div")`
    background: ${(p) => (p.className ? "#666CA7" : "")};
    transition: ${(p) => (p.className ? "transform 300ms" : "")};
    transform: ${(p) => (p.className ? "scale(1.1)" : "")};
    height: ${(p) => (p.className ? "550px" : "")};
    max-width: ${(p) => (p.className ? "330px" : "")};
    border-radius: ${(p) => (p.className ? "40px" : "40px")};
    color: ${(p) => (p.className ? "white" : "")};
    transition: all 0.3s ease;
`;
