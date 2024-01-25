export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export const AddFavorite = (title) => {
    return {
        type: ADD_FAVORITE,
        payload: title
    }
}

export const RemoveFavorite = (title) => {
    return {
        type: REMOVE_FAVORITE,
        payload: title
    }
}