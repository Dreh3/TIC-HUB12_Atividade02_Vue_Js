import {Product} from './product.model';
interface CartItem {
    product: Product;
    quantity:number;
}

export class Cart{

    constructor(public listProducts:CartItem[]=[]){}

    addItem(product: Product, quantity: number){
        //procuro o item na lista existente
        const itemFound = this.listProducts.findIndex((item) => item.product.name === product.name)
        if(itemFound>-1 && this.listProducts[itemFound]){ //verifico se encontrou índice válido e se há algo nesse índice
            this.listProducts[itemFound].quantity += quantity
        }else{
            this.listProducts.push({product, quantity})
        }
    }

    getTotalItems():number{
        
        let total = 0.0

        this.listProducts.forEach((item) => {
            total += item.quantity;
        });

        return total
    }

    getFinalPrice():number{

        let total = 0.0

        this.listProducts.forEach((item) => {
            total += item.product.price * item.quantity;
        });

        return total
    }



}