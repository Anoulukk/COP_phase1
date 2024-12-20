import axios, { AxiosResponse } from "axios";
import { UsersQueryResponse } from "./_models";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../../ConnectFirebase/Firebase";


const GET_USERS_URL = `http://localhost:3000`;



const getFormData = (): Promise<UsersQueryResponse> => {
    return axios
      .get(`${GET_USERS_URL}/get-form-data`)
      .then((d: AxiosResponse<UsersQueryResponse>) => d.data);
};

const createFormData = async (formdata: any): Promise<UsersQueryResponse | undefined> => {

console.log(formdata);
            const formsCollection = collection(db, "temporary_form");
          const respData:any = await addDoc(formsCollection, formdata);


console.log(respData);
  return respData;
  // return axios
  //   .post(`${GET_USERS_URL}/add-form-data`, formdata)
  //   .then((response: any) => response.data)
};


export {
  getFormData,
  createFormData
};