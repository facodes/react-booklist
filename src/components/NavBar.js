import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
function NavBar() {
  const { books } = useContext(BookContext);
  let count = 0;
  books.forEach(() => count++);
  return (
    <div className="navbar">
      <h1 className="navbar__title">This is Your Reading List </h1>
      <p className="navbar__book-counter">
        Currently you are reading {count} books...
      </p>
    </div>
  );
}

export default NavBar;
