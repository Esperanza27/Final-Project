import {  ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions';

const initialState = {
    list: [],
   
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return ()=>{
console.log(action.payload);

                return {
                    ...state,
                   list : [...state.list, action.payload]
                    }
            }
             
            
        case REMOVE_FAVORITE:
            return {
                ...state,
                    list: [...state.list.filter((favorite) =>favorite !== action.payload, action.payload)],
                
            }
        default:
            return state;
    }
}


export default favoritesReducer;