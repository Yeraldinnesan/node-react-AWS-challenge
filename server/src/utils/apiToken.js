import axios from "axios";
import { API_TOKEN, API_EMAIL } from "../../config.js";

export const getApiToken = async () => {
  const authUrl = "https://www.universal-tutorial.com/api/getaccesstoken";
  const authHeaders = {
    Accept: "application/json",
    "api-token": API_TOKEN,
    "user-email": API_EMAIL,
  };

  const authResponse = await axios.get(authUrl, { headers: authHeaders });
  return authResponse.data.auth_token;
  //   console.log(authToken);
};
