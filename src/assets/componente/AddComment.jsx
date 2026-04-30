import { Component } from "react"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"

const ApiLink = "https://striveschool-api.herokuapp.com/api/comments/"
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNDYwOWYwNDIwZDAwMTUxNTVhNzAiLCJpYXQiOjE3Nzc1NTA4NTcsImV4cCI6MTc3ODc2MDQ1N30.-MqqsDAGsgR7WwZ8-T63KOCSOBqSItJG45Hu83yAJNE"

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  getNewComment = (e) => {
    e.preventDefault()
    fetch(ApiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.asin,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore POST" + response.status)
        }
      })
      .then((data) => {
        console.log("commento creato:", data)
        this.setState({ comment: "", rate: "" })
        alert("Commento aggiunto")
        window.location.reload()
      })
      .catch((err) => {
        console.log("errore nella POST", err)
      })
  }

  render() {
    return (
      <div className="text-center">
        <Form onSubmit={this.getNewComment} className="text-center">
          <Form.Label htmlFor="comment" className="fw-bold">
            Aggiungi un commento
          </Form.Label>
          <Form.Control
            type="text"
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <Form.Label htmlFor="rate" className="fw-bold">
            vota
          </Form.Label>
          <Form.Control
            type="number"
            id="rate"
            min={1}
            max={5}
            value={this.state.rate}
            onChange={this.handleChange}
          />

          <Button type="submit" className="mt-2">
            Invia
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComment
