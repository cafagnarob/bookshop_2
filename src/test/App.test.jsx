import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "../App"

describe("selection logic", () => {
  it("selects only one book across all lists", () => {
    render(<App />)

    const cards = screen.getAllByTestId("card")

    fireEvent.click(cards[0])
    expect(cards[0]).toHaveStyle({ background: "rgb(0, 128, 0)" })

    fireEvent.click(cards[1])
    expect(cards[1]).toHaveStyle({ background: "rgb(0, 128, 0)" })
    expect(cards[0]).not.toHaveStyle({ background: "rgb(0, 128, 0)" })
  })
})
