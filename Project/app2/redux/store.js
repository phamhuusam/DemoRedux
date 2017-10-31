import { createStore } from 'redux';
import reducer from './reducer/reducer';

//reducer
// const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'FILTER_SHOW_ALL': 
//             return {...state, filterStatus: 'SHOW_ALL'};
//         case 'FILTER_MEMORIZED':
//             return {...state, filterStatus: 'MEMORIZED'};
//         case 'FILTER_NEED_PRACTICE':
//             return {...state, filterStatus: 'NEED_PRACTICE'};

//         case 'TOGGLE_MEMORIZED':
//             return {
//                 ...state,
//                 arrWords: state.arrWords.map(e => {
//                     if (e.id !== action.id) return e;
//                     else return { ...e, memorized: !e.memorized };
//                 })
//             };
//         case 'TOGGLE_SHOW':
//             return {
//                 ...state,
//                 arrWords: state.arrWords.map(e => {
//                     if (e.id != action.id) return e;
//                     else return { ...e, isShow: !e.isShow };
//                 })
//             };
//         case 'TOGGLE_SHOW_FORM':
//             return {
//                 ...state,
//                 isAdding:  !state.isAdding
//             };
//         case 'ADD_WORD': 
//             return {
//                 ...state, 
//                 arrWords: [{id: state.arrWords.length, en: action.en, vn: action.vn, memorized: false, isShow: false  }].concat(state.arrWords)
//             };

//         default: 
//             break;

//     }
//     return state;
// };

//filterStatus: 'SHOW_ALL',
//isAdding: false


//tạo ra store;
const store = createStore(reducer);
export default store;