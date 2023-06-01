import { Router } from "express";
import { createUser } from "../../controllers/user/createUser.js";
import { getUsers } from "../../controllers/user/getUsers.js";

const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);

export default userRoutes;
