import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

class CommentArea extends Component {
  render() {
    return (
      <div>
        <h6>Commenti:</h6>
        <CommentList asin={this.props.asin} />
        <AddComment asin={this.props.asin} />
      </div>
    )
  }
}
export default CommentArea
