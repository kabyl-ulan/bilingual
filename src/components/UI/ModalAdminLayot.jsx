import React from "react";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import styled from "styled-components";

import ButtonUi from "./ButtonUi";

import ModalUi from "./Modal";

function ModalAdminLayot({ isOpen, setIsOpen, children, onChange, value, onClick }) {
    return (
        <ModalUi open={isOpen} setOpen={setIsOpen}>
            <StyledModalContainerBoss>
                <CloseButton onClick={() => setIsOpen(false)}>
                    <HighlightOffIcon color="disabled" />
                </CloseButton>
                <StyledModalContainerMiniBoss>
                    <StyledModalSpan>Аталышы</StyledModalSpan>
                    <StyledModalInput onChange={onChange} value={value} />
                </StyledModalContainerMiniBoss>
                {children}
            </StyledModalContainerBoss>
            <StyledModalContainer>
                <ButtonUi
                    variant="outlined"
                    maxwidth="105px"
                    maxheight="42px"
                    onClick={() => setIsOpen(false)}>
                    АРТКА
                </ButtonUi>
                <ButtonUi
                    onClick={onClick}
                    variant="contained"
                    color="success"
                    maxheight="42px"
                    maxwidth="82px">
                    САКТОО
                </ButtonUi>
            </StyledModalContainer>
        </ModalUi>
    );
}

const StyledModalContainerBoss = styled.div`
    padding: 50px 0;
`;

const CloseButton = styled.button`
    width: 22px;
    height: 22px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 14px;
    right: 22px;
    border-radius: 50%;
    cursor: pointer;
`;

const StyledModalSpan = styled.span`
    font-size: 16px;
    color: #4b4759;
`;
const StyledModalContainerMiniBoss = styled.div`
    width: 517px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledModalInput = styled.input`
    width: 517px;
    height: 46px;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
    padding: 14px 0 14px 16px;
    font-size: 16px;
    outline: none;
`;
const StyledModalContainer = styled.div`
    width: 637px;
    height: 94px;
    display: flex;
    gap: 16px;
    justify-content: end;
    align-items: center;
    padding-right: 60px;
    background-color: #f0f1f1;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;
export default ModalAdminLayot;
