import { render, screen } from "@testing-library/react";
import Explore from "../../pages/explorer";

test("Should if exists text in route Explore", () => {
    render(
        <Explore />
        )
        const FieldNode = screen.getByText("Explore Page")
        
        expect(FieldNode).toBeInTheDocument();
})