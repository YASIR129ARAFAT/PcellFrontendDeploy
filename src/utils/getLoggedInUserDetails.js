import axios from "axios";
import { baseUrl } from "../constants.js";

export const getLoggedInUserDetails = async()=>{
    try {
        const response = await axios.get(`${baseUrl}/api/user/loggedInUserDetails`,{
            headers:{
                token:localStorage.getItem('token')
            }
        });
     
        return response?.data;
    } catch (error) {
        console.log('error in fetching logged in user details');
        throw new Error(error)
        return error?.response?.data
    }
}