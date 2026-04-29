import { Component } from "react"
import SingleBook from "./SingleBook"
import { Container, Row, Col, Form } from "react-bootstrap"

class BookList extends Component {
  state = {
    search: "",
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Label htmlFor="SearchBook">Cerca libro</Form.Label>
            <Form.Control
              type="text"
              id="SearchBook"
              className="mb-5"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value })
              }}
            />
          </Col>
        </Row>
        <Row>
          {this.props.libri
            .filter((libro) =>
              libro.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase()),
            )
            .slice(0, 4)
            .map((libro, i) => {
              return (
                <SingleBook
                  key={libro.asin + i}
                  asin={libro.asin}
                  title={libro.title}
                  img={libro.img}
                  category={libro.category}
                />
              )
            })}
        </Row>
      </Container>
    )
  }
}

export default BookList
