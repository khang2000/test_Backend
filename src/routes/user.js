import express from "express";
import multer from "multer";
import path from "path";
import { checkPermission } from "../middlewares/checkPermission.js";
import {
  deleteUser,
  getAllUser,
  getDetailUser,
  updateUser,
} from "../controllers/userCRUD.js";
const routerUser = express.Router();
// const upload = multer({ dest: "uploads/" });
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
routerUser.get("/", getAllUser);
routerUser.get("/:id", getDetailUser);
routerUser.put("/:id", upload.single("image"), updateUser);
routerUser.delete("/:id", deleteUser);

export default routerUser;
