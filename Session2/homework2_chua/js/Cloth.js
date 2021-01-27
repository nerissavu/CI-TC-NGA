import Product from "./product.js"

export default class Cloth extends Product{
    durability;

    constructor(name, price, producer, origin, material){
        super(name, price, producer, 0.05 )
        this.origin = origin;
        this.material = material
    }
}