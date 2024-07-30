import axios from "axios";
import { baseUrl } from "../constants.js";

async function getAllSelections(){
    try {
        const response = await axios
            .get(`${baseUrl}/api/selection/getAllSelections`,
                {
                    headers:{
                        token:localStorage.getItem("token")
                    }
                }
            )
        console.log(response?.data);
        return response?.data;
        
    } catch (error) {
        console.log(error);
        throw new Error(error)

    }
}

export {getAllSelections}