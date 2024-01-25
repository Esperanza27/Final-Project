export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const GET_JOBS = 'GET_JOBS'

/*  "_id": "613f8896c1c0b3646447b1a7",
            "url": "https://remotive.io/remote-jobs/business/retail-business-consultant-871191",
            "title": "Retail Business Consultant",
            "company_name": "Riverflex",
            "category": "Business",
            "job_type": "",
            "publication_date": "2021-09-05T01:52:24.000Z",
            "candidate_required_location": "UK and Ireland only",
            "salary": "",
            "description": "<p><strong>Location: </strong>Remote/ UK &amp; Ireland</p>\n<p><strong>Duration: </strong>6-12 months (initial contract)</p>\n<p><strong>Start Date: </strong>September 2021</p>\n<p> </p>\n<p>Our client is a  highly successful global fast-fashion retailer and household brand. They have embarked on a large transformation journey, with the objective to bring the business and technology function closely together in order to realize future ambitions.</p>\n<p> </p>\n<p>We are looking for an independent retail consultant that will become part of the tech transformation team (led by Riverflex) with a focus on improving the business partnering, governance, and portfolio management in the new organizational structure. Your role will be to help drive key conversations and workshops between business and technology to create a single aligned, prioritized, and sequenced roadmap, as well as embed lean portfolio management in the overall ways of working.</p>\n<p>Essential technical qualifications and skills:</p>\n<ul>\n<li>Experience at big consulting firms (e.g Deloitte, Accenture, PwC, KPMG, EY)</li>\n<li>Background in retail (to be able to quickly grasp the objectives of the transformation and roadmap items)</li>\n<li>Strong stakeholder and people management skills</li>\n<li>Experience in transformations/big programmes, and roadmapping</li>\n<li>Ability to have strategic conversations as well as be hands-on (e.g. preparing and facilitating workshops)</li>\n<li>Ability to drive clear deadlines</li>\n<li>Fluent in English</li>\n<li>Be available 4-5 days per week</li>\n<li>Preferred: experience or good understanding of lean portfolio management, product-led organisations, and agile ways of working</li>\n</ul>\n<p> </p>\n"
        } */
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