import { useParams } from 'react-router-dom'

const BookPage = () => {
  const { bookId } = useParams()

  return (
    <>
      <h1>My Book</h1>
      <h2>{bookId}</h2>
    </>
  )
}

export default BookPage
