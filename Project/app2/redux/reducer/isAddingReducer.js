const isAddingReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_SHOW_FORM') return !state;
    return state;
};
export default isAddingReducer;