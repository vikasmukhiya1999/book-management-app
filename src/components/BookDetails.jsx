import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";


function BookDetails() {
  const params = useParams();

  const book = Books.find((book) => book.id == params.id);

  return (
    <>
      {book ? (
        <div className="book-card">
          <img
            className="book-cover"
            src={book.image}
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
      )}
    </>
  );
}

export default BookDetails;
