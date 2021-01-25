import {goodManagement} from "./goodManagement.js"

export class clothes extends goodManagement{
    origin;
    material;

    constructor(id, name, price, manufacturer, dateModified, origin, material){
        super(id, name, price, manufacturer, 5, dateModified);
        this.origin = origin;
        this.material = material
    }
}