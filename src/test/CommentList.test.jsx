import { describe, expect, it } from "vitest"
import CommentList from "../assets/componente/CommentList"
import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

describe("empty comments", () => {
  it("check if at the start there isnt comments", () => {
    render(<CommentList />)
    const comment = screen.queryByTestId("comment")
    expect(comment).toBeNull()
  })
})

describe("full comments", () => {
  it("check if at click there are comments", async () => {
    render(<CommentList />, <App />)
    try {
      const comment = await screen.getByTestId("comment")
      const card = screen.getAllByTestId("card")
      fireEvent.click(card[0])
      expect(comment.length).toBeGreaterThan(0)
    } catch (err) {
      console.log(err)
    }
  })
})
