import {Cart} from './models/cart.model';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
 
import {User} from './models/user.model';
import { Role } from './models/user.model';

const user1 = new User(123, 'maria', 'maria@email.com', Role.COSTUMER);
const user2 = new User(173, 'joao', 'joao@email.com', Role.ADMIN);

const category1 = new Category (4, 'eletrodomésticos');

const product1 = new Product(23, 'smartphone', 1550, { id: 1, name: 'eletrônicos' });
const product2 = new Product(67, 'notebook', 3700, { id: 1, name: 'eletrônicos' });
const product3 = new Product(45, 'geladeira', 3400, category1);

const cart = new Cart();


cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 2);
cart.addItem(product1, 2);

console.log('Carrinho de compras', cart.listProducts);

console.log( 'Total de itens no carrinho : ',cart.getTotalItems());
console.log('Valor total do carrinho: ',cart.getFinalPrice());



