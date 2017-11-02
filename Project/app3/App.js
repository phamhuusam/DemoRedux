import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class App  extends Component {
    render() {
        return (
            <View style= { styles.container }>
                <Text> demo </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'yellow',
        flex: 1
    }
 });    