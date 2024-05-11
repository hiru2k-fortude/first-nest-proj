//request is received by the contoller
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


//job of the controller is to handle incoming reqs(accept incoming reqs, do somthing and send a response)

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}//app service is the parameter and AppService is the parameter type
                                                          //next js create appService object to pass to this constructor, it's possible 
                                                         //because appService is passed as a provider that means appservice class will be 
                                                         //used by the other classed when it needed 

  @Get()
  getHello(): string {   //ts method , defines the return type after the colon
    return this.appService.getHello(); //nest js conver this plain text to html 
  }
  /* 
    @Get()
    getName():{name:String}{
      return {name:'Hiruni'}; //this convert to json obj
    }
  
  */

}
