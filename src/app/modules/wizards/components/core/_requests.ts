import axios, { AxiosResponse } from "axios";
import { UsersQueryResponse } from "./_models";


const GET_USERS_URL = `http://localhost:3000`;



const getFormData = (): Promise<UsersQueryResponse> => {
    return axios
      .get(`${GET_USERS_URL}/get-form-data`)
      .then((d: AxiosResponse<UsersQueryResponse>) => d.data);
};

const createFormData = (formdata: any): Promise<UsersQueryResponse | undefined> => {
  console.log("🚀 ~ createFormData ~ formdata:", formdata)
  return formdata;
  // return axios
  //   .post(`${GET_USERS_URL}/add-form-data`, formdata)
  //   .then((response: any) => response.data)
};


export {
  getFormData,
  createFormData
};