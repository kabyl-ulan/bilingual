import React, { useState } from "react";

import { ButtonUi } from "components/UI";
import Input from "components/UI/Input";
import UICard from "components/UI/UICard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postQuestions } from "store/slices/adminTestActions";

import styled from "styled-components";

function CreateTest() {
    const [value, setValue] = useState({
        title: "",
        shortDescription: "",
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getTitleHandler = (event) => {
        setValue({ ...value, title: event.target.value });
    };

    const getDescriptionHandler = (event) => {
        setValue({ ...value, shortDescription: event.target.value });
    };

    const goToBackPage = () => {
        navigate("/admin/tests");
    };

    const sendingTestHandler = () => {
        if (!value.shortDescription && !value.title) return;
        dispatch(postQuestions(value));
        navigate("/admin/tests");
    };

    return (
        <StyledSection>
            <UICard
                cardWidth="100%"
                cardBorderRadius="20px"
                cardBoxShadow="0px 4px 39px rgba(196, 196, 196, 0.6)"
                marginBox="68px 230px">
                <StyledDiv>
                    <div>
                        <StyledTitle>Аталышы</StyledTitle>
                        <Input value={value.title} handleChange={getTitleHandler} />
                    </div>
                    <div>
                        <StyledTitle>Кыскача сүрөттөмө</StyledTitle>
                        <Input
                            value={value.shortDescription}
                            handleChange={getDescriptionHandler}
                        />
                    </div>
                    <StyledBtnDiv>
                        <ButtonUi variant="outlined" onClick={goToBackPage}>
                            АРТКА
                        </ButtonUi>
                        <ButtonUi variant="contained" color="success" onClick={sendingTestHandler}>
                            САКТОО
                        </ButtonUi>
                    </StyledBtnDiv>
                </StyledDiv>
            </UICard>
        </StyledSection>
    );
}

export default CreateTest;

const StyledSection = styled.section`
    width: 980px;
    margin: 0 auto;
`;

const StyledDiv = styled.div`
    width: 100%;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledTitle = styled.h5`
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #4c4859;
    margin-bottom: 12px;
`;

const StyledBtnDiv = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: end;
`;
