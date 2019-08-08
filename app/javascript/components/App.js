import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import Homepage from './Homepage'
import Test from '../components/layout/testBooks'

import configureStore from '../redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            {/* <Route path="/" render={() => <HelloWorld greeting="Friend" />} /> */}
            <Route path="/test" render={() => <Test />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
