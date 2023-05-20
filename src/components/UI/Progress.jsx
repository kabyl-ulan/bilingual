import * as React from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export default function Progress({ minute }) {
    const intervalRef = React.useRef(null);
    const [timeLeft, setTimeLeft] = React.useState(minute * 60);
    const [progress, setProgress] = React.useState(0);
    const percentage = (progress / (minute * 60)) * 100;

    const formatingTime = (time) => {
        return time.toString().padStart(2, "0");
    };

    const minutes = formatingTime(Math.floor(timeLeft / 60));
    const seconds = formatingTime(timeLeft - minutes * 60);

    const startTimer = React.useCallback(() => {
        if (intervalRef.current !== null) return;
        intervalRef.current = setInterval(() => {
            setProgress((prevState) => prevState + 1);
            setTimeLeft((prevState) => {
                if (prevState > 0) {
                    return prevState - 1;
                }
                return 0;
            });
        }, 1000);
    }, []);

    React.useEffect(() => {
        startTimer();
        if (timeLeft === 0) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [timeLeft === 0]);

    return (
        <StyledBox>
            <TimerBox>
                <StyledTypografy>
                    <span>{minutes}</span>
                    <span>:</span>
                    <span>{seconds}</span>
                </StyledTypografy>
            </TimerBox>
            <LinearProgress variant="determinate" value={percentage} />
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    & .MuiLinearProgress-determinate {
        width: 100%;
        background-color: #d4d0d0;
        height: 8px;
    }
    & .MuiLinearProgress-bar {
        background: linear-gradient(270deg, #3a10e5 29.37%, #6746ef 84.8%);
        border-radius: 3.5px;
    }
`;
const TimerBox = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px;
`;
const StyledTypografy = styled(Typography)`
    height: 24px;
    width: 61px;
    font-family: "DINNextRoundedLTW01-Regular";
    font-style: normal;
    font-weight: 550;
    font-size: 32px;
    line-height: 24px;
    color: #4c4859;
`;
