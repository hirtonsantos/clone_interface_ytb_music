import { render, screen } from "@testing-library/react";
import Pesquisar from "../../pages/search";

test("Should if exists text in route Search", () => {
    render(
        <Pesquisar />
        )
        const FieldNode = screen.getByText("Search Page")
        
        expect(FieldNode).toBeInTheDocument();
})