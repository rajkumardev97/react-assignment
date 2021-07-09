import http from "../http-common";

import { API_CONSTANTS } from "../shared/constants/api.constants";

const getAllCompanies = () => {
  return http.get(API_CONSTANTS.COMPANY.GET_ALL_COMPANIES);
};
 
const CompanyServices = {
  getAllCompanies, 
};

export default CompanyServices;
