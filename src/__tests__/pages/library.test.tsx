import { render, screen } from "@testing-library/react";
import Biblioteca from "../../pages/library";

test("Should if exists text in route Library", () => {
    render(
        <Biblioteca />
        )
        const FieldNode = screen.getByText("Library Page")
        
        expect(FieldNode).toBeInTheDocument();
})