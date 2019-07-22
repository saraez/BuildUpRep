export class BldLanguage {
    code: string = "he";
    value: string;
    dir:  BldDirection = BldDirection.rtl;
}

export enum BldDirection {
    rtl,
    ltr
}