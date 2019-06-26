import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 480px;
    display: flex;

    input {
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #fff;
        font-size: 18px;
        color: #444;
        border-radius: 3px;
    }
    button {
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5b0;
        color: #fff;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
    }
`;

const Main = () => (
    <Container>
        <img src={logo} alt="Github Compare" />
        <Form>
            <input type="text" placeholder="usuario/repositorio" />
        </Form>
    </Container>
);

export default Main;
