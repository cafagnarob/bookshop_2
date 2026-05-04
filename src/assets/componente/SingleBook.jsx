import { Component } from "react"
import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
// import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    selected: false,
  }
  render() {
    return (
      <Col key={this.props.asin} className="col-12 col-md-6 col-lg-4">
        <Card
          className="h-100 p-3"
          style={{
            background: this.state.selected ? "green" : "none",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.img}
            style={{ height: "300px", cursor: "pointer" }}
            onClick={() => {
              this.props.onSelect(this.props.asin)
            }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.category}</Card.Text>
            <Card.Text>{this.props.price}</Card.Text>
            <Button
              variant="primary"
              className="mt-auto justify-content-center"
            >
              Buy
            </Button>
          </Card.Body>
          {/* {this.state.selected && <CommentArea asin={this.props.asin} />} */}
        </Card>
      </Col>
    )
  }
}

export default SingleBook
