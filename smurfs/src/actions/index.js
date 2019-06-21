import axios from "axios";
// import { axiosWithAuth } from "../utils/axiosWithAuth"

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const getData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            // console.log(res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err})
        })
}


export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const addSmurf = info => dispatch => {
    dispatch({ type: ADD_START });
      axios.post(`http://localhost:3333/smurfs`, info)
          .then(res => {
            // console.log("RESPONSE", res)
            dispatch ({ type: ADD_SUCCESS, payload: res.data});
          })
          .catch(err => {
                // console.log(err)
              dispatch ({ type: ADD_FAILURE, payload: err});
          })   
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
