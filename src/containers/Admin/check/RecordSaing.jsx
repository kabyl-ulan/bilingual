import React from "react";

import { ButtonUi } from "components/UI";

import styled from "styled-components";

import PlayRadio from "../../../assets/icons/PlayAudio.svg";

function RecordSaing({
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
    const audioPlay = () => {
        const audio = new Howl({
            src: link,
            html5: true,
            onend: () => {
                setIsAudioStop(true);
            },
        });
        if (dataField.file) {
            setIsAudioStop(false);
        }
        if (isAudioStop) {
            audio.play();
        }
    };

    return (
        <>
            <Audio>
                <ButtonUi onClick={audioPlay} variant="contained">
                    <img src={PlayRadio} alt="" />
                    PLAY AUDIO
                </ButtonUi>
                <p>Correct ansver: {correctAnswer}</p>
            </Audio>
            <Box>
                <h3>User Answer</h3>
                <p>{userAnswer}</p>
            </Box>
        </>
    );
}
export default RecordSaing;
const Audio = styled.div`
    display: flex;
    p {
        margin-left: 18px;
        font-size: 16px;
        display: flex;
        align-items: center;
        color: #4c4859;
    }
    img {
        margin-right: 8px;
    }
`;

const Box = styled.div`
    margin-top: 15px;
    p {
        margin-top: 7px;
    }
`;
