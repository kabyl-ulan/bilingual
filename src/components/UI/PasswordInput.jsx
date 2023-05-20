import React, { useState } from "react";

import { IconButton, FormControl, InputLabel, OutlinedInput } from "@mui/material";

import { InputViewOff, InputViewOn } from "assets/icons/index";

import styled from "styled-components";

function PasswordInput({ onChange, sx, forInput }) {
    const [inputViewOnOff, setInputViewOnOff] = useState(false);

    function handleViewOnOff() {
        setInputViewOnOff((prevState) => !prevState);
    }
    return (
        <FormControl1 error={forInput.error} sx={sx}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput1
                {...forInput}
                onChange={onChange}
                type={inputViewOnOff ? "text" : "password"}
                endAdornment={
                    <IconButton onClick={() => handleViewOnOff()}>
                        {inputViewOnOff ? <InputViewOn /> : <InputViewOff />}
                    </IconButton>
                }
                label="Password"
            />
        </FormControl1>
    );
}

const OutlinedInput1 = styled(OutlinedInput)`
    width: 100%;
    height: 52px;
    color: #757575 !important;
`;
const FormControl1 = styled(FormControl)({
    width: "100%",
    height: "52px",
    "& > label": {
        color: (props) => props.error && "red",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#BDBDBD",
        },
        "&:hover fieldset": {
            borderColor: "#3A10E5",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#3A10E5",
        },
    },
});
export default PasswordInput;
