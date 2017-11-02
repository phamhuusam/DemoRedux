import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {connect} from 'react-redux';

import  getTemp from './getTemp';
import * as actionCreators from './redux/actionCreators';

 class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = { cityName: '' };
    }

    onGetTempFromURL () {

        const {cityName} = this.state;
        // this.props.beginFetch();
        // getTemp(cityName)
        // .then(temp => this.props.fetchSuccess(cityName, temp))
        // .catch(err => this.props.fetchErrors());

        this.props.fetchDataThunk(cityName);
    }

    onGetWetherMessage() {
        const {cityName, isErrors, isLoading, temp} =  this.props;
        if(isLoading)  return "...Loading";
        if(isErrors) return "Vui long thu lai";
        if(cityName == '') return "Nhap ten thanh pho";
        return `${cityName} hien tai la ${temp} oC`;            
    }

    render() {
        return (
            <View style= { styles.container }>
                <Text style= {styles.message}> {this.onGetWetherMessage()} </Text>
                <TextInput 
                    style={{height: 40, width: '100%', backgroundColor: 'white'}}
                    onChangeText={(text) => this.setState({cityName: text})}
                    value={this.state.cityName}/>


                <TouchableOpacity style= {styles.button} onPress = {this.onGetTempFromURL.bind(this)}>
                    <Text >
                        Lấy nhiệt độ
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {cityName: state.cityName, temp: state.temp, isErrors: state.isErrors, isLoading: state.isLoading};
}
export default connect(mapStateToProps, actionCreators )(Main);

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