import { MemberType } from "./member-type.enum";

export class User {
    id: number;
    userName: string;
    email: string;
    password: string;
    memberType: MemberType;
}