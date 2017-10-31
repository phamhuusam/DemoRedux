import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,    
} from 'react-native';

import { connect } from 'react-redux';
import Word from './Word';
import Filter  from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {
    getWordList() {
        const { myFilterState, arrWords } = this.props;
        if (myFilterState === 'SHOW_ALL')
            return arrWords;

        if (myFilterState === 'MEMORIZED')
            return arrWords.filter(e => e.memorized)

        if (myFilterState === 'NEED_PRACTICE')
            return arrWords.filter(e => !e.memorized)
        
        return arrWords;
    }

    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                <Header/>
                {this.props.myIsAdding ? <Form/> : null }                
                <View style={{flex: 10}}>
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({ item }) => <Word myWord={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Filter/>                               
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        myFilterState: state.filterStatus,
        arrWords: state.arrWords,
        myIsAdding: state.isAdding
    };
}
export default connect(mapStateToProps)(Main);

