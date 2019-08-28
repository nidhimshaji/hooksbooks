import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

const BookForm = () => {
  const [input, setInput] = useState("");
  const { books, addBooks, removeBooks } = useContext(BookContext);
  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    setInput(e.target.value);
  };

  return (
    <form onSubmit={addBooks}>
      <h1> Add Books</h1>
      <label>Title</label>
      <input
        type="text"
        value={input}
        name="title"
        onChange={() => handleChange}
      />
      <label>Author</label>
      <input
        type="text"
        value={input}
        name="author"
        onChange={() => handleChange}
      />
      <button> Add Book </button>
      <button onClick={removeBooks}>Remove Button</button>
    </form>
  );
};

export default BookForm;
