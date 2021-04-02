import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  setLoading,
} from "../actions/logActions";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };

    case setLoading:
      return {
        ...state,
        loading: true,
      };

    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
