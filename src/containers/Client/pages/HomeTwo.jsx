import React from "react";

import { ButtonUi } from "components/UI";

import ClientContainer from "components/UI/ClientContainer";

import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

import Clock from "../../../assets/images/clock.svg";
import Laptop from "../../../assets/images/laptop.svg";
import User from "../../../assets/images/user.svg";
import ValidationTest from "../../../assets/images/validationTest.svg";

function HomeTwo() {
    const navigate = useNavigate();
    const { id } = useParams();

    const CancelHandle = () => {
        navigate("/home");
    };

    const nextToPage = () => {
        navigate(`/home/tests/${id}/select-words-test`);
    };
    return (
        <ClientContainer>
            <StyledContainerHomeTwo>
                <StyledHeaderHomeTwo>Тесттен өтүп, билимиңизди өркүндөтүңүз</StyledHeaderHomeTwo>
                <StyledMainHomeTwo>
                    <Styled>
                        <StyledForImgTest>
                            <img src={ValidationTest} alt="" />
                        </StyledForImgTest>
                        <StyledForMainInform>
                            <StyledImgInform>
                                <img src={Laptop} alt="" />
                                <img src={User} alt="" />
                                <img src={Clock} alt="" />
                            </StyledImgInform>
                            <StyledTitleInform>
                                <p>Деңгээлиңизди упай менен аныктоо</p>
                                <p>Тесттин мүмкүнчүлүктөрүн байкоо</p>
                                <p>Аз убакыттын ичинде практика кылуу</p>
                            </StyledTitleInform>
                        </StyledForMainInform>
                    </Styled>
                    <StyledTitle>
                        <p>* Бул тест ар кандай суроолорду камтыйт.</p>
                    </StyledTitle>
                </StyledMainHomeTwo>
                <StyledFooterHomeTwo>
                    <ButtonUi maxwidth="145px" variant="outlined" onClick={CancelHandle}>
                        АРТКА
                    </ButtonUi>
                    <ButtonUi maxwidth="148px" variant="contained" onClick={nextToPage}>
                        ТЕСТТЕН ӨТҮҮ
                    </ButtonUi>
                </StyledFooterHomeTwo>
            </StyledContainerHomeTwo>
        </ClientContainer>
    );
}
const StyledForImgTest = styled.div``;
const Styled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 700px;
`;
const StyledTitle = styled.div`
    margin-top: 22px;
    display: flex;
    justify-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
`;
const StyledImgInform = styled.div`
    display: flex;
    height: 16px;
    width: 25px;
    margin-left: 50px;
    flex-direction: column;
    justify-content: space-between;
    img {
        :nth-child(1) {
            margin-top: 10px;
        }
        :nth-child(2) {
            margin-top: 27px;
        }
        :nth-child(3) {
            margin-top: 27px;
        }
    }
`;
const StyledTitleInform = styled.div`
    p {
        :nth-child(1) {
            margin-top: 10px;
            margin-left: 10px;
        }
        :nth-child(2) {
            margin-top: 26px;
            margin-left: 10px;
        }
        :nth-child(3) {
            margin-top: 26px;
            margin-left: 10px;
        }
    }
`;
const StyledForMainInform = styled.div`
    font-style: normal;
    font-size: 17px;
    color: #4c4859;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;
const StyledContainerHomeTwo = styled.div`
    width: 900px;
    height: 549px;
    border-radius: 10px;
    box-shadow: 0px 4px 39px -5px rgba(196, 196, 196, 0.6);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledHeaderHomeTwo = styled.div`
    width: 587px;
    height: 32px;
    margin-top: 35px;
    font-weight: 400;
    font-size: 27px;
    line-height: 32px;
    color: #4c4859;
    display: flex;
    flex-wrap: wrap;
`;
const StyledMainHomeTwo = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    margin-top: 58px;
    flex-wrap: wrap;
`;
const StyledFooterHomeTwo = styled.div`
    width: 813px;
    height: 74px;
    border-top: 1.6px solid #d4d0d0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;
export default HomeTwo;
