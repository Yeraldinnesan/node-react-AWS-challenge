import { Router } from "express";
import { getCities } from "../../controllers/countries/getCities.js";

const citiesRoutes = Router();

citiesRoutes.get("/:state", getCities);

export default citiesRoutes;
