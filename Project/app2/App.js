import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Provider} from 'react-redux';
import store from './redux/store';
import Main from './com/Main';
export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <Main/>
            </Provider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
    }
});

