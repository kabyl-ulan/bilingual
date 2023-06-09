import React from "react";

import styled from "styled-components";

function Responds({
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
        <Main>
            <Box>
                <h4>Колдонуучунун жообу</h4>
                <Respon>
                    <span>Жооп: </span>
                    <p>&quot;{userAnswer} &quot;</p>
                </Respon>
                <NumOfWords>Сөздөрдүн саны: {userNumberOfPlays}</NumOfWords>
            </Box>
        </Main>
    );
}

export default Responds;

const Main = styled.div``;
const Box = styled.div`
    h4 {
        font-weight: 500;
        font-size: 18px;
        color: #4c4859;
    }
`;
const Respon = styled.div`
    margin-top: 14px;
    display: flex;
    gap: 7px;

    p {
        color: #3a10e5;
    }
`;
const NumOfWords = styled.p`
    margin-top: 12px;
`;
