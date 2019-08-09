import axios from 'axios';

export const fetchBooks = () => async dispatch => {
  try {
    const res = await axios.get('/v1/books');

    dispatch(getBooks(res.data));
  } catch (err) {
    dispatch(postError({ msg: err.response.statusText, status: err.response.status }));
  }
};

export default fetchBooks;