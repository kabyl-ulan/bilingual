import React from "react";

import styled from "styled-components";

const Section = ({ children }) => {
    return <SectionStyled>{children}</SectionStyled>;
};

const SectionStyled = styled.section`
    margin-top: 120px;
`;

export default Section;
