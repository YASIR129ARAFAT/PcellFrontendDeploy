import axios from "axios";
import { baseUrl } from "../constants";

async function deleteComment(_id) {
    try {
        const response = await axios
            .delete(`${baseUrl}/api/comments/deleteComment/${_id}`,
                {
                    headers: {
                        token: localStorage.getItem("token")
                    }
                }
            )
        
        const data = response?.data;
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {deleteComment}