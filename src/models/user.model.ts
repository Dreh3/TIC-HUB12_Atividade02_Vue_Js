export enum Role {
    ADMIN,
    COSTUMER
}

export class User {

    constructor(public id:number, public username:string, public email:string, public role:Role){}

}