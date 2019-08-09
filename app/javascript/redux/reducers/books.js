// import { initialState } from '../../data';
// const uuidv1 = require('uuid/v1');

const initialState = {
  books: [],
  loading: true,
  error: {},
};

const books = (state = [], action) => {
  const { type, books } = action;

  switch (type) {
    case 'CREATE_BOOK': {
      const book = {
        id: uuidv1(),
        title: action.title,
        category: action.category,
        author: 'Unknown',
        percentage: '0',
      };
      return [...state, book];
    }
    case 'REMOVE_BOOK': {
      console.log('remove');
      return state.filter(({ id }) => action.id !== id);
    }
    case 'GET_BOOKS':
      return [...books];
    case 'POST_ERROR':
      console.log(error);
      return state;
    default:
      return state;
  }
};

export default books;
