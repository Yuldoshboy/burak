import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
const memberService = new MemberService();
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Welcome to HomePage");
  } catch (err) {
    console.log("Error: goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin"); // shu joygacha bo'lgan mantiqda xato
    //bo'lgan bo'lmaganini tekshirish uchun
    res.send("Welcome to LoginPage");
    // RESPONSE turlari: send, render, json, redirect, end
  } catch (err) {
    console.log("Error: getLogin", err);
  }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    console.log("SignUp");
    res.send("Welcome to Sign Up Page");
  } catch (err) {
    console.log("Error: getSignUp", err);
  }
};

restaurantController.processSignUp = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignUp(newMember);
      //TODO: SESSIONS AUTHENTICATION
    res.send(result);
  } catch (err) {
    console.log("Error: processSignUp", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin"); // shu joygacha bo'lgan mantiqda xato
    //bo'lgan bo'lmaganini tekshirish uchun
    console.log(req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    //TODO: SESSIONS AUTHENTICATION
    res.send(result);
  } catch (err) {
    console.log("Error: processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
