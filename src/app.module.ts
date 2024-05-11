//this module encapsulates controllers and providers 
//modules are loaded and configured before controllers are executed.
//Module is used to oraganize componnets, such as controllers, proviedrs..
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController], 
  providers: [AppService], //providers are like services which provide services
                           // (ex-provide service to retrive data from db so can use that service in 
                           //contollers, not containing that code in contollers-modularity )
                           
})
export class AppModule {}

/*can have multiple module for a applciation 
ex- shopping cart-shooping cart, user authentication                  */
