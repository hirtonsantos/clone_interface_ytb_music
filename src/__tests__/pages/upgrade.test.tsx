import { render, screen } from "@testing-library/react";
import Upgrade from "../../pages/upgrade";

test("Should if exists text in route Upgrade", () => {
    render(
        <Upgrade />
        )
        const FieldNode = screen.getByText("Upgrade Page")
        
        expect(FieldNode).toBeInTheDocument();
})