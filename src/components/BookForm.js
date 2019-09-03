import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { dispatch } = useContext(BookContext);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author
      }
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1> Add Books</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        name="title"
        onChange={e => setTitle(e.target.value)}
      />
      <label>Author</label>
      <input
        type="text"
        value={author}
        name="author"
        onChange={e => setAuthor(e.target.value)}
      />
      <button> Add Book </button>
    </form>
  );
};

export default BookForm;
