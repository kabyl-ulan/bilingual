import React, { useState } from "react";

import TextArea from "components/UI/TextArea";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addAnswer } from "store/slices/clientSlice";
import styled from "styled-components";

export default function ClientRespond({ question }) {
    const [value, setValue] = useState("");
    const valueLength = value.split(" ").length - 1;
    const dispatch = useDispatch();
    const { id } = useParams();
    const isChange = valueLength >= question.minNumberOfWords;

    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: [],
                    answer: value,
                },
            })
        );
    }, [isChange]);
    return (
        <StyledContainerRespond>
            <h4 className="question-title">{question.title}</h4>
            <StyledContaiter>
                <StyledTextStatement>{question.statement}</StyledTextStatement>
                <TextArea
                    width="382px"
                    rows={7}
                    value={value}
                    onChange={(e) => setValue(e.target.value.replace(/\s{2,}/g, " "))}
                    placeholder="Your response"
                />
            </StyledContaiter>
            <span>
                words: {valueLength} minWords: {question.minNumberOfWords}
            </span>
        </StyledContainerRespond>
    );
}

const StyledContainerRespond = styled.div`
    text-align: center;
    span {
        :nth-child(3) {
            margin-left: 110px;
        }
    }
`;
const StyledContaiter = styled.div`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;
const StyledTextStatement = styled.div`
    width: 329px;
    text-align: start;
    font-size: 18px;
    color: #4c4859;
`;
