import { describe, it, expect } from "vitest"
import {
  fireEvent,
  getAllByTestId,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react"
import BookList from "../assets/componente/BooksList"
import books from "../assets/data/fantasy.json"

describe("number of card", () => {
  it("render only 3 cards for slice", () => {
    render(<BookList libri={books} />)

    const cardsList = screen.getAllByTestId("card")
    expect(cardsList.length).toBe(3)
  })
})

describe("montaggio iniziale", () => {
  it("filter works", () => {
    render(<BookList libri={books} />)
    const input = screen.getByLabelText(/cerca libro/i)
    fireEvent.change(input, {
      target: { value: "whispers" },
    })
    const carteFiltrate = screen.getAllByTestId("card")
    expect(carteFiltrate.length).toBeGreaterThan(0)
    console.log(carteFiltrate.length)
  })
})

describe("montaggio iniziale", () => {
  it("filter works", () => {
    render(<BookList libri={books} />)
    const input = screen.getByLabelText(/cerca libro/i)
    fireEvent.change(input, {
      target: { value: "dragon" },
    })
    const carteFiltrate = screen.getAllByTestId("card")
    expect(carteFiltrate.length).toBeGreaterThan(0)
    console.log(carteFiltrate.length)
  })
})

describe("montaggio iniziale", () => {
  it("filter works", () => {
    render(<BookList libri={books} />)
    const input = screen.getByLabelText(/cerca libro/i)
    fireEvent.change(input, {
      target: { value: "books" },
    })
    const carteFiltrate = screen.getAllByTestId("card")
    expect(carteFiltrate.length).toBeGreaterThan(0)
    console.log(carteFiltrate.length)
  })
})

// describe("selection logic", () => {
//   it("card deselected on click of second card", () => {
//     const books = {}
//     render(<BookList libri={books} />)
//     const cards = screen.getAllByTestId("card")
//     const primaCarta = cards[0]
//     const secondaCarta = cards[1]
//     fireEvent.click(primaCarta)
//     expect(primaCarta).toHaveStyle({ background: "rgb(0, 128, 0)" })
//     fireEvent.click(secondaCarta)
//     // expect(secondaCarta).not.toHaveStyle({ background: "none" })
//     expect(primaCarta).not.toHaveStyle({ background: "rgb(0, 128, 0)" })
//     // expect(secondaCarta).toHaveStyle({ background: "rgb(0, 128, 0)" })
//   })
// })
