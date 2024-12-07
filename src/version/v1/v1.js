import { Router } from "express";
import userRoute from "./route/user.route.js";
import animeRoute from "./route/anime.route.js";

const v1 = Router();

v1.use("/user", userRoute);

v1.use("/anime",animeRoute);

export default v1;