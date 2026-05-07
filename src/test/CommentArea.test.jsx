import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import CommentArea from "../assets/componente/CommentArea"

describe("montaggio iniziale", () => {
  it("check redner commentArea", () => {
    render(<CommentArea />)
    const commentArea = screen.getByText(
      "Seleziona un libro per vedere i commenti",
    )
    expect(commentArea).toBeInTheDocument
  })
})
