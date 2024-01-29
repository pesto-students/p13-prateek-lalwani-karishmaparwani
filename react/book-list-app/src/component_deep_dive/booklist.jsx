import React, { Component } from "react";

import WithLogging from './hoc_component';

let books = [
    { title: 'Book 5', author: 'Author 1', year: 2020 },
    { title: 'Book 6', author: 'Author 2', year: 2018 },
    { title: 'Book 7', author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ];
class Booklist extends Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        return(
            <div>
            <h2>Book List</h2>
            <ul>
              {books.map((book, index) => (
                <li key={index}>
                  <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}, <strong>Year:</strong> {book.year}
                </li>
              ))}
            </ul>
          </div>
        
    )}
}
export default WithLogging(Booklist);