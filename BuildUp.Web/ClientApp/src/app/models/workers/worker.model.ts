import { MemberType } from "../member-type.enum";
import { Person } from "../person.model";

export class Worker extends Person {
    nickName?: string;
    imgUrl?: string;
    licenseNumber?: string;

    // fullName()  {
    //     return this.nickName;
    // }

    constructor() {
        super();
    }

}