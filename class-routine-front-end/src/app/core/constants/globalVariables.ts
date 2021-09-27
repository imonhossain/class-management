import { acConfig } from '../../app.config';
const API_URL = acConfig.apiUrl

let userInfo = {
  email: "",
  id: null,
  mobile: "",
  name: "",
  role: "",
};

let psDateFormat = {
  showWeekNumbers: false,
  dateInputFormat: "DD/MM/YYYY",
}



export const globalVariables: any = {
  psDateFormat: psDateFormat,
  API_URL: API_URL,
  userInfo: userInfo,
}