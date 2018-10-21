import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAtFP8_T8v63of6zL_DG9RFooEIkGFlLak",
      authDomain: "one-time-password-1d719.firebaseapp.com",
      databaseURL: "https://one-time-password-1d719.firebaseio.com",
      projectId: "one-time-password-1d719",
      storageBucket: "one-time-password-1d719.appspot.com",
      messagingSenderId: "590094277244"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
          <SignUpForm />
          <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
