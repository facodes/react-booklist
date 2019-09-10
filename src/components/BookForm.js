import React, { useState, useContext } from "react";
import { addBook } from "../actions";
import { BookContext } from "../contexts/BookContext";

function BookForm() {
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const { dispatch } = useContext(BookContext);

  const clearInputs = () => {
    setAuthorInput("");
    setTitleInput("");
  };

  a = 2;
  var a;
  console.log(a);

  const onSubmitHandler = e => {
    e.preventDefault();
    e.persist();
    addBook(dispatch, {
      title: titleInput,
      author: authorInput
    }).then(() => {
      clearInputs();
      e.target.reset();
    });
  };

  return (
    <form className="book-form" onSubmit={onSubmitHandler}>
      <input
        onChange={e => setTitleInput(e.target.value)}
        className="input input--block input--primary"
        type="text"
        placeholder="Add a book title"
      />
      <input
        onChange={e => setAuthorInput(e.target.value)}
        className="input input--block input--primary"
        type="text"
        placeholder="Add the author name"
      />
      <button className="btn">add book</button>
    </form>
  );
}

export default BookForm;
