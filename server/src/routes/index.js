import { Router } from "express";

import user from "./user/user.routes.js";
import countries from "./countries/countries.routes.js";

const router = Router();

router.use("/user", user);
router.use("/countries", countries);

export default router;
