import React from "react";

import { Add } from "@mui/icons-material";
import { ButtonUi, CheckboxUi } from "components/UI";
import MainIdeaItem from "components/UI/MainIdeaItem";
import ModalAdminLayot from "components/UI/ModalAdminLayot";
import TextArea from "components/UI/TextArea";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import validateInput from "services/inputValidate";
import { deleteOption } from "store/slices/option-slice";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

export default function BestTitle({ data, setIsErrorInput }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [passage, setPassage] = React.useState("");
    const [radioValue, setReadioValue] = React.useState("");
    const [newCard, setNewCard] = React.useState([]);
    const [updateOptionsId, setUpdateOptionsId] = React.useState([]);
    const [optionField, setOptionField] = React.useState({
        option: "",
        isTrue: false,
    });
    const [dataCard, setDataCard] = React.useState([]);

    const handleModalClick = () => {
        setDataCard((prev) => [...prev, optionField]);
        setNewCard((prev) => [...prev, optionField]);
        setIsOpen(false);
    };
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { setMainQuestion, mainQuestion, typeQuestion, isUpdatePage } =
        React.useContext(QuestionContext);

    const saveData = async (req) => {
        if (validateInput(data, setIsErrorInput)) return;
        const min = data.duration.split(":")[0];
        const sec = data.duration.split(":")[1];
        const duration = formatToMinute(+min, +sec);
        const option = isUpdatePage ? "optionRequests" : "options";

        const dataQuestion = {
            testId: +id,
            title: data.title,
            duration,
            contentRequest: {
                contentType: "TEXT",
                content: "string",
            },
            questionType: typeQuestion.value,
            passage,
            numberOfReplays: 10,
            minNumberOfWords: 10,
            willDelete: [0],
            willUpdate: [0],
            [option]: isUpdatePage ? newCard : dataCard,
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
                        dataInfo: { ...dataQuestion, willDelete: [0], willUpdate: updateOptionsId },
                    })
                )
            );
            navigate(-1);
        }
    };

    if (mainQuestion && isUpdatePage) {
        React.useEffect(() => {
            setPassage(mainQuestion.passage);
            setDataCard(mainQuestion.optionResponseList);
        }, []);
    }

    const handleRadioChange = (e, idx) => {
        setDataCard((prevState) => {
            const newState = prevState.map((item) => {
                return item.option === e.target.value
                    ? { ...item, isTrue: true }
                    : { ...item, isTrue: false };
            });
            return newState;
        });
        setNewCard((prevState) => {
            const newState = prevState.map((item) => {
                return item.option === e.target.value
                    ? { ...item, isTrue: true }
                    : { ...item, isTrue: false };
            });
            return newState;
        });
        setReadioValue(e.target.value);
        if (isUpdatePage) {
            setUpdateOptionsId((prev) => {
                if (!prev.includes(idx)) return [idx];
                const findIndex = prev.findIndex((item) => item === idx);
                prev.splice(findIndex, 1);
                return prev;
            });
        }
    };
    const handleDelete = (idx, option) => {
        if (idx) {
            dispatch(deleteOption(idx));
        }
        setDataCard(dataCard.filter((item) => item.option !== option));
        setNewCard(newCard.filter((item) => item.option !== option));
    };

    return (
        <Main>
            <ModalAdminLayot
                onClick={handleModalClick}
                onChange={(e) => setOptionField((prev) => ({ ...prev, option: e.target.value }))}
                isOpen={isOpen}
                setIsOpen={setIsOpen}>
                <div style={{ marginTop: "20px" }}>
                    <span style={{ marginRight: "10px" }}>Вариант туурабы?</span>
                    <CheckboxUi
                        boxcolor="#2AB930"
                        value={optionField.isTrue}
                        onChange={() =>
                            setOptionField((prev) => ({ ...prev, isTrue: !prev.isTrue }))
                        }
                    />
                </div>
            </ModalAdminLayot>
            <Wrapper>
                <Block>
                    <h4>Текст</h4>
                    <TextArea
                        onChange={(e) => setPassage(e.target.value)}
                        value={passage}
                        rows={5}
                        width="100%"
                    />
                </Block>
                <div style={{ textAlign: "right", marginTop: "32px" }}>
                    <ButtonUi
                        color="primary"
                        variant="contained"
                        icon={<Add />}
                        text="ВАРИАНТ КОШУУ"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </Wrapper>
            <Row>
                {dataCard.length > 0 &&
                    dataCard.map((item, idx) => {
                        return (
                            <MainIdeaItem
                                key={Symbol(idx).toString()}
                                id={item.id}
                                onChange={(e) => handleRadioChange(e, item.id)}
                                radioValue={
                                    isUpdatePage ? (item.isTrue ? item.option : "") : radioValue
                                }
                                index={idx + 1}
                                text={item.option}
                                onDelete={handleDelete}
                            />
                        );
                    })}
            </Row>
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

const Main = styled.div``;
const Wrapper = styled.div``;
const Block = styled.div`
    h4 {
        font-weight: 500;
        font-size: 16px;
        color: #4c4859;
        margin-bottom: 12px;
    }
`;

const Row = styled.div`
    margin-top: 22px;
    max-height: 530px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #3a10e5;
        border-radius: 10px;
    }
`;
const StyledContainerMiniMiniBoss = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding-top: 32px;
`;
