import {
  RETRIEVE_COMPANIES,
  DELETE_COMPANY,
  COMPANIES_LOADING_START,
  COMPANIES_LOADING_STOP
} from "../actions/types";

const initialState = {
  list: [],
  loading: false
};

const companiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case COMPANIES_LOADING_START:
      return {
        ...state,
        loading: true
      };
    case COMPANIES_LOADING_STOP:
      return {
        ...state,
        loading: false
      };

    case RETRIEVE_COMPANIES:
      return {
        ...state,
        list: payload
      };

    case DELETE_COMPANY:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== payload.id)
      };

    default:
      return state;
  }
};

export default companiesReducer;
