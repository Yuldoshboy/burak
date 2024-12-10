import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log('goHome');
    res.send("Welcome to HomePage");
  } catch (err) {
    console.log("Error: goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log('getLogin');  // shu joygacha bo'lgan mantiqda xato 
    //bo'lgan bo'lmaganini tekshirish uchun
    res.send("Welcome to LoginPage");
  } catch (err) {
    console.log("Error: getLogin", err);
  }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    console.log('SignUp');
    res.send("Welcome to Sign Up Page");
  } catch (err) {
    console.log("Error: getSignUp", err);
  }
};
export default restaurantController;
