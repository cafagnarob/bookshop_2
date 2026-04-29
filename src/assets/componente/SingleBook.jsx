import { Component } from "react"
import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class SingleBook extends Component {
  state = {
    selected: false,
  }
  render() {
    return (
      <Col key={this.props.asin} className="col-6 col-md-6 col-lg-3">
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={this.props.img}
            style={{ height: "300px" }}
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
        </Card>
      </Col>
    )
  }
}

export default SingleBook
