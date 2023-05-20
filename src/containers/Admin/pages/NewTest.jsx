import React, { useEffect, useState } from "react";

import { ButtonUi } from "components/UI";
import Input from "components/UI/Input";
import UICard from "components/UI/UICard";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTestById, updateTest } from "store/slices/adminTestActions";
import styled from "styled-components";

function NewTest() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [newInputValue, setNewInputValue] = useState({
        title: "",
        shortDescription: "",
    });

    useEffect(() => {
        dispatch(getTestById(id))
            .unwrap()
            .then((result) => {
                setNewInputValue({
                    ...newInputValue,
                    title: result.title,
                    shortDescription: result.shortDescription,
                });
            });
    }, []);

    const getNewTitleHandler = (e) => {
        setNewInputValue({ ...newInputValue, title: e.target.value });
    };

    const getNewDescriptionHandler = (e) => {
        setNewInputValue({ ...newInputValue, shortDescription: e.target.value });
    };

    const goToBackPage = () => {
        navigate(-1);
    };

    const sedingUppdateTestById = () => {
        if (!newInputValue.title && !newInputValue.shortDescription) return;
        dispatch(updateTest({ id, newInputValue }));
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
                        <Input handleChange={getNewTitleHandler} value={newInputValue.title} />
                    </div>
                    <div>
                        <StyledTitle>Кыскача сүрөттөмө</StyledTitle>
                        <Input
                            handleChange={getNewDescriptionHandler}
                            value={newInputValue.shortDescription}
                        />
                    </div>
                    <StyledBtnDiv>
                        <ButtonUi variant="outlined" onClick={goToBackPage}>
                            АРТКА
                        </ButtonUi>
                        <ButtonUi
                            variant="contained"
                            color="success"
                            onClick={sedingUppdateTestById}>
                            САКТОО
                        </ButtonUi>
                        <Link to="question-to-test">
                            <ButtonUi variant="contained">+ СУРООЛОРДУ КОШУУ</ButtonUi>
                        </Link>
                    </StyledBtnDiv>
                </StyledDiv>
            </UICard>
        </StyledSection>
    );
}

export default NewTest;

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
