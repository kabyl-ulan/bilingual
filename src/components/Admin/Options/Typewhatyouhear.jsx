import React from "react";

import { Button } from "@mui/material";
import { baseAxios } from "api/axios-config";
import { ButtonUi } from "components/UI";
import IconButtonStyled from "components/UI/IconButtonStyled";

import Input from "components/UI/Input";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { Howl } from "howler";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import validateInput from "services/inputValidate";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";

import styled from "styled-components";

import PauseIcon from "../../../assets/icons/Pause.svg";
import PlayIcon from "../../../assets/icons/PlayIcon.svg";

function Typewhatyouhear({ data, setIsErrorInput }) {
    const { isUpdatePage, typeQuestion, setMainQuestion, mainQuestion } =
        React.useContext(QuestionContext);

    const { id } = useParams();

    const dispatch = useDispatch();

    const [isAudioStop, setIsAudioStop] = React.useState(true);
    const [dataField, setDataField] = React.useState({
        replaceNum: mainQuestion ? mainQuestion.numberOfReplays : 1,
        file: mainQuestion ? mainQuestion.content : null,
        corrAnswer: mainQuestion ? mainQuestion.correctAnswer : "",
    });

    const handleAudio = async (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        const audioLink = await baseAxios.post("static", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setDataField((prev) => {
            return {
                ...prev,
                file: audioLink.data.link,
            };
        });
    };
    const navigate = useNavigate();

    const audioPlay = () => {
        const audio = new Howl({
            src: dataField.file,
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
    const saveData = async (req) => {
        if (validateInput(data, setIsErrorInput)) return;
        const min = data.duration.split(":")[0];
        const sec = data.duration.split(":")[1];
        const duration = formatToMinute(+min, +sec);

        const dataQuestion = {
            testId: id,
            title: data.title,
            duration,
            contentRequest: {
                contentType: "AUDIO",
                content: dataField.file,
            },
            questionType: typeQuestion.value,
            numberOfReplays: dataField.replaceNum,
            correctAnswer: dataField.corrAnswer,
        };

        if (req === "save") {
            setMainQuestion(dataQuestion);
            dispatch(sendingQuestion(dataQuestion));
            navigate(-1);
        } else if (req === "update") {
            dispatch(
                updateQuestionWithId(
                    (data = {
                        id,
                        dataInfo: {
                            ...dataQuestion,
                            content: dataField.file,
                            willDelete: [0],
                            willUpdate: [0],
                            optionRequests: [
                                {
                                    option: "string",
                                    isTrue: true,
                                },
                            ],
                        },
                    })
                )
            );
            navigate(-1);
        }
    };
    return (
        <StlyedContainer>
            <StyledTitle>Кайталоолордун саны</StyledTitle>
            <StyledAudioBox>
                <StyledNumber>
                    <input
                        value={dataField.replaceNum}
                        onChange={(e) =>
                            setDataField((prev) => {
                                return {
                                    ...prev,
                                    replaceNum: e.target.value,
                                };
                            })
                        }
                        type="number"
                    />
                </StyledNumber>
                <Button
                    sx={{
                        bgcolor: "#3A10E5",
                        "&:hover": {
                            bgcolor: "#3A10E5",
                        },
                    }}
                    variant="contained"
                    component="label">
                    Жүктөө
                    <input hidden onChange={handleAudio} accept="audio/*" multiple type="file" />
                </Button>
                <StyledPause onClick={() => audioPlay()}>
                    <IconButtonStyled Icon={isAudioStop ? PlayIcon : PauseIcon} />
                </StyledPause>
                <p>{dataField.file ? dataField.file.split("/")[3] : "Name audio file"}</p>
            </StyledAudioBox>
            <StyledAnswer>Туура жооп</StyledAnswer>
            <Input
                value={dataField.corrAnswer}
                handleChange={(e) =>
                    setDataField((prev) => {
                        return {
                            ...prev,
                            corrAnswer: e.target.value,
                        };
                    })
                }
            />
            <StyledBtnBox>
                <ButtonUi onClick={() => navigate(-1)} variant="outlined">
                    АРТКА
                </ButtonUi>
                <ButtonUi
                    onClick={() => saveData(isUpdatePage ? "update" : "save")}
                    variant="contained"
                    color="success">
                    САКТОО
                </ButtonUi>
            </StyledBtnBox>
        </StlyedContainer>
    );
}

export default Typewhatyouhear;

const StlyedContainer = styled.div`
    width: 100%;
    background: #ffffff;
`;
const StyledTitle = styled.h1`
    width: 80px;
    font-weight: 500;
    font-size: 16px;
    color: #4c4859;
    display: flex;
    justify-content: start;
`;
const StyledAudioBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 12px 0 24px 0;
`;
const StyledNumber = styled.div`
    width: 49px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;

    input {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 8px;
        outline: none;
        text-align: center;
        font-size: 18px;
    }
`;
const StyledPause = styled.div`
    width: 46px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    outline: none;
    border: none;
    background: #3a10e5;
    border-radius: 8px;
    padding: 13px 24px;
    cursor: pointer;
`;
const StyledAnswer = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #4c4859;
    margin-bottom: 12px;
`;
const StyledBtnBox = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: end;
    margin-top: 32px;
`;
