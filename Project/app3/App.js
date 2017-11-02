import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import './getTemp';

export default class App  extends Component {
    render() {
        return (
            <View style= { styles.container }>
                <Text style= {styles.message}> Hà nội nhiệt độ là 230c </Text>
                <TouchableOpacity style= {styles.button}>
                    <Text >
                        Lấy nhiệt độ
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
     message: {
        fontSize: 25,
        color: 'grey'      
    },

    button: { 
        backgroundColor: 'red',
        padding: 10,     
        margin: 10   
    }
 }); 