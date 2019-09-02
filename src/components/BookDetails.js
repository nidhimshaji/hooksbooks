import React from "react";

const BookDetails = ({ book, removeBooks }) => {
  return (
    <div>
      <li onClick={() => removeBooks(book.id)}>
        {book.title} {book.author}
      </li>
    </div>
  );
};
export default BookDetails;
