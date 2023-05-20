import React from "react";

import { Box } from "@mui/system";
import { baseAxios } from "api/axios-config";
import { InputUi, CheckboxUi, ButtonUi, PasswordInputUi } from "components/UI";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RoutesUrl, UsersRole } from "routes/constants";
import { auth } from "services/firebase";
import { setUserToCookies } from "services/saveUser";
import { setUser } from "store/slices/authSlice";
import styled from "styled-components";
import { REGISTRATION } from "utils/constants/api";

import Logo from "../assets/images/AuthLogo.svg";
import google from "../assets/images/google.svg";

const SignIn = () => {
    const [errorMessage, setErrorMessage] = React.useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const makeIsHave = (data) => {
        if (data?.role === UsersRole.client) navigate("/home");
        if (data?.role === UsersRole.admin) navigate("/admin");
    };

    const onSubmit = async (userInfo) => {
        try {
            const { data } = await baseAxios.post(REGISTRATION, userInfo);
            dispatch(setUser(data));
            setUserToCookies(data);
            makeIsHave(data);
            reset();
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response);
        }
    };

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const success = (data) => {
                    dispatch(setUser(data));
                    setUserToCookies(data);
                    makeIsHave(data);
                    return data;
                };
                baseAxios
                    .post(`/auth/authenticate/google?tokenId=${result.user.accessToken}`)
                    .then(({ data }) => success(data));
            })
            .catch((error) => console.log(error));
    };

    return (
        <SignInMain>
            <SignInBox>
                <SignInWrapper>
                    <SignInHead>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <h3>Аккаунт ачуу</h3>
                    </SignInHead>
                    <form>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{
                                required: "This field is required",
                            }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <InputUi
                                        handleChange={onChange}
                                        sx={{ width: "100%", marginTop: "20px" }}
                                        colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                                        colortext="rgba(117, 117, 117, 1)"
                                        forInput={{
                                            label: "First name",
                                            error: !!errors?.firstName,
                                            name: "first_name",
                                        }}
                                    />
                                );
                            }}
                        />
                        {errors.firstName && (
                            <ErrorMessage> {errors.firstName.message} </ErrorMessage>
                        )}
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{
                                required: "This field is required",
                            }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <InputUi
                                        handleChange={onChange}
                                        sx={{ width: "100%", marginTop: "20px" }}
                                        colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                                        colortext="rgba(117, 117, 117, 1)"
                                        forInput={{
                                            label: "Last Name",
                                            error: !!errors?.lastName,
                                            name: "last_name",
                                        }}
                                    />
                                );
                            }}
                        />
                        {errors.lastName && (
                            <ErrorMessage> {errors.lastName.message} </ErrorMessage>
                        )}
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "This field is required",
                                pattern: {
                                    value: /^[\w]+@([\w-]+\.)+[\w-]{1,10}$/,
                                    message: "Введите правильный электронный почты",
                                },
                            }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <InputUi
                                        handleChange={(e) => {
                                            onChange(e.target.value);
                                            setErrorMessage(null);
                                        }}
                                        sx={{ width: "100%", marginTop: "20px" }}
                                        colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                                        colortext="rgba(117, 117, 117, 1)"
                                        forInput={{
                                            label: "Email",
                                            error: !!errors?.email || !!errorMessage,
                                            name: "email",
                                        }}
                                    />
                                );
                            }}
                        />
                        {errors.email && <ErrorMessage> {errors.email.message} </ErrorMessage>}
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "This field is required",
                                minLength: {
                                    value: 5,
                                    message: "Password lenght must be at least 6",
                                },
                            }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <PasswordInputUi
                                        onChange={(e) => {
                                            onChange(e.target.value);
                                            setErrorMessage(null);
                                        }}
                                        sx={{ width: "100%", marginTop: "20px" }}
                                        colorlabeltextandborderandhover="rgba(58, 16, 229, 1)"
                                        colortext="rgba(117, 117, 117, 1)"
                                        forInput={{
                                            error: !!errors?.password,
                                            label: "Password",
                                            name: "password",
                                        }}
                                    />
                                );
                            }}
                        />
                        {errors.password && (
                            <ErrorMessage> {errors.password.message} </ErrorMessage>
                        )}
                        {errorMessage ? (
                            <ErrMessPassOrEmail>
                                <span> {errorMessage.data.message} </span>
                                <span>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM8.1 11.7V13.5H9.9V11.7H8.1ZM8.1 4.5V9.9H9.9V4.5H8.1Z"
                                            fill="#F71414"
                                        />
                                    </svg>
                                </span>
                            </ErrMessPassOrEmail>
                        ) : null}

                        <Box
                            sx={{
                                marginTop: "20px",
                                marginBottom: "30px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}>
                            <CheckboxUi boxcolor="blue" label="To remember me" />
                        </Box>
                        <ButtonUi
                            onClick={handleSubmit(onSubmit)}
                            maxheight="52px"
                            variant="contained"
                            maxwidth="100%"
                            text="КАТТАЛУУ"
                        />
                    </form>
                    <SignInWithGoogleBox>
                        <div onClick={signInWithGoogle}>
                            <span>
                                <img src={google} alt="google" />
                            </span>
                            <span>SIGN UP WITH GOOGLE</span>
                        </div>
                    </SignInWithGoogleBox>
                    <IsAccaunt>
                        АККАУНТУҢУЗ БАРБЫ? <Link to={RoutesUrl.SignIn}>КИРҮҮ</Link>
                    </IsAccaunt>
                </SignInWrapper>
            </SignInBox>
        </SignInMain>
    );
};

export default SignIn;

const SignInMain = styled.div`
    background: linear-gradient(90.76deg, #6b0fa9 0.74%, #520fb6 88.41%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ErrorMessage = styled.small`
    color: red;
`;

const SignInBox = styled.div`
    background: #fff;
    max-width: 616px;
    width: 100%;
    border-radius: 10px;
    padding: 60px 79px;
`;

const SignInWrapper = styled.div``;
const ErrMessPassOrEmail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: red;
    line-height: 21px;
    margin-top: 8px;
    span {
        display: contents;
    }
`;

const SignInHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    h3 {
        font-size: 24px;
        color: #4c4859;
        margin-top: 12px;
    }
`;

const SignInWithGoogleBox = styled.div`
    text-align: center;
    margin-top: 34px;
    margin-bottom: 24px;
    div {
        cursor: pointer;
        padding: 14px 20px;
        border: 1px solid #bdbdbd;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.4s ease;
        &:hover {
            background-color: #3a10e5;
            color: white;
        }
        span:first-child {
            display: contents;
        }
    }
`;

const IsAccaunt = styled.p`
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #757575;
    font-weight: 500;
    a {
        color: #3a10e5;
    }
`;
