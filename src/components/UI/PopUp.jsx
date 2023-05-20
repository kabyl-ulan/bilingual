import React from "react";

import { SuccessSaveIcon, xPopUp } from "assets";

import { ReactNotifications, Store } from "react-notifications-component";
import styled, { css } from "styled-components";

import "react-notifications-component/dist/theme.css";

const PopUp = ({ forCss, typeIs, titleIs, textIs }) => {
    React.useEffect(() => {
        const notification = {
            title: titleIs,
            message: textIs,
            type: typeIs,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated animate__fadeInRightBig"],
            animationOut: ["animate__animated animate__backOutRight"],
            dismiss: {
                duration: 3000,
            },
        };
        Store.addNotification({
            ...notification,
        });
    }, []);
    return <Notification {...forCss} typeIs={typeIs} />;
};

const Notification = styled(ReactNotifications)`
    ${({
        width = 311,
        Bg = "rgba(234, 251, 231, 1)",
        BgDanger = "#FFF1F0",
        titleColor = "#4C4859",
        textColor = "#646464",
    }) => {
        return css`
            .rnc__notification {
                width: 100%;
                max-width: ${width}px;
                position: fixed;
                top: 20px;
                right: 10px;
            }
            .rnc__notification-item {
                border-left: none;
                padding: 24px 0;

                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    right: 16.75px;
                    top: 16.75px;
                    background: url(${xPopUp});
                    background-size: cover;
                    z-index: 1;
                    cursor: pointer;
                    width: 10.5px;
                    height: 10.5px;
                }
            }
            .rnc__notification-title {
                margin-top: 0;
                font-family: cursive;
                font-size: 16px;
                line-height: 19px;
                color: ${titleColor};
            }
            .rnc__notification-item--success .rnc__notification-title {
                &::before {
                    content: "";
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 0px;
                    left: 16px;
                    background: url(${SuccessSaveIcon});
                    background-size: contain;
                    background-repeat: no-repeat;
                }
            }

            .rnc__notification-item--danger .rnc__notification-title {
                &::before {
                    content: "";
                    display: inline-block;
                    width: 3px;
                    height: 100%;
                    position: absolute;
                    top: 0px;
                    left: 8px;
                    border-radius: 6px;
                    background: red;
                }
            }
            .rnc__notification-message {
                font-family: cursive;
                font-weight: 400;
                font-size: 16px;
                line-height: 18px;
                color: ${textColor};
                margin-bottom: 0;
                line-height: 18.08px;
            }

            .rnc__notification-item--success {
                background: ${Bg};
                border: 1px solid #8cdb95;
                border-radius: 4px;
            }

            .rnc__notification-item--danger {
                background: ${BgDanger};
                border: 1px solid rgba(246, 20, 20, 0.4);
                border-radius: 4px;
            }

            .rnc__notification-item--success .rnc__notification-content {
                position: relative;
                padding-left: 60px;
                padding-top: 0px;
                padding-bottom: 0px;
            }

            .rnc__notification-item--danger .rnc__notification-content {
                position: relative;
                padding-left: 32px;
                padding-top: 0px;
                padding-bottom: 0px;
            }
        `;
    }}
`;

export default PopUp;
