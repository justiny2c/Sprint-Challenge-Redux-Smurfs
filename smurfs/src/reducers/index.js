import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,  
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE} from "../actions"

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

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
    case ADD_START: {
      return {
          ...state,
          error: "",
          addingSmurfs: true
      }
  }
  case ADD_SUCCESS: {
      return {
          ...state,
          error: "",
          addingSmurfs: false,
          smurfs: action.payload
      }
  }
  case ADD_FAILURE: {
      return {
          ...state,
          addingSmurfs: true,
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