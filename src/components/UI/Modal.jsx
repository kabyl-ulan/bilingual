import React from "react";

import { Modal } from "@mui/material";

import Box from "@mui/material/Box";

import styled from "styled-components";

export default function BasicModal({ handleClose, open, children }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <StyleForBox>{children}</StyleForBox>
        </Modal>
    );
}

const StyleForBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%);
    background: #ffffff;
    box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
    border-radius: 10px;
    outline: none;
`;
