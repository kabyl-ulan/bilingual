import React from "react";

import { baseAxios } from "api/axios-config";
import { ButtonUi } from "components/UI";
import ClientContainer from "components/UI/ClientContainer";
import Loader from "components/UI/Loader";
import UICard from "components/UI/UICard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLIENT_ROUTES_URL } from "routes/ClientRoutes/clientRoutesUrl";
import { clearData } from "store/slices/clientSlice";
import styled from "styled-components";

import Group from "../../../assets/icons/group.svg";
import Layer from "../../../assets/icons/layer.svg";

export default function CompleteTest() {
    const [isLoad, setIsLoad] = React.useState(false);
    const resulTests = useSelector((item) => item.testType.answer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDone = async () => {
        setIsLoad(true);

        try {
            const res = await baseAxios.post("/test/pass-test", resulTests);
            setIsLoad(false);
            navigate(`/home/${CLIENT_ROUTES_URL.RESULTS}`);
            dispatch(clearData());
        } catch (error) {
            setIsLoad(false);
            alert("Some thing went wroing");
        }
    };
    const handleTryAgain = () => {
        dispatch(clearData());
        navigate(-1);
    };
    return isLoad ? (
        <Loader />
    ) : (
        <ClientContainer>
            <UICard
                cardWidth="755px"
                cardBorderRadius="10px"
                cardBoxShadow="0px 4px 39px -5px rgba(196, 196, 196, 0.6)">
                <Container>
                    <Title>
                        <p>Test is complete!</p>
                        <img src={Group} alt="" />
                    </Title>

                    <Image>
                        <img width="113px" height="100px" src={Layer} alt="" />
                    </Image>
                    <Text>
                        Your results were sent for evaluation proccess.
                        <br />
                        After evaluation your results will be sent to your email.
                    </Text>
                </Container>

                <Footer>
                    <ButtonUi
                        onClick={handleTryAgain}
                        maxwidth="143px"
                        fontSize="14px"
                        maxheight="42px"
                        variant="outlined">
                        Try again
                    </ButtonUi>
                    <ButtonUi
                        onClick={handleDone}
                        maxwidth="143px"
                        fontSize="14px"
                        maxheight="42px"
                        variant="contained"
                        color="primary">
                        Done
                    </ButtonUi>
                </Footer>
            </UICard>
        </ClientContainer>
    );
}
const Title = styled.div`
    margin-bottom: 52px;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    color: #4c4859;
    display: flex;
    justify-content: center;
    gap: 18px;
`;
const Image = styled.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 26px;
`;
const Footer = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
`;
const Container = styled.div`
    border-bottom: 1.8px solid #d4d0d0;
    height: 320px;
`;
const Text = styled.p`
    margin: auto;
    height: 46px;
    color: 4C4859;
    width: 435px;
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    text-align: center;
`;
