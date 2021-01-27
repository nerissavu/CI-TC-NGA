import Product from "./product";

export default class Inventory{
    products = []
    revenue = 0;

    import(product){
        if(product instanceof Product){
            this.products.push(product);

        }
    }

    sale(id){
        let index = this.products.findIndex((product) => {
            return product.id == id;
        }); 


        // let index =-1;
        // let i = 0;
        // for(let product of this.products){
        //     if(product.id == id){
        //         index = i;
        //         break
        //     }

        //     i++
        // }

        if (index >=0){
            this.revenue += this.products[index].price *(1 - this.product[index].discount);
            this.products.splice(index,1);
        }
    }

    checkRevenue(){
        console.log("Doanh thu: " + this.revenue);
    }
}