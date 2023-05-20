import React from "react";

import { Chip as Chipp } from "@mui/material";

export default function Chip({ text, ...props }) {
    return <Chipp label={text} size="small" variant="outlined" {...props} />;
}
