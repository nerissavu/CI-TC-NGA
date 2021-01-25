
import {goodManagement} from "./goodManagement.js"

export class houseWare extends goodManagement{
    stability;

    constructor(id, name, price, manufacturer, dateModified, stability){
        super(id, name, price, manufacturer, 10, dateModified);
        this.stability = stability;
    }
}