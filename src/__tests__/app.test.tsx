import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';

test("Should if exists tag h1 in main header", () => {
    render(
        <BrowserRouter>
                <App/>
        </BrowserRouter>
        )
        const FieldNode = screen.getByTestId("home-route")
        // then
        expect(FieldNode).toBeInTheDocument();
})

test("Should if exists all components in route home", () => {
    render(
        <BrowserRouter>
                <App/>
        </BrowserRouter>
        )
        const FieldNodeOne = screen.getByText("Hits de Hoje")
        const FieldNodeTwo = screen.getByText("Mixtapes criadas para você")
        const FieldNodeThree = screen.getByText("Ouvir novamente")
        const FieldNodeHeader = screen.getByTestId("header")
        const FieldNodeUser =  screen.getByTestId("user-profile")
        
        // then
        expect(FieldNodeOne).toBeInTheDocument();
        expect(FieldNodeTwo).toBeInTheDocument();
        expect(FieldNodeThree).toBeInTheDocument();
        expect(FieldNodeHeader).toBeInTheDocument();
        expect(FieldNodeUser).toBeInTheDocument();
})