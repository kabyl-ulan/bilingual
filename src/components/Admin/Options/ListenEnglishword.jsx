import React, { useState } from "react";

import Add from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { baseAxios } from "api/axios-config";
import { ButtonUi } from "components/UI";
import CheckBox from "components/UI/Checkbox";
import ListenWordItem from "components/UI/ListenWordItem";
import Loader from "components/UI/Loader";
import ModalAdminLayot from "components/UI/ModalAdminLayot";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import validateInput from "services/inputValidate";
import { deleteOption } from "store/slices/option-slice";

import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

function ListenEnglishWord({ data, setIsErrorInput }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dataCard, setDataCard] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [newCard, setNewCard] = useState([]);
    const [file, setFile] = useState();
    const [checkBoxValue, setCheckBoxValue] = React.useState(false);
    const [dataFile, setDataFile] = useState({});
    const [updateWithId, setUpdateWithId] = useState([]);

    const navigate = useNavigate();

    const handleClick = async () => {
        const formData = new FormData();
        formData.append("file", file);
        const audioLink = await baseAxios.post(
            "http://ec2-54-93-233-9.eu-central-1.compute.amazonaws.com/api/static",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        setDataCard((prev) => [...prev, { option: audioLink.data.link, isTrue: checkBoxValue }]);
        setNewCard((prev) => [...prev, { option: audioLink.data.link, isTrue: checkBoxValue }]);
        setIsOpen(false);
    };

    const { id } = useParams();

    const { mainQuestion, typeQuestion, isUpdatePage, setMainQuestion } =
        React.useContext(QuestionContext);

    const dispatch = useDispatch();

    if (isUpdatePage && mainQuestion) {
        React.useEffect(() => {
            setDataCard(mainQuestion.optionResponseList);
        }, []);
    }
    const saveData = async (req) => {
        setIsLoad(true);
        if (validateInput(data, setIsErrorInput)) return;
        const hour = data.duration.split(":")[0];
        const min = data.duration.split(":")[1];
        const duration = formatToMinute(hour, min);
        const option = isUpdatePage ? "optionRequests" : "options";
        const dataQuestion = {
            testId: +id,
            title: data.title,
            duration,
            contentRequest: {
                contentType: "AUDIO",
                content: "string",
            },
            willDelete: [0],
            willUpdate: updateWithId,
            questionType: typeQuestion.value || typeQuestion,
            [option]: isUpdatePage ? newCard : dataCard,
        };
        if (req === "save") {
            setMainQuestion(dataQuestion);
            dispatch(sendingQuestion(dataQuestion))
                .unwrap()
                .then(() => {
                    setIsLoad(false);
                    navigate(-1);
                })
                .catch(() => {
                    setIsLoad(false);
                    navigate(-1);
                });
        } else if (req === "update") {
            dispatch(updateQuestionWithId((data = { id, dataInfo: dataQuestion })));
            navigate(-1);
            setIsLoad(false);
        }
        setIsOpen(false);
    };
    const delOption = (idx) => {
        if (idx?.id) {
            dispatch(deleteOption(idx.id));
        }
        setDataCard(dataCard.filter((item) => item.option !== idx.option));
        setNewCard(newCard.filter((item) => item.option !== idx.option));
    };

    const handleUpdate = (e) => {
        if (isUpdatePage) {
            setUpdateWithId((prevState) => {
                if (!prevState.includes(e)) return [...prevState, e];
                const itemIndex = prevState.findIndex((item) => item === e);
                prevState.splice(itemIndex, 1);
                return prevState;
            });
        }
    };

    return isLoad ? (
        <Loader />
    ) : (
        <Main>
            <ModalAdminLayot
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                onClick={handleClick}
                onChange={(e) =>
                    setDataFile((prev) => {
                        return {
                            ...prev,
                            option: e.target.value,
                        };
                    })
                }>
                <StyledContainerGlav>
                    <Button
                        variant="outlined"
                        style={{ marginTop: 25, marginBottom: 10, width: "159px", height: "46px" }}
                        component="label">
                        Жүктөө
                        <input
                            hidden
                            accept="audio/*"
                            onChange={(e) => setFile(e.target.files[0])}
                            multiple
                            type="file"
                        />
                    </Button>
                    <span>
                        {dataFile.audio === "" ? "File name of the audio file" : dataFile.audio}
                    </span>
                </StyledContainerGlav>
                <CheckBoxMain>
                    <span>Чыныгы вариантпы?</span>
                    <CheckBox
                        boxcolor="green"
                        value={checkBoxValue}
                        onChange={() => setCheckBoxValue(!checkBoxValue)}
                    />
                </CheckBoxMain>
            </ModalAdminLayot>
            <div style={{ textAlign: "right" }}>
                <ButtonUi
                    onClick={() => setIsOpen(true)}
                    text="ВАРИАНТТАРДЫ КОШУУ"
                    color="primary"
                    variant="contained"
                    icon={<Add />}
                />
            </div>
            <Wrapper>
                <Row>
                    {dataCard.map((item) => {
                        return (
                            <ListenWordItem
                                id={item.id}
                                key={item.id || item.option}
                                audio={item.option}
                                updateCheckbox={handleUpdate}
                                option={item.option}
                                isTrue={item.isTrue}
                                del={delOption}
                            />
                        );
                    })}
                </Row>
            </Wrapper>
            <StyledContainerMiniMiniBoss>
                <ButtonUi onClick={() => navigate(-1)} variant="outlined">
                    АРТКА
                </ButtonUi>
                <ButtonUi
                    onClick={() => saveData(isUpdatePage ? "update" : "save")}
                    variant="contained"
                    color="success">
                    САКТОО
                </ButtonUi>
            </StyledContainerMiniMiniBoss>
        </Main>
    );
}

export default ListenEnglishWord;

const Main = styled.div``;

const CheckBoxMain = styled.div`
    margin-top: 40px;
    span {
        margin-right: 10px;
    }
`;

const StyledContainerGlav = styled.div`
    width: 410px;
    height: 46px;
    span {
        position: absolute;
        top: 170px;
        left: 240px;
    }
`;

const StyledContainerMiniMiniBoss = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding-top: 32px;
`;

const Wrapper = styled.div`
    margin-top: 22px;
`;
const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 19px;
`;
