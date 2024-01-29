import React, {PureComponent} from 'react';

class Book extends PureComponent {
    render(){
        const {title, author,year} = this.props;

        return(
            <div>
            <h3>Book Details</h3>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Year:</strong> {year}</p>
          </div>
        )
    }
}

export default Book;