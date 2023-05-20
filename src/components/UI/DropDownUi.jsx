import React from "react";

import { ClickAwayListener } from "@mui/material";
import { QuestionContext } from "containers/Admin/pages/CreateQuestion";
import { motion } from "framer-motion";
import { formatterQuestionType } from "services/format";

import styled, { css } from "styled-components";

const DropDown = ({ items, stylecss }) => {
    const [dropActive, setDropActive] = React.useState(0);
    const [openDrop, setOpenDrop] = React.useState(false);
    const { setTypeQuestion, typeQuestion, isUpdatePage } = React.useContext(QuestionContext);
    const handleClickDrop = (obj, idx) => {
        setTypeQuestion(obj);
        setDropActive(idx);
        setOpenDrop(() => false);
    };

    const handleClickDropClose = () => {
        if (!isUpdatePage) {
            setOpenDrop((prev) => !prev);
        }
    };

    const handleClickDropAway = () => {
        setOpenDrop(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickDropAway}>
            <DropBox {...stylecss}>
                <DropHead
                    {...stylecss}
                    className={!openDrop ? "is_close" : ""}
                    onClick={handleClickDropClose}>
                    <span>{typeQuestion?.text || formatterQuestionType(typeQuestion)}</span>
                </DropHead>
                <DropBody animate={openDrop ? { height: "auto" } : { height: "0px" }}>
                    <DropList
                        animate={openDrop ? { opacity: 1 } : { opacity: 0 }}
                        className={!openDrop ? "is_close" : ""}>
                        {items.map((obj, idx) => (
                            <DropListItem
                                key={obj.value || obj[0]}
                                className={dropActive === idx && "active"}
                                onClick={() => handleClickDrop(obj, idx)}>
                                {obj.text}
                            </DropListItem>
                        ))}
                    </DropList>
                </DropBody>
            </DropBox>
        </ClickAwayListener>
    );
};

const DropBox = styled.div`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    ${({ background, fontSize = 14, width = "200px" }) => {
        return css`
            background: ${background};
            font-size: ${fontSize}px;
            max-width: ${width};
        `;
    }}
`;

const DropHead = styled.div`
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    border: 1.6px solid #3a10e5;
    padding: 12px 18px;
    ${(props) =>
        props.className === "is_close" &&
        css`
            border-radius: 8px;
            span {
                color: ${props.colorText};
            }
        `}

    .drop_is_close {
        border-radius: 8px;
    }
`;

const DropBody = styled(motion.div)`
    height: 100%;
    padding-right: 5px;
    height: 0px;
`;

const DropList = styled(motion.ul)`
    margin: 8px 0;
    overflow: auto;
    max-height: 218px;
    padding: 0;
    ${(props) =>
        props.className === "is_close" &&
        css`
            margin: 0;
        `}

    ::-webkit-scrollbar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 8px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(154, 154, 154, 1);
        border-radius: 100px;
    }
`;

const DropListItem = styled.li`
    padding: 10px 24px;
    margin: 4px 5px 4px 0;
    cursor: pointer;

    ${({ BgHover = "rgba(58, 16, 229, 0.16)", colorText, BgColorText = " #4C4859", className }) =>
        css`
            background-color: ${className === "active" && BgHover};
            color: ${className === "active" ? BgColorText : colorText};

            :hover {
                background-color: ${BgHover};
                color: ${BgColorText};
            }
        `}

    :last-child {
        margin-bottom: 0;
    }
`;

export default DropDown;
