import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getDashboarddata(){

    return   [
              {"id" :"14", "name" :"Benefit Verification", "service":"BV"}, 
              {"id" :"14", "name":"Prior Authorization", "service":"PA"}, 
              {"id" :"14", "name":"CoPay", "service":"CoPay"},
              {"id" :"14", "name" :"PAP", "service":"PAP"},
              {"id" :"14", "name": "Prescription Referal", "service":"PR"}
             ];
  }

}
