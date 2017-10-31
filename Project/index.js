import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './app2/App';
import store from './app2/redux/store';


// import App from './App1/App';
// import store from './App1/redux/store';  
// const Root = () => (
//     <Provider store={store}>
//       <App />
//     </Provider>
// )


AppRegistry.registerComponent('Project', () => App);
