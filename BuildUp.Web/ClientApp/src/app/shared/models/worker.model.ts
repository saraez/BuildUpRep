import { MemberType } from "./member-type.enum";

export class Worker {
    id: number;
    userId: number;
    firstName: string;
    lastName?: string;
    nickName?: string;
    phone?: string;
    imgUrl?: string;
    licenseNumber?: string;

}