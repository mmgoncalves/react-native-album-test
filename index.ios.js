// import a library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// crate a component 
const App = () => (
    <Header />
  );

// render it to the device
AppRegistry.registerComponent('albums', () => App);
