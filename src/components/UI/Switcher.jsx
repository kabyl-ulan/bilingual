import React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const Switcher = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 35.2,
    height: 22,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 1.4,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(14.2px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.mode === "dark" ? "#65C466" : "#2AB930",
                opacity: 1,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 18,
        height: 19,
    },
    "& .MuiSwitch-track": {
        borderRadius: 46 / 2,
        duration: 500,
    },
}));

export default function SwitcherComp({ onChange, value }) {
    return (
        <FormGroup>
            <FormControlLabel onChange={onChange} control={<Switcher defaultChecked={value} />} />
        </FormGroup>
    );
}
