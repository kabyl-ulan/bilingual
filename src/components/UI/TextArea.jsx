import React from "react";

import { TextField } from "@mui/material";

import styled from "styled-components";

export default function TextArea({ width, value, onChange, placeholder, rows, ...props }) {
    return (
        <Textarea
            width={width}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            multiline
            minRows={rows}
            {...props}
        />
    );
}

const Textarea = styled(TextField)`
    width: ${(p) => p.width};
    font-family: "poppins-bold", sans-serif !important;
    padding: 60px;
    resize: none;

    & .MuiInputBase-root {
        border-radius: 8px;
    }
`;
