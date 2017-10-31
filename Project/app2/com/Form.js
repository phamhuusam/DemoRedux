import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {connect} from 'react-redux';
import {addWord, toggleShowForm} from '../redux/actionCreators';
class Form extends Component
{
    constructor(props) {
        super(props);
        this.state= {
            en: '',
            vn: ''
        };
        
    }
    onAdd() {
        const {en, vn} = this.state;
        this.props.addWord(en, vn);
        this.props.toggleShowForm();
    }
    render() {
        return(
            <View style={styles.container}> 
                <TextInput 
                    style={styles.textInput} 
                    value= {this.state.en}
                    onChangeText=  {text=> this.setState({en: text})}
                    placeholder = 'Tiếng anh'
                />
                <TextInput 
                    style={styles.textInput} 
                    value = {this.state.vn}
                    onChangeText = {text => this.setState({vn: text})}
                    placeholder = 'Tiếng việt'
                />
                <TouchableOpacity onPress={this.onAdd.bind(this)}>
                    <Text>Add </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default connect (null, {addWord, toggleShowForm})(Form);

const styles = StyleSheet.create({
    textInput:  {        
        height: 40,  
        margin: 10,
        width: 200,
        paddingHorizontal: 10      
    },

    container : {
        alignItems: 'center'
    }
})
