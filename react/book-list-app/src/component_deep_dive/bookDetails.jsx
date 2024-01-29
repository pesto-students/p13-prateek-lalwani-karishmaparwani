import React from 'react';

const BookDetail = ({ title, author, year}) => (
    <div>
        <h3>Book Details</h3>
        <p><strong>Title:</strong> {title}</p>
    <p><strong>Author:</strong> {author}</p>
    <p><strong>Year:</strong> {year}</p>
    </div>
)

export default BookDetail;