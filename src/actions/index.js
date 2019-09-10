import * as TYPES from "./types";

export const addBook = (dispatch, book) => {
  return new Promise((resolve, reject) => {
    if (!book.title || !book.author) reject();
    else {
      dispatch({ type: TYPES.ADD_BOOK, book });
      resolve();
    }
  });
};

export const removeBook = (dispatch, id) => {
  dispatch({ type: TYPES.REMOVE_BOOK, id });
};
