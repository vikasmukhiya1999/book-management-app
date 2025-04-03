import { useParams } from "react-router-dom";
import { useBooks } from "../utils/BookContext.jsx";
// import { Books } from "../utils/mockData";
// import useFetch from "../utils/useFetch";
// import { useLocation } from "react-router-dom";
// import { useBooks } from "../utils/BookContext";

function BookDetails() {
  const { books, loading, error } = useBooks();
  const params = useParams();

  // const location = useLocation();
  // const book = location.state?.data;

  // const { data, loading, error } = useFetch(
  //   "https://openlibrary.org/people/mekBot/books/want-to-read.json?limit=50"
  // );

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (error) {
    return <p>Error loading book details: {error.message}</p>;
  }
  
  const book = books.find((book) => book.id == params.id);

  if (!book) {
    return <p>No data available</p>;
  }




  return (
    <>
      {/* {book ? (
        <div className="book-card">
          <img
            className="book-cover"
            src={book.coverImage}
            height="200"
            width="100"
            alt="Image"
          />
          <div className="book-details">
            <h2 className="book-list">{book.title}</h2>
            <p className="book-author">{book.author}</p>
            <p className="book-description">{book.description}</p>
          </div>
        </div>
      ) : (
        <p>Book not found</p>
      )} */}
      <div className="book-card">
        <img
          className="book-cover"
          src={book.coverImage}
          height="200"
          width="100"
          alt="Book Cover"
        />
        <div className="book-details">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">Author: {book.author}</p>
          <p className="book-description">{book.description}</p>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
