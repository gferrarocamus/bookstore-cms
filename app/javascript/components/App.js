import React from 'react';
import {Provider} from 'react-redux'
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from './HelloWorld';

import configureStore from '../configureStore'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => 'Home!'} />
          <Route path="/" render={() => <HelloWorld greeting="Friend" />} />
        </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
