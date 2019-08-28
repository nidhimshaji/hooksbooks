import React, { createContext, useState } from "react";
import uuid from "uuid/v4";
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "xyz", id: 1 },
    { title: "the way of kings", author: "abc", id: 2 },
    { title: "the final empire", author: "rkz", id: 3 },
    { title: "the hero of ages", author: "kam", id: 4 }
  ]);

  const addBooks = (title, author) =>
    setBooks([
      ...books,
      {
        title,
        author,
        id: uuid()
      }
    ]);

  const removeBooks = id => setBooks(books.filter(book => book.id !== id));

  return (
    <BookContext.Provider value={{ books, addBooks, removeBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
