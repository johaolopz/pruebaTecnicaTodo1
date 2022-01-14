import {SET_PAGES_FOR_PAGINATION, SET_POKEMON_LIST, SET_URL, SET_NUMBER} from "./actions"

const initialState = {
    pokemons: [],
    pageControl: {},
    url: 'https://pokeapi.co/api/v2/pokemon',
    number: 1
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_POKEMON_LIST :
            return  {...state,
                        pokemons : action.payload
            }
        case SET_PAGES_FOR_PAGINATION :
            return  {...state,
                        pageControl : action.payload
            }
        case SET_URL :
            return  {...state,
                        url : action.payload
            }
        case SET_NUMBER :
        return  {...state,
                    number : action.payload
        }
        default:
            return state
    }
}
