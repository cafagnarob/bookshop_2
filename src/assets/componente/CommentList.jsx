import { Component } from "react"
import SingleComment from "./SingleComment"
const ApiLink = "https://striveschool-api.herokuapp.com/api/comments/"
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNDYwOWYwNDIwZDAwMTUxNTVhNzAiLCJpYXQiOjE3Nzc1NTA4NTcsImV4cCI6MTc3ODc2MDQ1N30.-MqqsDAGsgR7WwZ8-T63KOCSOBqSItJG45Hu83yAJNE"

class CommentList extends Component {
  state = {
    comments: [],
  }
  componentDidMount() {
    fetch(ApiLink + this.props.asin, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore" + response.status)
        }
      })
      .then((data) => {
        this.setState({ comments: data })
        console.log(data)
      })
      .catch((err) => {
        console.log("errore nella fetch", err)
      })
  }

  render() {
    return (
      <>
        {this.state.comments.map((c) => {
          return <SingleComment key={c._id} comment={c} />
        })}
      </>
    )
  }
}

export default CommentList
