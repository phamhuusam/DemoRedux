import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const stateDefault = {
    cityName: '',
    isLoading : false,
    isErrors: false,
    temp: ''
};

const reducer = (state = stateDefault, action) => {
    if(action.type === 'BEGIN_FETCH')
       return {
        cityName: '',
        isLoading : true,
        isErrors: false,
        temp: ''
    };

    if(action.type=== 'FETCH_SUCCESS')
        return {
            cityName: action.cityName,
            isLoading : false,
            isErrors: false,
            temp: action.temp
        };

    if(action.type === 'FETCH_ERRORS')
        return {
            cityName: '',
            isLoading : false,
            isErrors: true,
            temp: ''
        };
    return state;
}
const store = createStore(reducer, applyMiddleware(thunk));
export default store;