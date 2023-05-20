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
                <h4>User&apos;s Answer</h4>
                <Respon>
                    <span>Respond: </span>
                    <p>
                        &quot;But I must explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you a complete account
                        of the system. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam But I must
                        explain to you how all this mistaken idea of denouncing pleasure and
                        praising pain was born and I will give you a complete account of the system.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam &quot;
                    </p>
                </Respon>
                <NumOfWords>Number of words: 39</NumOfWords>
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
