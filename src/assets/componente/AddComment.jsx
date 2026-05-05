import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"

const ApiLink = "https://striveschool-api.herokuapp.com/api/comments/"
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZTVjYjU0YTMxNTAwMTU1OGIxYjEiLCJpYXQiOjE3Nzc5ODQ5NzEsImV4cCI6MTc3OTE5NDU3MX0.YBr77iG8DSTO_ffW4Qb912V14Vgj0zccwZdGy1GkOR0"

const AddComment = ({ asin }) => {
  const [form, setForm] = useState({
    comment: "",
    rate: 1,
  })

  const handleChange = (e) => {
    const { id, value } = e.target

    setForm((prev) => ({
      ...prev,
      [id]: id === "rate" ? Number(value) : value,
    }))
  }

  const getNewComment = (e) => {
    e.preventDefault()

    const newComment = {
      ...form,
      elementId: asin,
    }
    console.log("INVIO:", newComment)

    fetch(ApiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(newComment),
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
        setForm({ comment: "", rate: 1 })

        alert("Commento aggiunto")
        window.location.reload()
      })
      .catch((err) => {
        console.log("errore nella POST", err)
      })
  }

  return (
    <div className="text-center">
      <Form onSubmit={getNewComment} className="text-center">
        <Form.Label htmlFor="comment" className="fw-bold">
          Aggiungi un commento
        </Form.Label>
        <Form.Control
          type="text"
          id="comment"
          value={form.comment}
          onChange={handleChange}
        />
        <Form.Label htmlFor="rate" className="fw-bold">
          vota
        </Form.Label>
        <Form.Control
          type="number"
          id="rate"
          min={1}
          max={5}
          value={form.rate}
          onChange={handleChange}
        />

        <Button type="submit" className="mt-2">
          Invia
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
