import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";
import { throwError } from "rxjs";

@Injectable()
export class ProductsService{

    private products:Product[] = [];//products is Products type array

    insertProduct(title:string,desc:string,price:number) {//dont need to mention the type we retuen ts has feature called
                                                          //type inference-infer(guess) the type which is return

        const prodId = new Date().toString(); 
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.products]//pull out the elemenets of products array and add them to a new array
        //return this.products ; won't work cause arrays and objs are reference types of js this will
        // return a pointer to the memory of the list , then it's possible to edit the product by the outside of the class
        //to avoid this we return a copy of product like return[...this.products]
        //...- spread operator 
        
    }
    getSingleProduct(productId:string){

        const product = this.findProduct(productId)[0];//assign the first element of the retured 
                                                        //array , that means the product
        return {...product};

    }
    updateProduct(productId:string, title:string, desc:string, price:number){
        
        const product = this.findProduct(productId);

    }


    //create this as a seperate method beacuse it used inside more than one functions
    private findProduct(prodId:string):[Product,number]{
         const productIndex = this.products.findIndex(prod=> prod.id == prodId)
         const product = this.products[productIndex];

           if(!product){
            throw new NotFoundException('product is not found');
           }

            return [product,productIndex];//returns an array
         }

}

