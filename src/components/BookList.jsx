import { useEffect, useState } from "react";
import Book from "./Book";
import "./style.css";
import NewSearch from "./NewSearch";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";

function BookList() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { data, error, loading } = useFetch(
    "https://openlibrary.org/people/mekBot/books/want-to-read.json?limit=50"
  );
  console.log(data);

  useEffect(() => {
    if (data) {
      setFilteredBooks(data);
    }
  }, [data]);

  if (error) {
    return <p>error occured</p>;
  }

  if (loading) {
    return <p>data loading please wait</p>;
  }

  return (
    <>
      <NewSearch filterSearchList={data} />
      <div className="bookList">
        {filteredBooks.map((data) => (
          <Link key={data.id} to={`book/${data.id}`}>
            <Book bookDetails={data} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default BookList;
