import { questionTypeList } from "constants/questionType";

import React from "react";

import { QuestionContext } from "containers/Admin/pages/CreateQuestion";

import { convertHMS } from "services/format";
import styled from "styled-components";

import DataInput from "./UI/DataInput";

import DropDown from "./UI/DropDownUi";

import Input from "./UI/Input";

import Loader from "./UI/Loader";
import UICard from "./UI/UICard";

function ListenSelectTest({ children }) {
    const { mainQuestion, isUpdatePage } = React.useContext(QuestionContext);
    const [state, setState] = React.useState(questionTypeList[0]);
    const [isErrorInput, setIsErrorInput] = React.useState({ title: false, duration: false });
    const [data, setData] = React.useState({
        title: "",
        duration: "",
    });
    React.useEffect(() => {
        setData((prev) => {
            return {
                ...prev,
                title: mainQuestion?.title,
                duration: mainQuestion ? convertHMS(mainQuestion.duration) : 0,
            };
        });
    }, [mainQuestion]);

    if (!mainQuestion && isUpdatePage) {
        return <Loader />;
    }
    return (
        <StyledContainerBoss>
            <UICard cardWidth="100%" cardBorderRadius="20px">
                <StyledContainerMiniBoss>
                    <StyledContainerOne>
                        <StyledContainerOneOne>
                            <StyledText>Аты</StyledText>
                            <Input
                                forInput={{ error: isErrorInput.title }}
                                colortext="black"
                                value={data.title}
                                sx={{ width: "697px" }}
                                handleChange={(el) => {
                                    setData((prev) => {
                                        return {
                                            ...prev,
                                            title: el.target.value,
                                        };
                                    });
                                    setIsErrorInput((prev) => {
                                        return {
                                            ...prev,
                                            title: false,
                                        };
                                    });
                                }}
                            />
                        </StyledContainerOneOne>
                        <StyledContainerTwo>
                            <DataInput
                                value={data.duration}
                                onChange={(el) => {
                                    setData((prev) => {
                                        return {
                                            ...prev,
                                            duration: el.target.value,
                                        };
                                    });
                                    setIsErrorInput((prev) => {
                                        return {
                                            ...prev,
                                            duration: false,
                                        };
                                    });
                                }}
                                error={isErrorInput.duration}
                            />
                        </StyledContainerTwo>
                    </StyledContainerOne>
                    <StyledContainerThree>
                        <StyledContainerThreeOne>
                            <StyledText>Түрү</StyledText>
                        </StyledContainerThreeOne>
                        <DropDown
                            stylecss={{ width: "820px" }}
                            items={isUpdatePage ? [mainQuestion.questionType] : questionTypeList}
                            setDropState={setState}
                            dropState={state}
                        />
                    </StyledContainerThree>
                    <Child>{React.cloneElement(children, { data, setIsErrorInput })}</Child>
                </StyledContainerMiniBoss>
            </UICard>
        </StyledContainerBoss>
    );
}

const StyledContainerBoss = styled.div`
    width: 980px;
    margin: auto;
`;
const StyledContainerMiniBoss = styled.div`
    padding-left: 40px;
`;

const Child = styled.div`
    max-width: 820px;
`;

const StyledContainerOne = styled.div`
    width: 800px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledContainerOneOne = styled.div`
    width: 697px;
    height: 86px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledContainerTwo = styled.div`
    width: 80px;
    height: 86px;
    border-radius
`;
const StyledContainerThree = styled.div`
    width: 820px;
    margin-top: 24px;
    margin-bottom: 24px;
`;
const StyledContainerThreeOne = styled.div`
    width: 33px;
    height: 16px;
    margin-bottom: 12px;
`;
const StyledText = styled.span`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
`;
export default ListenSelectTest;
