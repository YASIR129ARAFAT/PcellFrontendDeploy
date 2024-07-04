import axios from "axios";
import { baseUrl } from "../constants";

const getAllResults = async () => {
    try {
      // console.log("localStorage.getItem('token')");
      // console.log(localStorage.getItem("token"));
      const response = await axios.get(
        `${baseUrl}/api/announcements/getallannouncements/${true}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      if (response?.status === 200) {
        // console.log(response);
        // setAllAnnouncements(response.data);
        return response?.data;
      } else {
        // navigate("/error");
        return {};
      }
    } catch (error) {
      console.log(error);
    //   navigate("/error");
    }
  };

  export {getAllResults}