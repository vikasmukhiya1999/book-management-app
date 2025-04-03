import { useEffect, useState } from "react";
import Book from "./Book";
import "./style.css";
import NewSearch from "./NewSearch";
import { Link } from "react-router-dom";
// import useFetch from "../utils/useFetch";
import { useBooks } from "../utils/BookContext";

function BookList() {
  const { books, loading, error } = useBooks();
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (books) {
      setFilteredBooks(books);
    }
  }, [books]);

  if (loading) {
    return <p>Loading books...</p>;
  }
  if (error) {
    return <p>Error loading books: {error.message}</p>;
  }

  return (
    <>
      <NewSearch filterSearchList={books} />
      <div className="bookList">
        {filteredBooks.map((data) => (
          <Link key={data.id} to={`/book/${data.id}`} state={{ data }}>
            <Book bookDetails={data} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default BookList;
