import { render, screen } from "@testing-library/react";
import Category from "../../components/category";
import { hits, mix, musicsHistoric } from "../../constants";


test("Should if exists in component Category of the type Hits", () => {
    render(
        <Category text="Hits de Hoje" categoryList={hits}/>
        )
        const FieldNode = screen.getByText("Hits de Hoje")
        // then
        expect(FieldNode).toBeInTheDocument();
})  

test("Should if exists in component Category of the type Mixtapes", () => {
    render(
        <Category text="Mixtapes criadas para você" categoryList={mix}/>
        )
        const FieldNode = screen.getByText("Mixtapes criadas para você")
        // then
        expect(FieldNode).toBeInTheDocument();
})  

test("Should if exists in component Category of the type Recent Musics of User", () => {
    render(
        <Category text="Ouvir novamente" categoryList={musicsHistoric}/>
        )
        const FieldNode = screen.getByText("Ouvir novamente")
        // then
        expect(FieldNode).toBeInTheDocument();
})  