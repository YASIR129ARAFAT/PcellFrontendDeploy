import axios from "axios";
import { baseUrl } from "../constants.js";

const getAllUsers = async (getAdminsOnly) => {
    // getAdminsOnly give you option to load only admins
    try {
        const response = await axios.get(
            `${baseUrl}/api/user/${getAdminsOnly}`,
            {
                headers: {
                    token: localStorage.getItem("token"),
                },
            }
        );

        console.log(response?.data);
        return response?.data;
    } catch (error) {
        console.log("Failed to load all users page", error);
        throw new Error(error)

    }
};

export { getAllUsers }