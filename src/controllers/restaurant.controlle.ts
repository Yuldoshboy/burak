import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "..//models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Welcome to HomePage");
  } catch (err) {
    console.log("Error: goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Welcome to getLogin");
  } catch (err) {
    console.log("Error: getLogin", err);
  }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    res.send("Welcome to getSignUp");
  } catch (err) {
    console.log("Error: getSignUp", err);
  }
};
export default restaurantController;
