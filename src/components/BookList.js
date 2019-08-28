import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContextProvider';

const BookList = () => {
  const { books } = useContext(BookContext);

  return(
    books.length?(
      { books.map(book=>{
        return(
        <BookDetails books={book} key={book.id} />
        )
      })}
    ) : (<p> There are no books</p>)
  )
}