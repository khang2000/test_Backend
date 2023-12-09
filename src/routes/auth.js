import { Router } from "express";
import { signIn, signUp } from "../controllers/auth";
import multer from "multer";
import path from "path";
const routerAuth = Router();

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

routerAuth.post("/signup", upload.single("image"), signUp);
routerAuth.post("/signin", signIn);

export default routerAuth;
