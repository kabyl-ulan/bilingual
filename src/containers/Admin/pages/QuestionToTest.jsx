import React, { useEffect } from "react";

import { Tooltip } from "@mui/material";
import { ButtonUi } from "components/UI";
import IconButtonStyled from "components/UI/IconButtonStyled";
import Loader from "components/UI/Loader";
import SwitcherComp from "components/UI/Switcher";
import UICard from "components/UI/UICard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { formatterQuestionType } from "services/format";
import { getTestById } from "store/slices/adminTestActions";
import { deleteQuestion, isActiveQuestion } from "store/slices/questionSlice";
import styled from "styled-components";

import DeleteIcon from "../../../assets/icons/Delete.svg";
import UpdateIcon from "../../../assets/icons/UpdateIcon.svg";

import { ADMIN_CONST_URL } from "../../../routes/constants";

function QuestionToTest() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { singleTest } = useSelector((state) => state.test);
    const questionList = singleTest[0]?.questionResponses;

    useEffect(() => {
        dispatch(getTestById(id));
    }, []);

    const changeActiveQuestion = (isActId) => {
        dispatch(isActiveQuestion(isActId));
    };

    const deleteQuestionById = (deleteId) => {
        dispatch(deleteQuestion({ data: { questionId: deleteId, testId: id } }));
    };

    const goBacktoAdminTests = () => {
        navigate(-1);
    };

    return !questionList ? (
        <Loader />
    ) : (
        <StyledMainDiv>
            <UICard
                marginBox="68px 190px 227px 190px"
                cardWidth="100%"
                cardBorderRadius="20px"
                cardBoxShadow="0px 4px 39px rgba(196, 196, 196, 0.6)">
                {singleTest.map((item) => (
                    <StyledAboutTest key={item.id}>
                        <StyledNameTest>
                            Аталышы:
                            <StyledSpan>{item.title}</StyledSpan>
                        </StyledNameTest>
                        <StyledNameTest>
                            Кыскача сүрөттөмө: <StyledSpan>{item.shortDescription}</StyledSpan>
                        </StyledNameTest>
                        <StyledNameTest>
                            Убактысы: <StyledSpan>{item.duration} мүнөт</StyledSpan>
                        </StyledNameTest>
                    </StyledAboutTest>
                ))}
                <StyledBtnDiv>
                    <ButtonUi
                        variant="contained"
                        onClick={() =>
                            navigate(`/admin/test-${id}/${ADMIN_CONST_URL.CREATE_QUESTION}`)
                        }>
                        + СУРООЛОРДУ КОШУУ
                    </ButtonUi>
                </StyledBtnDiv>
                <StyledLine />
                <StyledAboutTests>
                    <p>#</p>
                    <p>Аты</p>
                    <p>Узактыгы</p>
                    <p>Суроонун түрү</p>
                </StyledAboutTests>
                {questionList?.length > 0 &&
                    questionList.map((item, index) => (
                        <CardUIBox key={item.id}>
                            <UICard
                                cardBorderRadius="8px"
                                cardBoxShadow="0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)"
                                cardWidth="100%"
                                cardHeight="66px">
                                <StyledContainerCard>
                                    <StyledAboutQuestion>
                                        <p>{index + 1}</p>
                                        <Tooltip
                                            componentsProps={{
                                                tooltip: {
                                                    sx: {
                                                        maxWidth: "500px",
                                                        fontSize: "14px",
                                                        padding: "8px 15px",
                                                    },
                                                },
                                            }}
                                            title={item.title}
                                            placement="top">
                                            <p>{item.title}</p>
                                        </Tooltip>
                                        <p>{item.duration}</p>
                                        <p style={{ textTransform: "capitalize" }}>
                                            {formatterQuestionType(item.questionType)}
                                        </p>
                                    </StyledAboutQuestion>
                                    <StyledIconsBtn>
                                        <SwitcherComp
                                            onChange={() => changeActiveQuestion(item.id)}
                                            value={item.isActive}
                                        />
                                        <IconButtonStyled
                                            handleClick={() =>
                                                navigate(`/admin/update-question/${item.id}`)
                                            }
                                            Icon={UpdateIcon}
                                        />
                                        <IconButtonStyled
                                            handleClick={() => deleteQuestionById(item.id)}
                                            Icon={DeleteIcon}
                                        />
                                    </StyledIconsBtn>
                                </StyledContainerCard>
                            </UICard>
                        </CardUIBox>
                    ))}

                <StyledBtnGoBack>
                    <ButtonUi variant="outlined" onClick={goBacktoAdminTests}>
                        АРТКА
                    </ButtonUi>
                </StyledBtnGoBack>
            </UICard>
        </StyledMainDiv>
    );
}

export default QuestionToTest;

const StyledMainDiv = styled.div`
    width: 1060px;
    margin: 0 auto;
`;

const CardUIBox = styled.div`
    margin-top: 16px;
`;

const StyledAboutTest = styled.div`
    height: 66px;
    margin-bottom: 44px;
`;

const StyledNameTest = styled.h5`
    font-size: 16px;
    padding-top: 6px;
    color: #3752b4;
`;

const StyledSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #4c4859;
`;

const StyledBtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

const StyledLine = styled.div`
    height: 1px;
    border: 1.53px solid #d4d0d0;
    background: #c4c4c4;
    margin: 22px 0 24px 0;
`;

const StyledAboutTests = styled.div`
    width: 670px;
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    p {
        :nth-child(1) {
            margin-left: 45px;
            margin-right: 31px;
        }
        :nth-child(2) {
            margin-right: 240px;
        }
        :nth-child(3) {
            margin-right: 40px;
        }
    }
`;

const StyledContainerCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledAboutQuestion = styled.div`
    width: 650px;
    display: flex;
    align-items: center;
    p {
        :nth-child(1) {
            width: 46px;
        }
        :nth-child(2) {
            width: 321px;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow-wrap: break-word;
            overflow: hidden;
        }
        :nth-child(3) {
            width: 114px;
        }
        :nth-child(4) {
            width: 256px;
        }
    }
`;

const StyledIconsBtn = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledBtnGoBack = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: end;
    margin-top: 32px;
`;
