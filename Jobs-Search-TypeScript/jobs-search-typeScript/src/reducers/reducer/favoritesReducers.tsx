import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/favoriteActions"


type TList = {
    list: string[];
}

type TAction = {
    type: string;
    payload: string;
}

const initialState: TList = {
    list: []
}

const favoritesReducers = (state = initialState, action: TAction): TList => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                list: state.list.filter((favorite) => favorite !== action.payload)
            }
        default:
            return state
    }
}


export default favoritesReducers;