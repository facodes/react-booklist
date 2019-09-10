import * as TYPES from "../actions/types";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_BOOK:
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: Date.now() }
      ];
    case TYPES.REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
