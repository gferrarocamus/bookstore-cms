import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/test';
import Book from '../Book';


const testBooks = ({ getBooks, book }) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);


  console.log(book)
  return (
  <div>
    <table className="books-table">
  <tbody>
    {book.map(book => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
        percentage={'0'}
        removeBook={function(){}}
      />
    ))}
  </tbody>
  </table>
  </div>
  );
};

const mapStateToProps = state => ({
  book: state.books,
});

export default connect(
  mapStateToProps,
  { getBooks },
)(testBooks);
