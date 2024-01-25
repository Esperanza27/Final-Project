export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const GET_JOBS = 'GET_JOBS'

 export interface IJob {
  _id: string;
  url: string;
  title: string;
  company_name: string;
  category: string;
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
}
// tipizzazione del return 
type FavoriteActionProps = {
  type: string;
  payload: string;
}

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

export const addToFavorite = (title: string): FavoriteActionProps => {
  return {
    type: ADD_TO_FAVORITE,
    payload: title
  }
}

export const removeFromFavorite = (title: string) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: title
  }
}

export const getJobsAction = (query: string) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: GET_JOBS,
          payload: data as IJob[],
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}