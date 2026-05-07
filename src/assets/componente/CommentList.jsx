import { useEffect, useState } from "react"
import SingleComment from "./SingleComment"
const ApiLink = "https://striveschool-api.herokuapp.com/api/comments/"
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNDYwOWYwNDIwZDAwMTUxNTVhNzAiLCJpYXQiOjE3Nzc1NTA4NTcsImV4cCI6MTc3ODc2MDQ1N30.-MqqsDAGsgR7WwZ8-T63KOCSOBqSItJG45Hu83yAJNE"

const CommentList = ({ asin }) => {
  const [comments, setComments] = useState([])

  const getFetch = () => {
    fetch(ApiLink + asin, {
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
        setComments(data)
        console.log(data)
      })
      .catch((err) => {
        console.log("errore nella fetch", err)
      })
  }

  useEffect(() => {
    if (asin) {
      getFetch()
    }
  }, [asin])

  return (
    <>
      {comments.map((c) => {
        return <SingleComment key={c._id} comment={c} data-testid="comment" />
      })}
    </>
  )
}

export default CommentList
