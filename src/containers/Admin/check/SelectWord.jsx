import React from "react";

import CheckBox from "components/UI/Checkbox";
import styled from "styled-components";

function SelectWord({ options, userOptionsAnswer }) {
    return (
        <StyledSection>
            <StyledOptions>
                {options.map((option, index) => (
                    <div key={option.id}>
                        <div>
                            <p>{index + 1}</p>
                            <p>{option.option}</p>
                        </div>
                        <div>
                            <CheckBox boxcolor="#2AB930" value={option.isTrue} />
                        </div>
                    </div>
                ))}
            </StyledOptions>
            <StyledAnswers>
                <p>User&apos;s answers</p>
                <div>
                    {userOptionsAnswer.map((option, index) => (
                        <div key={option.id}>
                            <div>
                                <p>{index + 1}</p>
                                <p>{option.option}</p>
                            </div>
                            <div>
                                <CheckBox boxcolor="#2AB930" value={option.isTrue} />
                            </div>
                        </div>
                    ))}
                </div>
            </StyledAnswers>
        </StyledSection>
    );
}

export default SelectWord;

const StyledSection = styled.section`
    width: 830px;
`;

const StyledOptions = styled.div`
    width: 100%;
    display: flex;
    gap: 18px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 46px;
    & > div {
        width: 234px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1.53px solid #d4d0d0;
        border-radius: 8px;
        padding: 15px;
        background: #ffffff;
        div {
            display: flex;
            gap: 16px;
        }
    }
`;

const StyledAnswers = styled.div`
    width: 100%;
    flex-wrap: wrap;
    p {
        font-weight: 500;
        font-size: 18px;
        color: #4c4859;
    }
    & > div {
        display: flex;
        margin-top: 16px;
        gap: 16px;
    }
    & > div > div {
        border: 1.53px solid #d4d0d0;
        border-radius: 8px;
        width: 234px;
        display: flex;
        height: 46px;
        align-items: center;
        padding: 10px;

        div:first-child {
            display: flex;
            width: 100%;
            gap: 14px;
        }
    }
`;
