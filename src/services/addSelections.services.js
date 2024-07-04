import axios from "axios";
import { baseUrl } from "../constants";

async function addSelections(_id,enrolmentNo) {
    try {
        const response = await axios
            .post(`${baseUrl}/api/selection/addSelections/${_id}`,
                {
                    enrolmentNo,
                },
                {
                    headers: {
                        token: localStorage.getItem("token")
                    }
                }
            )
        
            console.log(response?.data);
            return response?.data;
    } catch (error) {
        console.log(error);
    }
}

export { addSelections }