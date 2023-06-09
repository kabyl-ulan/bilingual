import { questionType } from "constants/questionType";

import React from "react";

import { baseAxios } from "api/axios-config";
import Container from "components/CustomUi/Container";

import { ButtonUi } from "components/UI";
import { useNavigate } from "react-router-dom";
import { convertHMS, formatterQuestionType } from "services/format";
import styled from "styled-components";

export default function CheckLayout({ children, data }) {
    const [score, setScore] = React.useState(+data.scoreOfQuestion);
    const navigate = useNavigate();
    const handleSave = async () => {
        try {
            const res = await baseAxios.post(`/result/evaluate-client-answer`, {
                questionAnswerId: data.id,
                score: +score,
            });
            console.log(res);
            return navigate(-1);
        } catch (error) {
            return error;
        }
    };
    return (
        <Container>
            <StyledMain>
                <Box>
                    <AboutUser>
                        <BlText>
                            <span>Колдонуучу: </span>
                            <span>{data.fullName}</span>
                        </BlText>
                        <BlText>
                            <span>Тест: </span>
                            <span>{data.testTitle}</span>
                        </BlText>
                    </AboutUser>
                    <AboutTest>
                        <div>
                            <h3>Тест суроосу</h3>
                            <BoxItem>
                                <BlText>
                                    <span>Суроонун аталышы: </span>
                                    <span>{data.questionTitle}</span>
                                </BlText>
                                <BlText>
                                    <span>Узактыгы (мүнөт менен): </span>
                                    <span>{convertHMS(data.duration)}</span>
                                </BlText>
                                <BlText>
                                    <span>Суроо түрү: </span>
                                    <span>{formatterQuestionType(data.questionType)}</span>
                                </BlText>
                                {data.minNumberOfReplays && (
                                    <BlText>
                                        <span>Кайталоолордун минималдуу саны: </span>
                                        <span>{data.minNumberOfReplays}</span>
                                    </BlText>
                                )}
                                {data.minNumberOfWords && (
                                    <BlText>
                                        <span>Сөздөрдүн минималдуу саны: </span>
                                        <span>{data.minNumberOfWords}</span>
                                    </BlText>
                                )}
                                {data.statement && (
                                    <BlText>
                                        <span> Билдирме: </span>
                                        <span>{data.statement}</span>
                                    </BlText>
                                )}
                            </BoxItem>
                        </div>
                        <BoxScore>
                            <h3>Баалоо</h3>
                            <Score>
                                <span>Упай: </span>
                                {data.questionType === questionType.LISTEN_WORDS ||
                                data.questionType === questionType.SELECT_WORDS ? (
                                    data.scoreOfQuestion
                                ) : (
                                    <>
                                        <span>(1-10)</span>
                                        <br />
                                        <input
                                            value={score}
                                            onChange={(e) => setScore(e.target.value)}
                                            type="number"
                                        />
                                    </>
                                )}
                            </Score>
                        </BoxScore>
                    </AboutTest>
                    <Wrapper>{React.cloneElement(children, data)}</Wrapper>
                    <Actions>
                        <ButtonUi onClick={() => navigate(-1)} variant="outlined">
                            АРТКА
                        </ButtonUi>
                        <ButtonUi onClick={handleSave} variant="contained" color="success">
                            САКТОО
                        </ButtonUi>
                    </Actions>
                </Box>
            </StyledMain>
        </Container>
    );
}
const Actions = styled.div`
    display: flex;
    gap: 16px;
    justify-content: flex-end;
`;
const BoxScore = styled.div`
    input {
        height: 46px;
        width: 94px;
        left: 4px;
        top: 20px;
        border-radius: 8px;
        margin-top: 10px;
        border: 1.8px solid #d4d0d0;
        padding: 14px 16px 14px 16px;
        :focus {
            outline: none;
        }
    }
`;

const Wrapper = styled.div`
    margin: 40px 0 32px 0;
`;

const Score = styled.div`
    font-size: 18px;

    & span:first-child {
        font-weight: 500;
        line-height: 21px;
        color: #3752b4;
    }
    & span:last-child {
        color: green;
        font-weight: bold;
    }
`;
const StyledMain = styled.div`
    background: #fff;
    padding: 50px 80px;
    border-radius: 20px;
    box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
    margin-top: 65px;
`;
const BlText = styled.span`
    display: block;
    line-height: 21px;
    margin-top: 6px;
    span:nth-child(1) {
        color: #3752b4;
    }
    span:nth-child(2) {
        color: #4c4859;
    }
`;
const Box = styled.div``;
const AboutUser = styled.div`
    font-size: 18px;
`;
const AboutTest = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
`;
const BoxItem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
`;
