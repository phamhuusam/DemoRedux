
import { combineReducers } from 'redux';


import isAddingReducer from './isAddingReducer';
import filterStatusReducer from './filterStatusReducer';
import arrWordsReducer from './arrWordsReducer';


const reducer = combineReducers({
    isAdding : isAddingReducer,
    filterStatus: filterStatusReducer,
    arrWords: arrWordsReducer
})

export default reducer;