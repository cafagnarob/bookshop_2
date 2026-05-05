import { Component } from "react"

const SingleComment = (props) => {
  const { comment } = props
  return (
    <div>
      {comment.author?.slice(0, 6)} - {comment.comment}
    </div>
  )
}

export default SingleComment
