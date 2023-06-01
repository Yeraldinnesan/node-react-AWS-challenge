import { Router } from "express";
import { getStates } from "../../controllers/countries/getStates.js";

const statesRoutes = Router();

statesRoutes.get("/:country", getStates);

export default statesRoutes;
