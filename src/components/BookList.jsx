import { useEffect, useState } from "react";
import Book from "./Book";
import "./style.css";
import NewSearch from "./NewSearch";
import { Link } from "react-router-dom";

function BookList() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  function filterSearchList(filteredSearchBooks) {
    setFilteredBooks(filteredSearchBooks);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {

      const response = await fetch(
        "https://fakerapi.it/api/v1/books?_quantity=50"
      );
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      
      const data = await response.json();
      console.log(data);
      setFilteredBooks(data.data || []);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <NewSearch filterSearchList={filterSearchList} />
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
