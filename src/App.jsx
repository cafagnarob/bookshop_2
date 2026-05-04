import { Col, Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import BookList from "./assets/componente/BooksList"
import Fantasy from "./assets/data/fantasy.json"
import Horror from "./assets/data/horror.json"
import History from "./assets/data/history.json"
import Scifi from "./assets/data/scifi.json"
import Romance from "./assets/data/romance.json"
import CommentArea from "./assets/componente/CommentArea"

function App() {
  return (
    <>
      <Container>
        <Row className="g-3">
          <h1>Libreria</h1>
          <Col className="col-8">
            <h3 className="mt-5">Fantasy</h3>
            <BookList libri={Fantasy} />
            <h3 className="mt-5">Horror</h3>
            <BookList libri={Horror} />
            <h3 className="mt-5">History</h3>
            <BookList libri={History} />
            <h3 className="mt-5">Scifi</h3>
            <BookList libri={Scifi} />
            <h3 className="mt-5">Romance</h3>
            <BookList libri={Romance} />
          </Col>
          <Col>
            {/* qui va la comment area */}
            <CommentArea />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
