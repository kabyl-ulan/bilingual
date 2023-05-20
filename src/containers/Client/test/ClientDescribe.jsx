import React from "react";

import TextArea from "components/UI/TextArea";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addAnswer } from "store/slices/clientSlice";
import styled from "styled-components";

export default function ClientDescribe({ question }) {
    const dispatch = useDispatch();
    const [text, setText] = React.useState("");
    const { id } = useParams();

    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: [],
                    answer: text,
                },
            })
        );
    }, [text, question.id]);
    React.useEffect(() => {
        setText("");
    }, [question.id]);

    return (
        <>
            <StyledForTitle>
                <h4 className="question-title">{question.title}</h4>
            </StyledForTitle>
            <StyledForImage>
                <img width="202px" height="193px" src={question.content} alt="" />
                <TextArea
                    width="382px"
                    placeholder=" Your response "
                    rows="7"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </StyledForImage>
        </>
    );
}
const StyledForImage = styled.div`
    height: 183px;
    width: 594px;
    margin: auto;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    img {
        object-fit: cover;
        border-radius: 6px;
    }
`;
const StyledForTitle = styled.div`
    margin-bottom: 50px;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    color: #4c4859;
`;
