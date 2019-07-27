export abstract class Person {
    id: number;
    userId: number;
    firstName: string;
    lastName?: string;
    phone?: string;

    // abstract fullName(): string;

    constructor() {
        this.id = 0;
    }
}