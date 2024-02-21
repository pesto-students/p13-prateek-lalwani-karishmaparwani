import React, { Component } from 'react'

export default class Book extends Component {
    constructor(){
        super(this.props)
    }
  render() {
    return (
      <div>
        <h2>Book Component</h2>
      <li key={index} >
      <strong>Title:</strong> {this.props.title}, <strong>Author:</strong> {book.author}, <strong>Year:</strong> {book.year}

 </li></div>
    )
  }
}
