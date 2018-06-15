import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('SACashaloRN', () => App);
AppRegistry.runApplication('SACashaloRN', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
});