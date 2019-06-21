import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,  } from "../actions"


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START: {
        return {
            ...state,
            error: "",
            fetchingSmurfs: true
        }
    }
    case FETCH_SUCCESS: {
        return {
            ...state,
            error: "",
            fetchingSmurfs: false,
            smurfs: action.payload
        }
    }
    case FETCH_FAILURE: {
        return {
            ...state,
            fetchingSmurfs: false,
            error: action.payload
        }
    }
    default:
        return state;
}
}

    // case LOGIN_START: 
    // return {
    //     ...state,
    //     error: "",
    //     loggingIn: true
    // };
    // case LOGIN_SUCCESS:
    //     return {
    //         ...state,
    //         error: "",
    //         loggingIn: false
    //     }
    // case LOGIN_FAILURE:
    //     return {
    //         ...state,
    //         error: action.payload,
    //         loggingIn: false
    //     }