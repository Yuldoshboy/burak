import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// Quyida Router instancedan foydalanamiz va get post
//metodlarini amalga oshiramiz va APIlar hosil qilamiz

// router.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to HomePage");
// });
// router.get("/login", (req: Request, res: Response) => {
//   res.send("Welcome to LoginPage");
// });
// router.get("/signup", (req: Request, res: Response) => {
//   res.send("Welcome to SignUpPage");
// });


// router.get("/", memberController.goHome);
// // "/"dan kelgen requestni routerimiz membercontrollerning "/" methodiga junatyapti
// router.get("/login", memberController.getLogin);
// // "/login"dan kelgen requestni routerimiz membercontrollerning login metodiga junatyapti
// router.get("/signup", memberController.getSignUp);

export default router;
