// import a library
import React from 'react';
import ReactNative from 'react-native';
import Header from './src/components/header';

// crate a component 
const App = () => (
    <Header headerText={'Albums'} />
  );

// render it to the device
ReactNative.AppRegistry.registerComponent('album', () => App);
