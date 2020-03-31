import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store/store';
import HomePage from './components/screens/home';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage/>
      </Provider>
    );
  }
}
