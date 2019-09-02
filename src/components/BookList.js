import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books, removeBooks } = useContext(BookContext);
  return books.length ? (
    <ul>
      {books.map(book => {
        return (
          <BookDetails book={book} key={book.id} removeBooks={removeBooks} />
        );
      })}
    </ul>
  ) : (
    <p> There are no books</p>
  );
};

export default BookList;
