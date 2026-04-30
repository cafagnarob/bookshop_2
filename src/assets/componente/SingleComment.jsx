import { Component } from "react"

class SingleComment extends Component {
  render() {
    const { comment } = this.props
    return (
      <div>
        {comment.author?.slice(0, 6)} - {comment.comment}
      </div>
    )
  }
}

export default SingleComment
