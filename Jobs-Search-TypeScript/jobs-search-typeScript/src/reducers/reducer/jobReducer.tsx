import { GET_JOBS, IJob } from '../actions/favoriteActions'
type TResult = {
  results: IJob[];
}
type TAction = {
  type: string;
  payload: IJob[];
}

const initialState: TResult = {
  results: [],
}

const jobReducer = (state = initialState, action: TAction): TResult => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
      }
    default:
      return state
  }
}

export default jobReducer
