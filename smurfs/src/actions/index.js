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
            console.log(res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err})
        })
}


// export const LOGIN_START = 'LOGIN_START';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const loggingIn = creds => dispatch => {
//     dispatch({ type: LOGIN_START });
//     return (
//         axios.post(`http://localhost:5000/api/login`, creds)
//             .then(res => {
//                 // console.log("My toe", res)
//                 localStorage.setItem("token", res.data.payload);
//                 dispatch({ type: LOGIN_SUCCESS});
//                 return true;
//             })
//             .catch(err => {
//                 // console.log(err)
//                 dispatch ({ type: LOGIN_FAILURE, payload: err});
//                 return err.response
//             })
//     )
// }

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
