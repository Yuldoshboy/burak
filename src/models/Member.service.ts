import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel
    }
    
    public async processSignUp(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({ memberType: MemberType.RESTAURANT })
            .exec();
            console.log("Exist:", exist);
        if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        try {
            const result = await this.memberModel.create(input);
        
            // const tempResult = new this.memberModel(input);
            // const result = await tempResult.save();
    
            result.memberPasswords = "";
            return result;
        }
        catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }
    // Promise faqat async functionlarda ishlatiladi boshqa hollarda void uzi ishlatiladi.
}

export default MemberService;