import {
  RETRIEVE_COMPANIES, 
  DELETE_COMPANY,
  COMPANIES_LOADING_START,
  COMPANIES_LOADING_STOP,
} from "./types";

import CompanyServices from "../services/companies.service";

export const retrieveCompanies = () => async (dispatch) => {
  try {
    dispatch(companyLoadingStart());

    const response = await CompanyServices.getAllCompanies();

    const { data } = response;
    dispatch({
      type: RETRIEVE_COMPANIES,
      payload: data,
    });

    dispatch(companyLoadingStop());
  } catch (err) {
    dispatch(companyLoadingStop());

    console.log(err);
  }
};

export const deleteCompany = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_COMPANY,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

// loading START
export const companyLoadingStart = () => {
  return {
    type: COMPANIES_LOADING_START,
  };
};
//  loading STOP
export const companyLoadingStop = () => {
  return {
    type: COMPANIES_LOADING_STOP,
  };
};
