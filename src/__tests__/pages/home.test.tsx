import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/home";

test("Should if exists route Home in page", () => {

    render(
        <MemoryRouter initialEntries={['/']}>
            <Home />
        </MemoryRouter>,
        )

    expect(screen.getByTestId("home-route")).toBeInTheDocument()
})