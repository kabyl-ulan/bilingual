import React, { useEffect } from "react";

import { Tooltip } from "@mui/material";
import { ButtonUi } from "components/UI";

import ClientContainer from "components/UI/ClientContainer";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getQuestionForClient, clearData } from "store/slices/clientSlice";
import styled from "styled-components";

import ListBook from "../../../assets/images/BookList.svg";

function HomeOne() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const typeTest = useSelector((state) => state.testType.questions);

    useEffect(() => {
        dispatch(getQuestionForClient({ dispatch, clearData }));
    }, []);

    const TryTestClick = (id) => {
        navigate(`/home/tests/${id}`);
    };

    return (
        <ClientContainer>
            {typeTest?.map((item) => (
                <StyledContainerHomeOne key={item.id}>
                    <Row>
                        <div>
                            <img src={ListBook} alt="" />
                        </div>
                        <Content>
                            <span>{item.duration} minutes</span>
                            <Tooltip
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            maxWidth: "500px",
                                            fontSize: "14px",
                                            padding: "8px 15px",
                                        },
                                    },
                                }}
                                title={item.title}
                                placement="top">
                                <h4>{item.title}</h4>
                            </Tooltip>
                            <Tooltip
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            maxWidth: "500px",
                                            fontSize: "14px",
                                            padding: "8px 15px",
                                        },
                                    },
                                }}
                                title={item.shortDescription}
                                placement="top">
                                <span>{item.shortDescription}</span>
                            </Tooltip>
                        </Content>
                    </Row>
                    <ButtonUi variant="outlined" onClick={() => TryTestClick(item.id)}>
                        TRY TEST
                    </ButtonUi>
                </StyledContainerHomeOne>
            ))}
        </ClientContainer>
    );
}

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;
`;

const Content = styled.div`
    max-width: 450px;
    span {
        display: block;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        overflow-wrap: break-word;
        overflow: hidden;

        :first-child {
            color: #3a10e5;
            -webkit-line-clamp: 1;
        }
        :last-child {
            -webkit-line-clamp: 2;
        }
    }
    h4 {
        margin: 15px 0;
    }
`;

const StyledContainerHomeOne = styled.div`
    max-width: 862px;
    border-radius: 10px;
    box-shadow: 0px 4px 39px -5px rgba(196, 196, 196, 0.6);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 25px 70px 25px 0;

    img {
        width: 90px;
        height: 80px;
        margin-left: 38px;
    }
`;
export default HomeOne;
