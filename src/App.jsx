import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import BookList from "./assets/componente/BooksList"
import Fantasy from "./assets/data/fantasy.json"
import Horror from "./assets/data/horror.json"
import History from "./assets/data/history.json"
import Scifi from "./assets/data/scifi.json"
import Romance from "./assets/data/romance.json"

function App() {
  return (
    <>
      <Container>
        <Row className="g-3">
          <h1>Libreria</h1>

          <h3>Fantasy</h3>
          <BookList libri={Fantasy} />
          <h3>Horror</h3>
          <BookList libri={Horror} />
          <h3>History</h3>
          <BookList libri={History} />
          <h3>Scifi</h3>
          <BookList libri={Scifi} />
          <h3>Romance</h3>
          <BookList libri={Romance} />
        </Row>
      </Container>
    </>
  )
}

export default App
