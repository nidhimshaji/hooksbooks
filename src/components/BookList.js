import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books, dispatch } = useContext(BookContext);
  return books.length ? (
    <ul>
      {books.map(book => {
        return <BookDetails book={book} key={book.id} dispatch={dispatch} />;
      })}
    </ul>
  ) : (
    <p> There are no books</p>
  );
};

export default BookList;
