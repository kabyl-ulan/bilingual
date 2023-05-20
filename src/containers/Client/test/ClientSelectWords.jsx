import React, { useState } from "react";

import Chip from "components/UI/Chip";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addAnswer } from "store/slices/clientSlice";

import styled from "styled-components";

function SelectEnglishWords({ question }) {
    const [cardList, setCardList] = useState([]);
    const dispatch = useDispatch();
    const { id } = useParams();
    const dragEndHandler = (e, card) => {
        e.preventDefault();
        setCardList((prev) => {
            if (prev.find((item) => item.id === card.id)) {
                return prev;
            }
            return [...prev, card];
        });
    };

    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: cardList.map((item) => item.id),
                    answer: "",
                    numberOfPlays: 0,
                },
            })
        );
    }, [cardList]);
    React.useEffect(() => {
        setCardList([]);
    }, [question.id]);

    const handleDelete = (chipToDelete) => {
        setCardList((chips) => chips.filter((chip) => chip.option !== chipToDelete.option));
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <h4 className="question-title">{question.title}</h4>
            <StyledWrapper>
                {question.optionResponseList.map((item) => (
                    <StyledWordDiv
                        className={
                            cardList.findIndex((inner) => inner.id === item.id) >= 0
                                ? "option_disable"
                                : ""
                        }
                        onDragEnd={(e) => dragEndHandler(e, item)}
                        onDragOver={(e) => dragOverHandler(e)}
                        draggable
                        key={item.id}>
                        {item.option}
                    </StyledWordDiv>
                ))}
            </StyledWrapper>
            <StyledDrag onDragOver={(e) => dragOverHandler(e, cardList.option)}>
                <StyleDragBox>
                    {cardList.length > 0
                        ? cardList.map((answer) => {
                              return (
                                  <Chip
                                      key={answer.id}
                                      text={answer.option}
                                      onDelete={() => handleDelete(answer)}
                                  />
                              );
                          })
                        : "select words and drag here"}
                </StyleDragBox>
            </StyledDrag>
        </>
    );
}

export default SelectEnglishWords;

const StyledWrapper = styled.div`
    width: 813px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const StyleDragBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7px;
`;

const StyledDrag = styled.div`
    width: 243px;
    height: 124px;
    border: 1px dashed #a8a2a2;
    border-radius: 4.62335px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin: 30px 0 0 570px;
    font-weight: 400;
    font-size: 14px;
    :hover {
        background: rgba(58, 16, 229, 0.1);
        border: 1px dashed #3a10e5;
    }
`;

const StyledWordDiv = styled.div`
    height: 41px;
    padding: 10px 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 2px solid #d4d0d0;
    border-radius: 8px;
    cursor: grab;

    :hover {
        border: 2px solid #3a10e5;
    }
    :active {
        border: none;
        outline: none;
        background: #3a10e5;
        color: #ffffff;
    }
    &.option_disable {
        opacity: 0.4;
        background: #e5e5e5;
        pointer-events: none;
    }
`;
