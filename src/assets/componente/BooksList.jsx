import SingleBook from "./SingleBook"

const BookList = function (props) {
  return props.libri.map((libro, i) => {
    return (
      <SingleBook
        key={libro.asin + i}
        asin={libro.asin}
        title={libro.title}
        img={libro.img}
        category={libro.category}
      />
    )
  })
}
export default BookList
