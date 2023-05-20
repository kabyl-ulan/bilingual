import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";
import styled from "styled-components";

function ImagePicker({ getImages, defaultValue }) {
    const [images, setImages] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const formData = new FormData();
            formData.append("file", acceptedFiles);
            const reader = new FileReader();
            reader.onload = () => {
                setImages((prevState) => [...prevState, reader.result]);
                getImages(acceptedFiles[0]);
            };
            reader.readAsDataURL(file);
        });
        setImages([]);
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            "image/jpeg": [],
            "image/png": [],
            "image/JPG": [],
        },
    });
    return (
        <ContainerDrop {...getRootProps()}>
            <input {...getInputProps()} />
            {images.length > 0 || defaultValue ? (
                <ProverkaDlyaHovera>
                    <DropImage src={defaultValue || images} />
                    <button onClick={open}>REPLACE</button>
                </ProverkaDlyaHovera>
            ) : isDragActive ? (
                ""
            ) : (
                <DropText>Uppload image </DropText>
            )}
        </ContainerDrop>
    );
}

const ContainerDrop = styled.div`
    width: 181px;
    height: 178px;
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.53px solid #d4d0d0;
    button {
        display: none;
    }
`;
const DropImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
`;

const DropText = styled.h1`
    width: 105px;
    height: 18px;
    color: #3a10e5;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    font-family: "DINNextRoundedLTW04-Medium";
    line-height: 18px;
`;
const ProverkaDlyaHovera = styled.div`
    width: 181px;
    height: 178px;
    border-radius: 8px;
    &:hover {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
            background: black;
            opacity: 0.9;
        }
        button {
            display: block;
            position: absolute;
            top: 5rem;
            left: 3.5rem;
        }
    }
`;
export default ImagePicker;
