import React from "react";

import styled from "styled-components";

function DataInput({ onChange, value, ...props }) {
    return (
        <StyledDataInput>
            <StyledText error={props.error}>
                Узактыгы <span>(мүнөт менен)</span>
            </StyledText>
            <StyledInput error={props.error} type="time" value={value} onChange={onChange} />
        </StyledDataInput>
    );
}
const StyledDataInput = styled.div`
    input[type="time"]::-webkit-calendar-picker-indicator {
        display: none;
    }
`;
const StyledInput = styled.input`
    width: 99px;
    height: 46px;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    font-family: "DINNextRoundedLTW01-Regular";
    padding-left: 30px;
    border-color: ${(props) => (props.error ? "red" : "")};
    color: ${(props) => (props.error ? "red" : "")};
`;
const StyledText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: ${(props) => (props.error ? "red" : "")};
    span {
        display: block;
        white-space: nowrap;
    }
`;
export default DataInput;
