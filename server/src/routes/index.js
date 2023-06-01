import { Router } from "express";
import { getCountries } from "../controllers/countries/getCountries.js";

import user from "./user/user.routes.js";
import states from "./countries/states.routes.js";
import cities from "./countries/cities.routes.js";
import countries from "./countries/countries.routes.js";

const router = Router();

router.use("/user", user);
router.use("/countries", countries);
router.use("/states", states);
router.use("/cities", cities);

export default router;
