import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';
import {toggleMemorized, toggleShow} from '../redux/actionCreators';


class Word extends Component {
   
    render() {
        const { vn, en, memorized, isShow, id } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtonText = memorized ? 'forget' : 'Memorized';
        const showButtonText = isShow? 'hide' : 'show';
        const showText = isShow? vn : '----';

        return (
            <View style={styles.container}>
                <Text style={{ textDecorationLine }}> {en}</Text>
                <Text> {showText}</Text>
                <View style={styles.controller}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.toggleMemorized(id)} >
                        <Text>{memorizedButtonText}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}  onPress={() =>  this.props.toggleShow(id)}>
                        <Text>{showButtonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(null, {toggleMemorized, toggleShow})(Word);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcdcdc',
        padding: 10,
        margin: 10
    },

    controller: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginTop: 10
    }
});

