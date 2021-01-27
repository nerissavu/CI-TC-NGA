export default class Product {
    id;
    name;
    price;
    producer;
    discount;
    date;

    constructor(name, price, producer, discount) {
        this.name = name;
        this.price = price;
        this.producer = producer;
        this.discount = discount;
        this.date = new Date().toISOString();
        this.id = '_' +  Math.random().toString(36).substr(2, 9);

    }
}