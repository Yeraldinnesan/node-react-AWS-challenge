import axios from "axios";
import { getApiToken } from "../../utils/apiToken.js";

export const getStates = async (req, res) => {
  try {
    const country = req.params.country;
    const authToken = await getApiToken();

    const stateUrl = `https://www.universal-tutorial.com/api/states/${country}`;
    const statesHeaders = {
      Authorization: `Bearer ${authToken}`,
      Accept: "application/json",
    };

    const statesRes = await axios(stateUrl, { headers: statesHeaders });
    const states = statesRes.data;
    console.log(states);
    res.send(states);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to fetch states" });
  }
};
