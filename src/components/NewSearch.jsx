import { useState } from "react";
// import { Books } from "../utils/mockData";
import Book from "./Book";
import "./style.css";

function NewSearch() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  function handleSearch(e) {
    const query = e.target.value;
    setSearchText(query);

    if (query.trim() === "") {
      setFilteredBooks([]);
      return;
    }

    const filterBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filterBooks);
  }

  return (
    <div className="new-search">
      <h2>Search Books</h2>

      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Type to search..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <div className="bookList">
        {filteredBooks.length > 0
          ? filteredBooks.map((data) => (
              <Book key={data.id} bookDetails={data} />
            ))
          : searchText && <p>No books found.</p>}
      </div>
    </div>
  );
}

export default NewSearch;
