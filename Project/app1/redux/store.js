
// khai báo lung tung.
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

const reducer = (state = {value : 1}, action) => {
    if(action.type === 'UP') return {value: state.value + 1};
    if(action.type === 'DOWN') return {value: state.value -1};
    return state;
}
const store = createStore(reducer);
export default store;