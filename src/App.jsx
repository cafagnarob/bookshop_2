import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import BookList from "./assets/componente/BooksList"
import Book from "./assets/data/fantasy.json"

function App() {
  return (
    <>
      <Container>
        <Row>
          <BookList libri={Book} />
        </Row>
      </Container>
    </>
  )
}

export default App
