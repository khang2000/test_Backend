import express from "express";
const router = express.Router();
import routerProduct from "./product.js";
import routerAuth from "./auth.js";
import routerCategories from "./categories.js";
import routerImages from "./upload.js";
import routerUser from "./user.js";

router.use("/v1/product", routerProduct);
router.use("/auth", routerAuth);
router.use("/categories", routerCategories);
router.use("/images", routerImages);
router.use("/user", routerUser);

export default router;
