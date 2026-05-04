import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

class CommentArea extends Component {
  render() {
    if (!this.props.asin) {
      return <p>Seleziona un libro per vedere i commenti </p>
    }
    return (
      <div className="sticky-top">
        <h6 className="pt-5">Commenti:</h6>
        <CommentList asin={this.props.asin} />
        <AddComment asin={this.props.asin} />
      </div>
    )
  }
}
export default CommentArea
