import React from "react";

import SayingImg from "assets/images/saying.png";
import { ButtonUi } from "components/UI";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { addAnswer } from "store/slices/clientSlice";
import styled, { css, keyframes } from "styled-components";

export default function ClientRecordSaying({ question }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const startRecordSaying = () => {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true });
    };
    const stopRecordingSaying = () => {
        SpeechRecognition.stopListening();
    };
    React.useEffect(() => {
        dispatch(
            addAnswer({
                testId: +id,
                options: {
                    questionId: question.id,
                    optionAnswerId: [],
                    answer: transcript,
                },
            })
        );
    }, [transcript]);

    React.useEffect(() => {
        resetTranscript();
        SpeechRecognition.stopListening();
    }, [question.id]);

    return (
        <Main>
            <Box>
                <h4 className="question-title">{question.title}</h4>
                <Wrapp>
                    <Row>
                        <img src={SayingImg} alt={question.content} />
                        {/* <TextArea value={transcript} placeholder="Answer the question" /> */}
                        <span>{question.title}</span>
                    </Row>
                </Wrapp>
            </Box>
            <Actions>
                <AnimationPoint>
                    <Point isActive={!!listening} /> recordind...
                </AnimationPoint>
                <ButtonUi
                    onClick={() => (listening ? stopRecordingSaying() : startRecordSaying())}
                    text={listening ? "STOP RECORDING" : "RECORD NOW"}
                    variant="contained"
                    color="primary"
                />
            </Actions>
        </Main>
    );
}

const PointAnimate = keyframes`
 0% { opacity: 1 }
 50% { opacity: 0.2 }
 100% { opacity: 1 }
`;

const Wrapp = styled.div``;
const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    margin-bottom: 40px;
`;
const Main = styled.div``;
const Box = styled.div``;
const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const AnimationPoint = styled.div`
    text-transform: uppercase;
    etter-spacing: 0.075em;
    color: #3a10e5;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Point = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #3a10e5;
    display: block;

    ${(props) =>
        props.isActive
            ? css`
                  animation: ${PointAnimate} 1.2s linear infinite;
              `
            : ""}
`;
