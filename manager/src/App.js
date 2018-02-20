import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAcipoAcBnXXzwv2xh_O6outf6JUNficts',
      authDomain: 'manager-c95da.firebaseapp.com',
      databaseURL: 'https://manager-c95da.firebaseio.com',
      projectId: 'manager-c95da',
      storageBucket: 'manager-c95da.appspot.com',
      messagingSenderId: '302493954476'
      };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
