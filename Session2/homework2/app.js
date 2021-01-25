class StoreManagement{
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
        this.booksList.push(book);
        console.log("Book added");
      }

    sellGood(id){
        for (let i = 0; i < this.memes.length; i++) {
            if(this.memes[i].id == id) {
                this.memes.splice(i, 1);
                console.log("Meme deleted");
            }
        }
    }
}

class houseWare extends StoreManagement{
    stability;

    constructor(id, name, price, manufacturer, dateModified, stability){
        super(id, name, price, manufacturer, '10%', dateModified);
        this.stability = stability;
    }
}

class Clothes extends StoreManagement{
    origin;
    material;

    constructor(id, name, price, manufacturer, dateModified, origin, material){
        super(id, name, price, manufacturer, "5%", dateModified);
        this.origin = origin;
        this.material = material
    }
}

class Food extends StoreManagement{
    taste;

    constructor(id, name, price, manufacturer, dateModified, taste){
        super(id, name, price, manufacturer, "2%", dateModified);
        this.taste = taste;
    }
}
