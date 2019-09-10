import React, { useReducer, createContext, useEffect } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

function BookContextProvider(props) {
  const reducer = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  const [books, dispatch] = reducer;
  console.log(reducer);
  console.log(Array.isArray(books));

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
export default BookContextProvider;
