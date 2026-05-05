import { useState } from "react"
import SingleBook from "./SingleBook"
import { Container, Row, Col, Form } from "react-bootstrap"

const BookList = (props) => {
  const [search, setSearch] = useState("")

  return (
    <Container>
      <Row>
        <Col>
          <Form.Label htmlFor="SearchBook">Cerca libro</Form.Label>
          <Form.Control
            type="text"
            id="SearchBook"
            className="mb-5 "
            value={search}
            onChange={(e) => {
              setSearch({ search: e.target.value })
            }}
          />
        </Col>
      </Row>
      <Row>
        {props.libri
          .filter((libro) =>
            libro.title.toLowerCase().includes(search.toLowerCase()),
          )
          .slice(0, 3)
          .map((libro, i) => {
            return (
              <SingleBook
                key={libro.asin + i}
                asin={libro.asin}
                title={libro.title}
                img={libro.img}
                category={libro.category}
                selected={props.selectedAsin === libro.asin}
                onSelect={props.onSelect}
              />
            )
          })}
      </Row>
    </Container>
  )
}

export default BookList
