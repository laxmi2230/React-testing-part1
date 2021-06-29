import { render, fireEvent } from "@testing-library/react";

import Search from "./Search";

it("serch render check", () => {
    const { queryByTitle } = render(<Search />)
    const input = queryByTitle("dummySearch");
    expect(input).toBeTruthy();
})

describe("changing input", () => {
    it("onChange", () => {
        const { queryByTitle } = render(<Search />)
        const input = queryByTitle("dummySearch");
        fireEvent.change(input, { target: { value: "Laxmi" } })
        expect(input.value).toBe("Laxmi");
    })
})

