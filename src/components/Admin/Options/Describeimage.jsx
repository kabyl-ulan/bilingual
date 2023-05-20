import React from "react";

import { baseAxios } from "api/axios-config";
import { ButtonUi, ImagePickerUi, InputUi } from "components/UI";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatToMinute } from "services/format";
import validateInput from "services/inputValidate";
import { sendingQuestion, updateQuestionWithId } from "store/slices/questionSlice";
import styled from "styled-components";

export default function DescribeImage({ data, setIsErrorInput }) {
    const [img, setImg] = React.useState({ src: null, alt: "" });
    const [corrAnswer, setCorrAnswer] = React.useState("");

    const { isUpdatePage, typeQuestion, setMainQuestion, mainQuestion } =
        React.useContext(QuestionContext);

    const handleImg = async (e) => {
        const formData = new FormData();
        formData.append("file", e);
        const imgLink = await baseAxios.post(
            "http://ec2-54-93-233-9.eu-central-1.compute.amazonaws.com/api/static",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        setImg((prev) => {
            return {
                ...prev,
                src: imgLink.data.link,
                alt: e.path,
            };
        });
    };
    const navigate = useNavigate();

    const { id } = useParams();

    const dispatch = useDispatch();

    if (isUpdatePage && mainQuestion) {
        React.useEffect(() => {
            setImg((prev) => {
                const alt = mainQuestion?.content.split("/")[3];

                return {
                    ...prev,
                    src: mainQuestion.content,
                    alt,
                };
            });
            setCorrAnswer(mainQuestion.correctAnswer);
        }, []);
    }
    const saveData = async (req) => {
        if (validateInput(data, setIsErrorInput)) return;
        const min = data.duration.split(":")[0];
        const sec = data.duration.split(":")[1];
        const duration = formatToMinute(+min, +sec);
        const dataQuestion = {
            testId: id,
            title: data.title,
            duration,
            correctAnswer: corrAnswer,
            contentRequest: {
                contentType: "IMAGE",
                content: img.src,
            },
            questionType: typeQuestion.value || typeQuestion,
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
                            content: img.src,
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
        <Main>
            <Wrapper>
                <Row>
                    <ImagePickerUi defaultValue={img.src} getImages={handleImg} />
                    <h4>{img.alt ? img.alt : "File_name_of_the_image_file.jpg"}</h4>
                </Row>
                <Box>
                    <span>Correct answer</span>
                    <InputUi
                        forInput={{ defaultValue: mainQuestion?.correctAnswer }}
                        handleChange={(e) => setCorrAnswer(e.target.value)}
                    />
                </Box>
            </Wrapper>
            <BottomActionBtn>
                <ButtonUi onClick={() => navigate(-1)} variant="outlined">
                    GO BACK
                </ButtonUi>
                <ButtonUi
                    onClick={() => saveData(isUpdatePage ? "update" : "save")}
                    variant="contained"
                    color="success">
                    САКТОО
                </ButtonUi>
            </BottomActionBtn>
        </Main>
    );
}

const Main = styled.div`
    margin: 0 auto;
`;

const BottomActionBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 32px;
    font-weight: bold;
`;

const Wrapper = styled.div``;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 0 40px;
    h4 {
        color: #4c4859;
        font-weight: 400;
        font-size: 16px;
    }
`;

const Box = styled.div`
    margin-top: 24px;
    span {
        display: block;
        margin-bottom: 12px;
    }
`;
