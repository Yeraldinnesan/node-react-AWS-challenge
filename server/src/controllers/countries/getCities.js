import axios from "axios";
import { getApiToken } from "../../utils/apiToken.js";

export const getCities = async (req, res) => {
  try {
    const state = req.params.state;
    const authToken = await getApiToken();
    // console.log(authToken);

    const citiesUrl = `https://www.universal-tutorial.com/api/cities/${state}`;
    const citiesHeaders = {
      Authorization: `Bearer ${authToken}`,
      Accept: "application/json",
    };

    const citiesRes = await axios(citiesUrl, { headers: citiesHeaders });
    const cities = citiesRes.data;
    res.send(cities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cities" });

    console.log(error);
  }
};
