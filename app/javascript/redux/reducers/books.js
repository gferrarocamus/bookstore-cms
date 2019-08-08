
const uuidv1 = require('uuid/v1');

function getThings() {
  fetch('http://localhost:3000/v1/books.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}

const data = getThings()
console.log(data)

const books = (state = data, action) => {
  switch (action.type) {
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
      return state.filter(({ id }) => action.id !== id);
    }
    default:
      return state;
  }
};

export default books;
