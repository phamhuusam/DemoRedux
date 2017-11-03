import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import './getTemp';

export default class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (
            <View style= { styles.container }>
                <Text style= {styles.message}> Hà nội nhiệt độ là 23 oC </Text>
                <TextInput 
                    style={{height: 40, width: '100%', backgroundColor: 'white'}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}/>


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