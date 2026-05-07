import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
// import CommentArea from "./CommentArea"

const SingleBook = (props) => {
  return (
    <Col
      key={props.asin}
      className="col-12 col-md-6 col-lg-4"
      data-testid="colCard"
    >
      <Card
        className="h-100 p-3"
        onClick={() => {
          props.onSelect(props.asin)
        }}
        style={{
          background: props.selected ? "green" : "none",
        }}
        data-testid="card"
      >
        <Card.Img
          variant="top"
          src={props.img}
          style={{ height: "300px", cursor: "pointer" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.category}</Card.Text>
          <Card.Text>{props.price}</Card.Text>
          <Button variant="primary" className="mt-auto justify-content-center">
            Buy
          </Button>
        </Card.Body>
        {/* {this.state.selected && <CommentArea asin={this.props.asin} />} */}
      </Card>
    </Col>
  )
}

export default SingleBook
