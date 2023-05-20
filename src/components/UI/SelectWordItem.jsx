import React from "react";

import styled from "styled-components";

import CheckBox from "./Checkbox";

export default function SelectWordItem({ title, isTrue, index }) {
    return (
        <Main>
            <Content>
                <span>{index + 1}</span>
                <span>{title}</span>
            </Content>
            <Actions>
                <CheckBox boxcolor="#2ab934" value={isTrue} />
            </Actions>
        </Main>
    );
}

const Main = styled.div`
    width: 261px;
    height: 46px;
    display: flex;
    align-items: center;
    border: 1.53px solid #d4d0d0;
    border-radius: 8px;
`;

const Content = styled.div`
    span {
        :nth-child(1) {
            margin-left: 16px;
        }
        :nth-child(2) {
            margin-left: 15px;
        }
    }
`;
const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 14px 0 auto;
`;
