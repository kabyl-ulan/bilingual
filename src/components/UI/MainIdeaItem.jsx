import React from "react";

import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import DeleteIcon from "assets/icons/Delete.svg";
import styled from "styled-components";

import IconButtonStyled from "./IconButtonStyled";

export default function MainIdeaItem({ index, text, radioValue, onChange, onDelete, id }) {
    return (
        <Main>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={onChange}
                    value={radioValue}
                    name="radio-buttons-group">
                    <Box>
                        <Num>{index}</Num>
                        <Text>{text}</Text>
                        <Actions>
                            <FormControlLabel value={text} control={<Radio />} />
                            <IconButtonStyled
                                handleClick={() => onDelete(id, text)}
                                fontSize="24px"
                                Icon={DeleteIcon}
                            />
                        </Actions>
                    </Box>
                </RadioGroup>
            </FormControl>
        </Main>
    );
}

const Main = styled.div`
    margin-bottom: 16px;
    > div {
        width: 100%;
    }
`;
const Num = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #4c4859;
    line-height: 22px;
`;
const Box = styled.div`
    display: flex;
    gap: 26px;
    align-items: flex-start;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
    padding: 14px 16px;

    .MuiRadio-root {
        padding: 0 !important;
    }
`;
const Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4c4859;
    text-align: justify;
`;
const Actions = styled.div`
    display: flex;
    margin-left: auto;
`;
