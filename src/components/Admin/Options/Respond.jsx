import React from "react";

import { ButtonUi } from "components/UI";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import validateInput from "services/inputValidate";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

function Respond({ data, setIsErrorInput }) {
    const [dataField, setDataField] = React.useState({});
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
                contentType: "AUDIO",
                content: "string",
            },
            duration,
            questionType: typeQuestion.value || typeQuestion,
            statement: dataField.statement,
            numberOfReplays: 1,
            passage: "string",
            minNumberOfWords: +dataField.minNumberOfWords,
            correctAnswer: "string",
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
            dispatch(updateQuestionWithId((data = { id, dataInfo: dataQuestion })));
            navigate(-1);
        }
    };
    if (isUpdatePage && mainQuestion) {
        React.useEffect(() => {
            setDataField({
                statement: mainQuestion.statement,
                numberOfReplays: mainQuestion.numberOfReplays,
            });
        }, []);
    }
    return (
        <StyledContainerRespond>
            <StyledContainer>
                <StyledText>Суроонун тапшырмасы</StyledText>
                <StyledInput
                    value={dataField.statement}
                    onChange={(e) =>
                        setDataField((prev) => {
                            return {
                                ...prev,
                                statement: e.target.value,
                            };
                        })
                    }
                />
                <NumOfReplace>
                    <h3>Сөздөрдүн саны</h3>
                    <input
                        type="number"
                        value={+dataField.minNumberOfWords || 1}
                        onChange={(e) =>
                            setDataField((prev) => {
                                return {
                                    ...prev,
                                    minNumberOfWords: e.target.value,
                                };
                            })
                        }
                    />
                </NumOfReplace>
            </StyledContainer>
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
        </StyledContainerRespond>
    );
}
const StyledContainerRespond = styled.div``;
const StyledContainer = styled.div`
    width: 820px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 24px;
`;
const NumOfReplace = styled.div`
    max-width: 80px;
    margin-top: 27px;
    h3 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 12px;
    }
    input {
        width: 49px;
        height: 42px;
        border: 1.53px solid #d4d0d0;
        border-radius: 8px;
        outline: none;
        font-size: 16px;
        text-align: center;
    }
`;
const StyledText = styled.span`
    margin-bottom: 12px;
`;
const StyledInput = styled.input`
    width: 820px;
    height: 46px;
    padding: 14px 0 14px 16px;
    border: 1.53px solid #d5d0d0;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    border: 1px solid #d4d0d0;

    :hover {
        border: 1px solid #3a10e5;
    }
    :focus {
        border: 2px solid #3a10e5;
    }
`;
const StyledContainerMiniMiniBoss = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding-top: 32px;
`;
export default Respond;
