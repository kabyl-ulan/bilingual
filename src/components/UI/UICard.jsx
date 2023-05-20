import React from "react";

import Card from "@mui/material/Card";

import { styled } from "@mui/material/styles";

function UICard({ children, cardWidth, cardHeight, cardBorderRadius, cardBoxShadow, marginBox }) {
    return (
        <StyeldCard
            margin={marginBox || "auto"}
            cardWidth={cardWidth || "100%"}
            cardHeight={cardHeight || "auto"}
            cardBorderRadius={cardBorderRadius || 0}
            cardBoxShadow={cardBoxShadow || ""}>
            {children}
        </StyeldCard>
    );
}

export default UICard;

const StyeldCard = styled(
    ({ marginBox, cardWidth, cardHeight, cardBorderRadius, cardBoxShadow, ...props }) => (
        <Card {...props} />
    )
)`
    width: ${(props) => props.cardWidth};
    height: ${(props) => props.cardHeight};
    padding: 40px 43px;
    box-shadow: ${(props) => props.cardBoxShadow};
    border-radius: ${(props) => props.cardBorderRadius};
    margin: ${(props) => props.marginBox};
`;
