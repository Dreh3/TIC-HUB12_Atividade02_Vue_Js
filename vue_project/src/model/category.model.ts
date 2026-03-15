interface CategoryInterface{
    id: number;
    title: string
}

export class Category implements CategoryInterface{

    constructor(public id:number,public title:string){}

}