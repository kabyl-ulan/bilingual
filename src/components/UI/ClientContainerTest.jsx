import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

import { ButtonUi } from ".";

import BasicModal from "./Modal";

function ClientContainerTest({ children }) {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const logOut = () => {
        navigate(`/home/tests/${id}`);
    };

    return (
        <StyledMain>
            <StyeldDivBtn>
                <StyledButton onClick={() => setOpenModal(true)}>QUITE TEST</StyledButton>
            </StyeldDivBtn>
            <BasicModal open={openModal}>
                <StyledBoxModal>
                    <p>Are you sure you want to leave your practice test?</p>
                    <div>
                        <ButtonUi onClick={logOut} variant="outlined">
                            QUIT TEST
                        </ButtonUi>
                        <ButtonUi onClick={() => setOpenModal(false)} variant="contained">
                            COUNTINUE TEST
                        </ButtonUi>
                    </div>
                </StyledBoxModal>
            </BasicModal>
            <StyledSection>{children}</StyledSection>
        </StyledMain>
    );
}

export default ClientContainerTest;

const StyledMain = styled.main`
    min-height: 100vh;
    background: #d7e1f8;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledSection = styled.div`
    margin: 40px 0;
`;

const StyeldDivBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const StyledBoxModal = styled.div`
    margin: 36px 32px;
    p {
        font-weight: 400;
        font-size: 16px;
        color: #4c4859;
        margin-bottom: 24px;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;

const StyledButton = styled.button`
    width: 135px;
    height: 40px;
    margin: 20px 40px 0 0;
    background: #ffffff;
    border: 2px solid #4c4859;
    box-shadow: 0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2);
    border-radius: 8px;
    padding: 13px 24px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
