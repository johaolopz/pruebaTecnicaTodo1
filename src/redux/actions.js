export const SET_PAGES_FOR_PAGINATION = 'SET_PAGES_FOR_PAGINATION';
export const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
export const SET_URL = 'SET_URL';
export const SET_NUMBER = 'SET_NUMBER';

export function setPagesForPagination(payload) {
    return function(dispatch) {
        return dispatch({ type: SET_PAGES_FOR_PAGINATION, payload });
    }
}

export function setPokemonList(payload) {
    return function(dispatch) {
        return dispatch({ type: SET_POKEMON_LIST, payload });
    }
}

export function setUrl(payload) {
    return function(dispatch) {
        return dispatch({ type: SET_URL, payload });
    }
}

export function setNumber(payload) {
    return function(dispatch) {
        return dispatch({ type: SET_NUMBER, payload });
    }
}