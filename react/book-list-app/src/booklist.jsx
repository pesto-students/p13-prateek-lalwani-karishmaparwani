import React from 'react';
import Book from './book';


const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ];
  
  function Booklist() {
    return ( <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}, <strong>Year:</strong> {book.year}
          </li>
        ))}
      </ul>
    </div>)
  }
  
export default Booklist;