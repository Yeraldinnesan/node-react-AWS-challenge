import { Router } from "express";
import { getCountries } from "../../controllers/countries/getCountries.js";

const countriesRoutes = Router();

countriesRoutes.get("/", getCountries);

export default countriesRoutes;
