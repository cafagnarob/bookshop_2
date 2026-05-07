import { describe, it, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import SingleBook from "../assets/componente/SingleBook"

describe("montaggio iniziale", () => {
  it("check if component is ok", () => {
    render(<SingleBook />)
    const card = screen.getByTestId("colCard")
    expect(card).toBeInTheDocument()
  })
})

describe("cambioo colore", () => {
  ;(it("check if on click bacground change"),
    () => {
      render(<SingleBook />)
      const card = screen.getAllByTestId("colCard")
      fireEvent.click(card[0])
      expect(card[0]).toHaveStyle({ background: "rgb(0, 128, 0)" })
    })
})
