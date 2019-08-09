// import { initialState } from '../../data';
// const uuidv1 = require('uuid/v1');

const initialState = {
  books: [],
  loading: true,
  error: {},
};

const books = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATE_BOOK': {
      // const book = {
      //   id: uuidv1(),
      //   title: action.title,
      //   category: action.category,
      //   author: 'Unknown',
      //   percentage: '0',
      // };
      // return [...state, book];
      return {
        ...state,
        books: [payload, ...state.books],
      };
    }
    case 'REMOVE_BOOK': {
      // return state.filter(({ id }) => action.id !== id);
      console.log("remove")
    }
    case 'GET_BOOKS':
      return {
        ...state,
        books: payload,
      };
    case 'POST_ERROR':
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default books;

