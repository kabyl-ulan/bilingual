import React from "react";

import { FormControlLabel, RadioGroup, Radio } from "@mui/material";

import { styled } from "@mui/material/styles";

function RadioButton({ onChange, value, label, radioValue }) {
    return (
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            onChange={onChange}
            value={radioValue}
            name="radio-buttons-group">
            <FormControlLabel value={value} control={<StyleRadio />} label={label} />
        </RadioGroup>
    );
}

export default RadioButton;

const StyleRadio = styled(Radio)`
    &.MuiButtonBase-root {
        width: 18px;
        height: 18px;
        margin: 10px;
        color: #9a9a9a;
    }
    &.Mui-checked {
        width: 18px;
        height: 18px;
        margin: 10px;
        color: #3a10e5;
    }
`;
