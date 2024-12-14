import {ObjectId} from 'mongoose';
import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
    _id: ObjectId;
    memberType: string;
    memberStatus: string;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createAt: Date;
    updatedAt: Date;
}

export interface MemberInput {
    memberType?: string;
    memberStatus?: string;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}