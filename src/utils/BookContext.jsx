import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

const BookContext = createContext();

export function BookProvider({ children }) {
  const { data, loading, error } = useFetch(
    "https://openlibrary.org/people/mekBot/books/want-to-read.json?limit=50"
  );
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  }, [data]);

  return (
    <BookContext.Provider value={{ books, loading, error }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  return useContext(BookContext);
}