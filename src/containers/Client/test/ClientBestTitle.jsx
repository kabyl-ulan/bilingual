import React, { useState } from "react";

import RadioButton from "components/UI/RadioButton";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addAnswer } from "store/slices/clientSlice";
import styled from "styled-components";

export default function ClientMainIdea({ question }) {
    const dispatch = useDispatch();
    const [radioValue, setRadioValue] = useState([]);

    const handleRadioChange = (e) => {
        const num = +e.target.value;
        setRadioValue([num]);
    };

    const { id } = useParams();
    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: radioValue,
                    answer: "",
                },
            })
        );
    }, [radioValue]);

    React.useEffect(() => {
        setRadioValue([]);
    }, [question.id]);

    return (
        <StyledSection>
            <StyledPassage>
                <p>PASSAGE</p>
                <hr />
                <p>{question.passage}</p>
            </StyledPassage>
            <StyledSelectPassage>
                <p>{question.title}</p>
                {question.optionResponseList.map((item) => (
                    <RadioButton
                        key={item.id}
                        onChange={handleRadioChange}
                        value={item.id}
                        label={item.option}
                        radioValue={radioValue}
                    />
                ))}
            </StyledSelectPassage>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    display: flex;
    gap: 40px;
`;

const StyledPassage = styled.div`
    width: 60%;
    background: #f7f7f7;
    border: 1px solid #d4d0d0;
    border-radius: 8px;
    p {
        font-size: 16px;
        font-weight: 400;
        color: #4c4859;
        margin: 18px 15px;
        line-height: 124%;
        word-break: break-all;
        ::first-letter {
            text-transform: capitalize;
        }
    }
`;

const StyledSelectPassage = styled.div`
    width: 40%;
    p {
        font-weight: 400;
        font-size: 26px;
        color: #4c4859;
        ::first-letter {
            text-transform: capitalize;
        }
    }
    div {
        display: flex;
        gap: 16px;
        background: #ffffff;
        border: 1px solid #d4d0d0;
        border-radius: 8px;
        padding: 12px;
        margin: 26px 0 14px 0;
        cursor: pointer;
        :hover {
            border: 1px solid #3a10e5;
            border-radius: 8px;
            background: rgba(58, 16, 229, 0.14);
        }
    }
`;
