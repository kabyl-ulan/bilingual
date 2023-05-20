import { questionType, questionTypeList } from "constants/questionType";

import React from "react";

import {
    SelectWord,
    DescribeImage,
    ListenWords,
    Respond,
    TypeHear,
    TypeRecord,
    Highlight,
    BestTitle,
    MainIdea,
} from "components/Admin/Options";

import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { getQuestionWithId } from "store/slices/questionSlice";

import ListenSelectTest from "../../../components/LayoatCard";

const {
    DESCRIBE_IMAGE,
    LISTEN_WORDS,
    RESPOND,
    SELECT_WORDS,
    TYPE_HEAR,
    TYPE_RECORD,
    BEST_TITLE,
    HIGLIGHT_ANSWER,
    SELECT_IDEA,
} = questionType;

export const QuestionContext = React.createContext();

function CreateQuestion() {
    // const updateQuestion = useSelector((state) => state.question.questions);
    const [typeQuestion, setTypeQuestion] = React.useState(questionTypeList[0]);
    const [mainQuestion, setMainQuestion] = React.useState(null);
    const [Component, setComponent] = React.useState(<SelectWord />);
    const { id } = useParams();
    const dispatch = useDispatch();

    const isUpdatePage = window.location.pathname.includes("update-question");

    const setTypeQuestionMemo = React.useMemo(() => {
        return {
            setTypeQuestion,
            isUpdatePage,
            typeQuestion,
            mainQuestion,
            setMainQuestion,
        };
    });

    React.useEffect(() => {
        const pathName = window.location.pathname.split("/");
        if (pathName.includes("update-question")) {
            dispatch(getQuestionWithId(id))
                .unwrap()
                .then((res) => {
                    setMainQuestion(res);
                    setTypeQuestion(res.questionType);
                });
        }
    }, []);

    React.useEffect(() => {
        if ((isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === SELECT_WORDS)
            setComponent(<SelectWord />);
        else if (
            (isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === DESCRIBE_IMAGE
        )
            setComponent(<DescribeImage />);
        else if ((isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === LISTEN_WORDS)
            setComponent(<ListenWords />);
        else if ((isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === RESPOND)
            setComponent(<Respond />);
        else if ((isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === TYPE_HEAR)
            setComponent(<TypeHear />);
        else if ((isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === TYPE_RECORD)
            setComponent(<TypeRecord />);
        else if (
            (isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === HIGLIGHT_ANSWER
        )
            setComponent(<Highlight />);
        else if ((isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === SELECT_IDEA)
            setComponent(<MainIdea />);
        else if ((isUpdatePage ? mainQuestion?.questionType : typeQuestion.value) === BEST_TITLE)
            setComponent(<BestTitle />);
    }, [typeQuestion]);
    return (
        <QuestionContext.Provider value={setTypeQuestionMemo}>
            <ListenSelectTest>{Component}</ListenSelectTest>
        </QuestionContext.Provider>
    );
}

export default CreateQuestion;
