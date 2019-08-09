import axios from 'axios';

export const createBook = (title, category) => ({
  type: 'CREATE_BOOK',
  title,
  category,
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const getBooks = books => ({
  type: 'GET_BOOKS',
  books,
});

export const postError = error => ({
  type: 'POST_ERROR',
  error,
});

export const fetchBooks = () => async dispatch => {
  try {
    const res = await axios.get('/v1/books');
    dispatch(getBooks(res.data));
  } catch (err) {
    dispatch(postError({ msg: err.response.statusText, status: err.response.status }));
  }
};

export default createBook;
