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
    }

    sellGood(id){
        for (let i = 0; i < this.goods.length; i++) {
            if(this.goods[i].id == id) {
                this.goods.splice(i, 1);
                console.log("Good has been sold");
                this.money += good.price*(100 - good.discount)/100;
            }
            else{
                console.log(`Can't find the good with id ${id}`);
                console.log(this.goods);
            }
        }
    }
    showMoney(){
        console.log(this.money)
    }
}

