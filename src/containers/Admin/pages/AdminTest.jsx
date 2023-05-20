import React, { useEffect } from "react";

import { ButtonUi } from "components/UI";
import IconButtonStyled from "components/UI/IconButtonStyled";
import Loader from "components/UI/Loader";
import SwitcherComp from "components/UI/Switcher";
import UICard from "components/UI/UICard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTest, getTests, isTestActive } from "store/slices/adminTestActions";
import styled from "styled-components";

import DeleteIcon from "../../../assets/icons/Delete.svg";
import UpdateIcon from "../../../assets/icons/UpdateIcon.svg";

function AdminTest() {
    const dispatch = useDispatch();
    const { tests, isLoading } = useSelector((state) => state.test);

    useEffect(() => {
        dispatch(getTests());
    }, []);

    const navigate = useNavigate();

    const goToNexPage = () => {
        navigate("/admin/create-test");
    };

    const updateTestsHandler = (id) => {
        navigate(`/admin/update-test/${id}`);
    };

    const isActiveTest = (id) => {
        dispatch(isTestActive(id));
    };

    const deleteHandler = (id) => {
        dispatch(deleteTest(id));
    };
    if (isLoading) {
        return <Loader />;
    }

    return (
        <StyledCardDiv>
            <UICard
                marginBox="68px 190px"
                cardWidth="100%"
                cardBorderRadius="20px"
                cardBoxShadow="0px 4px 39px rgba(196, 196, 196, 0.6)">
                <StyledBtnDiv>
                    <ButtonUi variant="contained" onClick={goToNexPage}>
                        + ТЕСТ КОШУУ
                    </ButtonUi>
                </StyledBtnDiv>
                {tests?.map((item) => (
                    <StyledContainerDiv key={item.id}>
                        <UICard
                            cardBorderRadius="8px"
                            cardBoxShadow="0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)"
                            cardWidth="975px"
                            cardHeight="66px">
                            <StyledItemsDiv>
                                <h3>{item.title}</h3>
                                <StyledIconsBtn>
                                    <SwitcherComp
                                        value={item.isActive}
                                        onChange={() => isActiveTest(item.id)}
                                    />
                                    <IconButtonStyled
                                        handleClick={() => updateTestsHandler(item.id)}
                                        Icon={UpdateIcon}
                                    />
                                    <IconButtonStyled
                                        handleClick={() => deleteHandler(item.id)}
                                        Icon={DeleteIcon}
                                    />
                                </StyledIconsBtn>
                            </StyledItemsDiv>
                        </UICard>
                    </StyledContainerDiv>
                ))}
            </UICard>
        </StyledCardDiv>
    );
}

export default AdminTest;

const StyledCardDiv = styled.div`
    width: 1060px;
    margin: 0 auto;
`;

const StyledBtnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 25px;
`;

const StyledContainerDiv = styled.div`
    margin-bottom: 16px;
`;

const StyledItemsDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
        font-size: 16px;
        font-weight: 500;
    }
`;

const StyledIconsBtn = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
