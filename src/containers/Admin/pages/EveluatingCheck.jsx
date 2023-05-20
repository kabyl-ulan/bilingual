import React, { useEffect, useState } from "react";

import { getViewResultsQuestions } from "api/view-results-questions";
import IconButtonStyled from "components/UI/IconButtonStyled";
import Loader from "components/UI/Loader";

import { useNavigate, useParams } from "react-router-dom";
import { getDate } from "services/format";
import styled from "styled-components";

import Eveluated from "../../../assets/icons/Evaluated.svg";
import EyeIcon from "../../../assets/icons/eye.svg";

function EveluatingCheck() {
    const [state, setState] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const getDataCard = async () => {
        try {
            const data = await getViewResultsQuestions(id);
            setState(data);
        } catch (error) {
            setState("ERROR");
        }
    };
    useEffect(() => {
        getDataCard();
    }, []);

    const click = (idx) => {
        navigate(`/admin/check/answer/${idx}`);
    };

    return state === "ERROR" ? (
        <h1>Some thing went wrong</h1>
    ) : state ? (
        <StyledContainerMain>
            <StyledContainer>
                <StyledContainerOne>
                    <StyledText>
                        User: <Span>{state.userFullName}</Span>
                    </StyledText>
                    <StyledText>
                        Test: <Span>{state.testTitle}</Span>
                    </StyledText>
                    <StyledText>
                        Date of submission:
                        <Span>
                            {` ${getDate(state.dateOfSubmission)[1]} ${
                                getDate(state.dateOfSubmission)[0]
                            }`}
                        </Span>
                    </StyledText>
                </StyledContainerOne>
                <StyledContainerTwo>
                    <StyledText>
                        Final Score:
                        <StyledInside bgColor={state.finalScore}>{state.finalScore}</StyledInside>
                    </StyledText>
                    <StyledText>
                        Final Status:
                        <StyledInside bgColor={state.finalScore}>{state.finalStatus}</StyledInside>
                    </StyledText>
                    <StyledButtonEmail>SEND RESULTS TO USER’S EMAIL</StyledButtonEmail>
                </StyledContainerTwo>
            </StyledContainer>
            <StyledContainerResults>
                <StyledHeaderResults>
                    <span>#</span>
                    <span>Question</span>
                    <span>Score</span>
                    <span>Status</span>
                </StyledHeaderResults>
                {state.questionAnswerResponses.map((item, index) => {
                    return (
                        <StyledCardTests key={item.id}>
                            <span>{index + 1}</span>
                            <span>{item.questionTitle}</span>
                            <span>{item.score} out of 10</span>
                            <StyledTextColor bgColor={item.status} style={{}}>
                                {item.status}
                            </StyledTextColor>
                            <span>
                                <IconButtonStyled
                                    handleClick={() =>
                                        item.status === "EVELUATED" ? null : click(item.id)
                                    }
                                    Icon={item.status === "EVELUATED" ? Eveluated : EyeIcon}
                                />
                            </span>
                        </StyledCardTests>
                    );
                })}
            </StyledContainerResults>
        </StyledContainerMain>
    ) : (
        <Loader />
    );
}

const StyledContainerMain = styled.div`
    width: 1060px;
    background-color: white;
    border-radius: 20px;
    padding: 50px 80px 50px 80px;
    margin: auto;
`;
const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const StyledTextColor = styled.div`
    color: ${(props) => (props.bgColor === "EVELUATED" ? "#2AB930" : "#F61414")};
`;
const Span = styled.span`
    color: #4c4859 !important;
`;
const StyledContainerResults = styled.div`
    width: 900px;
    margin-top: 22px;
    border-top: 2.53px solid #d4d0d0;
`;
const StyledContainerOne = styled.div`
    height: 76px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const StyledContainerTwo = styled.div`
    width: 271px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledCardTests = styled.div`
    width: 900px;
    display: flex;
    margin-top: 16px;
    background: #ffffff;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 24px 0 24px 0;
    span {
        &:nth-child(1) {
            width: 9px;
            height: 18px;
            margin-left: 18px;
        }
        &:nth-child(2) {
            width: 346px;
            margin-left: 30px;
        }
        &:nth-child(3) {
            width: 216px;
        }
        &:nth-child(4) {
            width: 240px;
        }
        &:nth-child(5) {
            width: 130px;
            height: 20px;
            display: flex;
            justify-content: end;
        }
    }
`;
const StyledHeaderResults = styled.div`
    width: 900px;
    margin-top: 24px;
    span {
        &:nth-child(1) {
            width: 9px;
            height: 18px;
            margin-left: 18px;
        }
        &:nth-child(2) {
            width: 62px;
            height: 18px;
            margin-left: 30px;
        }
        &:nth-child(3) {
            width: 41px;
            height: 18px;
            margin-left: 284px;
        }
        &:nth-child(4) {
            width: 45px;
            height: 18px;
            margin-left: 175px;
        }
    }
`;
const StyledButtonEmail = styled.button`
    padding: 13px 24px;
    width: 291px;
    height: 42px;
    font-size: 14px;
    background: #ffffff;
    border: 2px solid #c4c4c4;
    border-radius: 8px;
    cursor: pointer;
    :hover {
        border: 2px solid rgba(58, 16, 229, 1);
        color: rgba(58, 16, 229, 1);
    }
`;
const StyledText = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #3752b4;
`;
const StyledInside = styled.span`
    font-weight: 400;
    line-height: 18px;
    color: ${(props) => (props.bgColor === "EVELUATED" ? "#2AB930" : "#F61414")};
`;
export default EveluatingCheck;
