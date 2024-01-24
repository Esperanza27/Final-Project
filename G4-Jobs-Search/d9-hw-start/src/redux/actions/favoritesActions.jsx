export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export const setAddFavorite = (title) => {
    return {
        type: ADD_FAVORITE,
        payload: title
    }
}

export const setRemoveFavorite = (title) => {
    return {
        type: REMOVE_FAVORITE,
        payload: title
    }
}