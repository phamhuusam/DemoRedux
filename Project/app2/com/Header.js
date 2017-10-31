import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';

import {toggleShowForm} from '../redux/actionCreators';



class Header extends Component
{
    onToggleShowForm() {
        this.props.toggleShowForm();
    }
    render() {
        return(
            <View style={styles.myHeader}> 
                <Text></Text>
                <Text>MY WORD</Text>
                <TouchableOpacity onPress={this.onToggleShowForm.bind(this)}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default connect (null, { toggleShowForm })(Header);

const styles = StyleSheet.create({
    myHeader:  {
        backgroundColor: '#dfdfdf',
        flex : 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'

    }
})
