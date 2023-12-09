import express from "express";
import multer from "multer";

import {
  create,
  getDetail,
  getList,
  remove,
  update,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "_";
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.get("/list", getList);
router.get("/:id", getDetail);
router.post("/", upload.single("image"), create);
router.put("/update/:id", upload.single("image"), update);
router.delete("/delete/:id", remove);
export default router;
