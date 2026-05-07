import { describe, expect, it } from "vitest"
import CommentList from "../assets/componente/CommentList"
import { render, screen } from "@testing-library/react"

describe("empty comments", () => {
  it("check if at the start there isnt comments", () => {
    render(<CommentList />)
    const comment = screen.queryByTestId("comment")
    expect(comment).toBeNull()
  })
})
