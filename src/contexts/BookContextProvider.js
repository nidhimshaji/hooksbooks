import React, { createContext, useReducer } from "react";

import { bookReducer } from "../reducer/bookReducer";
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, []);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

// const addBooks = (title, author) =>
//   setBooks([
//     ...books,
//     {
//       title,
//       author,
//       id: uuid()
//     }
//   ]);

// const removeBooks = id => setBooks(books.filter(book => book.id !== id));
