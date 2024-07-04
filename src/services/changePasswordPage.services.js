import axios from "axios";
import { baseUrl } from "../constants";

async function changePassword(formVal) {
    try {
        const response = await axios.post(`${baseUrl}/api/user/changePassword`,
            formVal,
            {
                headers: {
                    token: localStorage.getItem('token')
                }
            }
        )

        const data = response?.data;

        return data;

    } catch (error) {
        console.log(error);
    }
}

export { changePassword }