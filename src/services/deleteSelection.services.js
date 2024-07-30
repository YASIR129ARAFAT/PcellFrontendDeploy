import axios from "axios";
import { baseUrl } from "../constants.js";

async function deleteSelection(_id) {
    try {
        const response = await axios
            .delete(`${baseUrl}/api/selection/deleteSelection/${_id}`, {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
        console.log(response?.data);
        return response?.data;
    } catch (error) {
        console.log(error);
        throw new Error(error)
        return error?.response?.data;

    }
}

export {deleteSelection}