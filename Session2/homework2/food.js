import {goodManagement} from "./goodManagement"

export class food extends goodManagement{
    taste;

    constructor(id, name, price, manufacturer, dateModified, taste){
        super(id, name, price, manufacturer, "2%", dateModified);
        this.taste = taste;
    }
}