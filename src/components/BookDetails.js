import React from "react";

const BookDetails = ({ book, dispatch }) => {
  return (
    <div>
      <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
        {book.title} {book.author}
      </li>
    </div>
  );
};
export default BookDetails;
