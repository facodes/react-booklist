import React, { useContext } from "react";
import BookItem from "./BookItem";

import { BookContext } from "../contexts/BookContext";

function BookList() {
  const { books } = useContext(BookContext);
  let count = 0;
  books.forEach(() => count++);
  return (
    <ul className="book-list">
      {count ? (
        books.map(book => <BookItem key={book.id} book={book} />)
      ) : (
        <h1 className="book-list__empty">
          No books to read, enjoy your free time...
        </h1>
      )}
    </ul>
  );
}

export default BookList;
