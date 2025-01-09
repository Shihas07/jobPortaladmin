
import axiosInstance from "../utilities/axiosInstance";

const fetchData=async()=>{
     
     const response=await axiosInstance.get("/fetchData")
     console.log(response)
     return response.data
}

export default fetchData;