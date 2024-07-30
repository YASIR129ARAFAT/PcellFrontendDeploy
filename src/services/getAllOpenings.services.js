import axios from "axios";
import { baseUrl } from "../constants.js";

async function getAllOpenings(){
    try {
        const response = await axios.get(`${baseUrl}/api/opening/getAllOpenings`,{
            headers:{
                token:localStorage.getItem("token")
            }
        }) 

        console.log("data from services: ",typeof response?.data.allOpenings);
        return response?.data?.allOpenings

    } catch (error) {
        console.log(error);
        throw new Error(error)

    }
}

export {getAllOpenings}