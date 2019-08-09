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

export const getBooks = payload => ({
  type: GET_POSTS,
  payload,
});

export const postError = payload => ({
  type: POST_ERROR,
  payload,
});

export default createBook;
