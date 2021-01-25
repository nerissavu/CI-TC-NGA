import {goodManagement} from "./goodManagement.js";
import {clothes} from "./clothes.js";
import {houseWare} from "./houseWare.js";
import {food} from "./food.js";


export class StoreManagement{
    goods = [];
    money = 0;

    constructor(goods, money){
        this.goods = goods,
        this.money = money
    }

    addGood(good){
        this.goods.push(good);
        console.log('Good added')
        console.log(this.goods)
    }

    sellGood(id){
        for (let i = 0; i < this.goods.length; i++) {
            if(this.goods[i].id == id) {
                this.money += this.goods[i].price*(100 - this.goods[i].discount)/100;
                console.log(this.money);
                console.log(`${this.goods[i].name} has been sold`);
                this.goods.splice(i, 1);
                console.log(this.goods)
                
            }
            else{
                console.log(`Can't find the good with id ${id}`);
                console.log(this.goods);
            }
        }
    }
    showMoney(){
        console.log(this.money)
        console.log(this.goods)
    }
}

