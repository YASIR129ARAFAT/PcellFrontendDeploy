import axios from "axios";
import { baseUrl } from "../constants.js";

async function addOpening(formData) {
    try {
        const response = await axios.post(`${baseUrl}/api/opening/addOpening`,
            formData,
            {
                headers: {
                    token: localStorage.getItem("token")
                }
            }
        )

        // console.log("data from services ",response?.data);
        return response?.data
    } catch (error) {
        console.log("error from addOpening services", error);
        throw new Error(error)
    }
}

export {addOpening}