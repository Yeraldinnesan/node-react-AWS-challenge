import axios from "axios";
import { getApiToken } from "../../utils/apiToken.js";

export const getCountries = async (req, res) => {
  try {
    // Authorization token
    const authToken = await getApiToken();

    // Get the countries with the token
    const countriesUrl = "https://www.universal-tutorial.com/api/countries";
    const countriesHeaders = {
      Authorization: `Bearer ${authToken}`,
      Accept: "application/json",
    };

    const countriesRes = await axios(countriesUrl, {
      headers: countriesHeaders,
    });
    const countries = countriesRes.data;
    console.log(countries);
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch countries" });
  }
};

// try {
//   const { data } = await axios(
//     "https://countriesnow.space/api/v0.1/countries/flag/unicode"
//   );
//   res.send(data.data);
//   console.log(data);
// } catch (error) {
//   console.error("error at get Countries", error);
// }
