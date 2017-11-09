import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';


/*đây là app 1*/
//import App from './app/App';
//import store from './app/redux/store';
// import App from './App1/App';
// import store from './App1/redux/store';  
// const Root = () => (
//     <Provider store={store}>
//       <App />
//     </Provider>
// )

/*đây là app 2*/
// import App from './app2/App';
// import store from './app2/redux/store';
// AppRegistry.registerComponent('Project', () => App);


/*đây là app 3 demo navgation*/
// import store from './app2/redux/store';

// import App from './app3/App';
// AppRegistry.registerComponent('Project', () => App);

/*đây là app 4 demo navgation*/
import App from "./app4/index";
AppRegistry.registerComponent("Project", () => App);
