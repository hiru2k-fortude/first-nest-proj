import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

//whih begins with @ is a decorator
@Controller('products')
export class ProductsController{

    //when the instance of the class is created this is automatically called and productService is stored in same name of the property name because of the usage of accessor.
    //readOnly -  cannt change the value once it assigned
    //the class which is with injectable decorator can be injectorble in the constructor of another class
    constructor(private readonly productsService:ProductsService){}


  @Post()
  addProduct(@Body('title') prodTitle:string,@Body('description') prodDesc:string, @Body('price') prodPrice:number,){

    const generatedId= this.productsService.insertProduct(prodTitle,prodDesc,prodPrice);
    
    return {id:generatedId} //obj is returned 

  }

  @Get()
  getAllProducts(){

   return this.productsService.getProducts();//this keywrd is used to refer to the current obj
   

  }
  @Get(':id')
  getSpecificProduct(@Param('id') productId:string){

      return this.productsService.getSingleProduct(productId);
  }
  
  //patch vs put 
  //put used to replace the whole product 
  //patch is used to chnage(replace) only the updated fields(data)
  @Patch(':id')
  updateProduct(@Param('id') prodId:string, @Body('title') prodTitle:string, @Body('description') desc:string,@Body('price') prodPrice:number){

     
  }

}