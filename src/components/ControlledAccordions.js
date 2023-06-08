import * as React from "react";

import AddIcon from "@mui/icons-material/Add";

import { Container, styled, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";

import AccordionDetails from "@mui/material/AccordionDetails";

import AccordionSummary from "@mui/material/AccordionSummary";

import styleds from "styled-components";

import FacebookIcon from "../assets/images/landingPage/facebookIcon.svg";
import InstagramIcon from "../assets/images/landingPage/instagramInstgramIcon.svg";

import YoutubeIcon from "../assets/images/landingPage/youtubeIcon.svg";

import LogoBilingual from "../assets/images/LogoFooter.svg";
import IconButtonStyled from "./UI/IconButtonStyled";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const Footerdata = [
        {
            question: "Bilingual деген эмне? ",
            panel: 1,
            answer: "Bilingual - бул кыргыз тилин үйронүү де жакшы өздөштүрүү үчүн, тестирлөө жолу менен өтүүчү система",
        },
        {
            question: "Тестти кантип тапшыруу керек? ",
            panel: 2,
            answer: "Тестти тапшыруу үчүн сайтка катталуу зарыл. Катталгын кийин тесттердин тизмесинен тандап тапшыруу керек.",
        },
        {
            question: "Эмне үчүн мен Bilingualда кыргыз тили боюнча тест тапшырышым керек? ",
            panel: 3,
            answer: "Анткени бул платформа 100% бекер жана ыңгайлуу.",
        },
        {
            question: "Микрофонум үнүмдү так угарын кантип текшере алам?",
            panel: 4,
            answer: "Тестти тапшыруудан мурун, микрофонуңузду текшерип алуу керек.",
        },
    ];
    return (
        <StyledFooter>
            <StyledContainer>
                <Header>Көп берилүүчү суроолор:</Header>
                {Footerdata.map((el) => {
                    return (
                        <StyledAccordion
                            key={el.panel}
                            expanded={expanded === el.panel}
                            onChange={handleChange(el.panel)}>
                            <StyledAccordionSummary aria-controls="panel1bh-content" id={el.panel}>
                                <Typography>{el.question}</Typography>
                            </StyledAccordionSummary>
                            <StyledAccordionDetails>
                                <StyledTypographyAccordion>{el.answer}</StyledTypographyAccordion>
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    );
                })}
            </StyledContainer>
            <StyledFooterInline>
                <StyledImage src={LogoBilingual} />
                <StyledText>© Copyright ArlenSoft. All Rights Reserved</StyledText>
                <IconButtonStyled Icon={YoutubeIcon} />
                <IconButtonStyled Icon={FacebookIcon} />
                <IconButtonStyled Icon={InstagramIcon} />
            </StyledFooterInline>
        </StyledFooter>
    );
}
const StyledFooter = styleds.div`
    width: 100%;
    background-color: #262626;
`;
const StyledFooterInline = styleds.div`
    width: 1150px;
    height: 140px;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    img {
        :nth-child(3) {
            margin-left: 300px;
    }
`;
const StyledImage = styleds.img`
    width: 225px;
    height: 46px;
`;
const StyledText = styleds.span`
    margin-top:110px;
    margin-left:200px;
    font-family: Poppins;
    font-style: Regular;
    font-size: 14px;
    color: #98a2b3;
`;
const StyledAccordionSummary = styled((props) => (
    <AccordionSummary expandIcon={<AddIcon sx={{ color: "#ffffff" }} />} {...props} />
))(() => ({
    background: "#262626",
    flexDirection: "row",
    borderTop: `1px solid #4A4A4A`,

    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(45deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: "-16px",
        marginTop: "20px",
        color: "#ffffff",
        height: "40px",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "40px",
    },
}));

const StyledAccordion = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
    backgroundColor: "#262626",
    borderBottom: `1px solid #4A4A4A`,

    "&:not(:last-child)": {
        borderBottom: 0,
    },
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({}));

const Header = styled("h1")`
    color: #ffffff;
    font-family: "Gilroy";
    font-weight: 700;
    font-size: 40px;
    line-height: 51px;
    margin-bottom: 10px;
`;

const StyledContainer = styled(Container)`
    width: 1220px;
    padding: 120px 0;
    background-color: #262626;
`;

const StyledTypographyAccordion = styled(Typography)`
    width: 100%;
    font-family: "Poppins";
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
    border-radius: none;
    margin-left: -16px;
`;
