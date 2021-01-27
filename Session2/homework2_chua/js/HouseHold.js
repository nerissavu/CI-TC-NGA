import Product from "./product.js"

export default class HouseHold extends Product{
    durability;

    constructor(name, price, producer, durability){
        super(name, price, producer, 0.1 )
        this.durability = durability;
    }
}