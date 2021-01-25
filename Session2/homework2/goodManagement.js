export class goodManagement{
    goods = [];
    id;
    name;
    price;
    manufacturer;
    discount;
    dateModified;

    constructor(id, name, price, manufacturer, discount, dateModified, goods){
        this.goods = goods;
        this.id = id;
        this.name = name;
        this.price = price;
        this.manufacturer = manufacturer;
        this.discount = discount;
        this.dateModified = dateModified;
    }

    addGood(good) {
        this.dateModified = new Date().toTimeString();
        this.booksList.push(good);
        console.log("Good added");
      }

}

