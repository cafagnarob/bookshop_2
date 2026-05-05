import CommentList from "./CommentList"
import AddComment from "./AddComment"

const CommentArea = (props) => {
  if (!props.asin) {
    return <p>Seleziona un libro per vedere i commenti </p>
  }
  return (
    <div className="sticky-top">
      <h6 className="pt-5">Commenti:</h6>
      <CommentList asin={props.asin} />
      <AddComment asin={props.asin} />
    </div>
  )
}

export default CommentArea
