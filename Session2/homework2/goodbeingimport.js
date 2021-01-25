import {goodManagement} from "./goodManagement.js";
import {clothes} from "./clothes.js";
import {houseWare} from "./houseWare.js";
import {food} from "./food.js";
import {StoreManagement} from './storeManagement.js'

let chair = new houseWare('1','chair',10,'company1','2020-02-01','very stable')
console.log(chair)
let hamburger = new food('2','hamburger',2,'company2','2021-02-01','good')
console.log(hamburger)
let jacket = new clothes('3','jacket', 20,'company3','2019-02-03','China','Cotton'  )
console.log(jacket)

let StoreManagement1 = new StoreManagement([chair,hamburger],0)
StoreManagement1.addGood(jacket)

StoreManagement1.sellGood("1")