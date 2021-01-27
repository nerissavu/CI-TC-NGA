import Product from "./product.js"

export default class Cloth extends Product{
    durability;

    constructor(name, price, producer, taste){
        super(name, price, producer, 0.02 )
        this.taste = taste;
    }
}