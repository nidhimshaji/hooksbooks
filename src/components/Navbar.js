import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div>
      <h1> Reading List</h1>
      <p> Currently you have {books.length} books to read </p>
    </div>
  );
};

export default Navbar;
