import express from "express";

import { checkPermission } from "../middlewares/checkPermission.js";
import {
  create,
  getALL,
  getDetail,
  remove,
  update,
} from "../controllers/categories.js";
const routerCategories = express.Router();

routerCategories.get("/", getALL);
routerCategories.get("/:id", getDetail);
routerCategories.post("/", create);
routerCategories.put("/:id", update);
routerCategories.delete("/:id", remove);
export default routerCategories;
