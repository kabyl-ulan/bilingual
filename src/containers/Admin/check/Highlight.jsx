import React from "react";

import styled from "styled-components";

function Highlight({
    id,
    correctAnswer,
    duration,
    fullName,
    testTitle,
    link,
    minNumberOfReplays,
    minNumberOfWords,
    options,
    passage,
    questionTitle,
    questionType,
    scoreOfQuestion,
    statement,
    userAnswer,
    userNumberOfPlays,
    userOptionsAnswer,
}) {
    return (
        <Box>
            <div>
                <h4>Текст: </h4>
                <p>{passage}</p>
                <h4>Колдонуучунун жообу:</h4>
                <p>{userAnswer}</p>
            </div>
        </Box>
    );
}

export default Highlight;

const Box = styled.div`
    div {
        h4 {
            font-weight: 500;
            font-size: 18px;
            color: #3752b4;
            margin-top: 20px;
        }
        p {
            color: #4c4859;
        }
    }
`;
