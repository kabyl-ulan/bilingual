import React from "react";

import { TextField } from "@mui/material";

import styled, { css } from "styled-components";

const Input = ({
    colortext = "gray",
    colorlabeltextandborderandhover = "#3A10E5",
    handleChange,
    sx,
    value,
    forInput,
}) => {
    // FOR INPUT colorlabeltextandborderandhover
    return (
        <CssTextField
            sx={sx}
            onChange={handleChange}
            value={value}
            colortext={colortext}
            colorlabeltextandborderandhover={colorlabeltextandborderandhover}
            {...forInput}
            fullWidth
            id="custom-css-outlined-input"
        />
    );
};

const CssTextField = styled(TextField)`
    ${(props) => {
        return css`
    & input {
        color: ${props.colortext};
    }
    & label.Mui-focused {
        color: ${props.colorlabeltextandborderandhover};
    }
    & .MuiInput-underline:after {
        border-bottom-color green;
    }
    & .MuiOutlinedInput-root {
        & fieldset {
            border-color #BDBDBD;
        }
        &:hover fieldset {
            border-color: ${props.colorlabeltextandborderandhover};
        }
        &.Mui-focused fieldset {
            border-color: ${props.colorlabeltextandborderandhover};
        }
    }
    
    `;
    }}
`;

export default Input;
