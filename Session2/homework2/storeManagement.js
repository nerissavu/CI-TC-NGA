import {goodManagement} from "./goodManagement"
import {clothes} from "./clothes"
import {houseWare} from "./houseWare"
import {food} from "./food"


class StoreManagement{
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
                console.log("Good has been added to your basket");
                money = this.money + goods[2]*(100 - good[4])/100
            }
            else{
                console.log(`Can't find the good with id ${id}`);
                console.log(this.good);
            }
        }
    }
}

let chair = new houseWare('1','chair',10,'company1','2020-02-01','very stable')
console.log(chair)