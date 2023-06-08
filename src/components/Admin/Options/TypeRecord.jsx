import React from "react";

import { ButtonUi, InputUi } from "components/UI";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import validateInput from "services/inputValidate";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

function TypeRecord({ data, setIsErrorInput }) {
    const [answer, setAnswer] = React.useState("");
    const { mainQuestion, typeQuestion, isUpdatePage, setMainQuestion } =
        React.useContext(QuestionContext);

    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const saveData = async (req) => {
        if (validateInput(data, setIsErrorInput)) return;

        const hour = data.duration.split(":")[0];
        const min = data.duration.split(":")[1];
        const duration = formatToMinute(hour, min);

        const dataQuestion = {
            testId: +id,
            title: data.title,
            contentRequest: {
                contentType: "TEXT",
                content: "string",
            },
            duration,
            statement: "string",
            questionType: typeQuestion.value || typeQuestion,
            correctAnswer: answer,
            passage: "string",
            numberOfReplays: 10,
            minNumberOfWords: 10,
            content: "string",
            willDelete: [0],
            willUpdate: [0],
            optionRequests: [
                {
                    option: "string",
                    title: "string",
                    isTrue: true,
                },
            ],
        };

        if (req === "save") {
            setMainQuestion(dataQuestion);
            dispatch(sendingQuestion(dataQuestion));
            navigate(-1);
        } else if (req === "update") {
            // console.log("update");
            dispatch(updateQuestionWithId((data = { id, dataInfo: dataQuestion })));
            navigate(-1);
        }
    };
    if (isUpdatePage && mainQuestion) {
        React.useEffect(() => {
            setAnswer(mainQuestion.correctAnswer);
        }, []);
    }
    return (
        <>
            <Main>
                <h3>Туура жооп</h3>
                <InputUi value={answer} handleChange={(e) => setAnswer(e.target.value)} />
            </Main>
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
        </>
    );
}

export default TypeRecord;
const StyledContainerMiniMiniBoss = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding-top: 32px;
`;
const Main = styled.div`
    h3 {
        margin-top: 24px;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
    }
`;
