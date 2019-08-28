import React from "react";
import "./styles.css";
import BookContextProvider from "./contexts/BookContextProvider";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookForm />
      </BookContextProvider>
    </div>
  );
};

export default App;
