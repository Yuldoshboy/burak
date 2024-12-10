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
    // RESPONSE turlari: send, render, json, redirect, end
  } catch (err) {
    console.log("Error: getLogin", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log('processLogin');  // shu joygacha bo'lgan mantiqda xato 
    //bo'lgan bo'lmaganini tekshirish uchun
    res.send("DONEc for process login page!");
  } catch (err) {
    console.log("Error: processLogin", err);
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

restaurantController.processSignUp = (req: Request, res: Response) => {
  try {
    console.log('processSignUp');  // shu joygacha bo'lgan mantiqda xato 
    //bo'lgan bo'lmaganini tekshirish uchun
    res.send("DONE for Sign Up page!");
  } catch (err) {
    console.log("Error: processSignUp", err);
  }
};

export default restaurantController;
