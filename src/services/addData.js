

import axiosInstance from "../utilities/axiosInstance";

const addData=async(data)=>{
  // console.log("dataaxios",data)
  const response= await axiosInstance.post("/addData",data)
  console.log("fromaxiosresponse",response)
  return response.data

 
}

export default addData;