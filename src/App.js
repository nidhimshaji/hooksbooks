import React from "react";
import "./styles.css";
import BookContextProvider from "./contexts/BookContextProvider";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
};

export default App;
