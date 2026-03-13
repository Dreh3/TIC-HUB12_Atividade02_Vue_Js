import { Category } from './category.model';

interface ProductInterface{
    id: number;
    name: string,
    price:number,
    category: Category
}

export class Product implements ProductInterface{

    public id: number
    public name: string
    public price: number
    public category: Category

    constructor(id:number, name:string,price:number,category:Category){
        this.id = id
        this.name = name 
        this.price = price
        this.category = category  
    }
}