import React from "react";

import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/material/styles";

function CheckBox({ onChange, value, boxcolor }) {
    return <StyledCheckbox onChange={onChange} boxcolor={boxcolor} defaultChecked={value} />;
}

export default CheckBox;

const StyledCheckbox = styled(Checkbox)`
    &.MuiCheckbox-root {
        width: 18px;
        height: 18px;
        color: #9a9a9a;
    }
    &.Mui-checked {
        color: ${(props) => props.boxcolor};
    }
`;
