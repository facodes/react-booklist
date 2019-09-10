import React, { useContext } from "react";
import { removeBook } from "../actions/index";
import { BookContext } from "../contexts/BookContext";

function BookItem({ book }) {
  const { dispatch } = useContext(BookContext);

  return (
    <div className="book-list__book-item">
      <div className="book-list__info">
        <h1 className="book-list__title">{book.title}</h1>
        <p className="book-list__author">{book.author}</p>
      </div>
      <button
        className="book-list__delete-btn"
        onClick={() => removeBook(dispatch, book.id)}
      >
        x
      </button>
    </div>
  );
}

export default BookItem;
