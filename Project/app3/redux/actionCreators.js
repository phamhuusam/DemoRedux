
import getTemp from '../getTemp'

export function beginFetch () {;
    return  {type: 'BEGIN_FETCH'};
}

export function fetchSuccess (cityName, temp) {
    return {
        type: 'FETCH_SUCCESS',
        cityName,
        temp
    }
}

export function fetchErrors() {
    return {type: 'FETCH_ERRORS'};
}

export function fetchDataThunk(cityName) {
    return dispatch => {
        dispatch(beginFetch());
        getTemp(cityName)
        .then(temp => dispatch(fetchSuccess(cityName, temp)))
        .catch(err => dispatch(fetchErrors()));
    }
}