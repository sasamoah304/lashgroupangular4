import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

import { Response } from '@angular/http';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],

})
export class CasesComponent implements OnInit {

  filteredCases = '';

  // cases: any[] = [];

  cases = this.onGet();

  caseservices = [
  {"id" :"14", "name" :"Benefit Verification", "service":"BV"}, 
  {"id" :"14", "name":"Prior Authorization", "service":"PA"}, 
  {"id" :"14", "name":"CoPay", "service":"CoPay"},
  {"id" :"14", "name" :"PAP", "service":"PAP"},
  {"id" :"14", "name": "Prescription Referal", "service":"PR"}
  ];

  getStatusClasses(cases: {statusKey:string, patientID:number, dob: string, name:string, serviceID: number, service:string}) {
       
       var returnValue = "";
       if(cases.statusKey === 'Completed'){
         returnValue = 'glyphicon glyphicon-circle-arrow-right'
       }
       if(cases.statusKey === 'ActionNeeded'){
         returnValue = 'glyphicon glyphicon-circle-arrow-up'
       }
       if(cases.statusKey === 'InProgress'){
         returnValue = 'glyphicon glyphicon-circle-arrow-down'
       }

       return returnValue;

  }
    getStyle(cases: {statusKey:string, patientID:number, dob: string, name:string, serviceID: number, service:string}) {
       
       var returnValue = "";
       if(cases.statusKey === 'Completed'){
         returnValue = 'green'
       }
       if(cases.statusKey === 'ActionNeeded'){
         returnValue = 'red'
       }
       if(cases.statusKey === 'InProgress'){
         returnValue = 'blue'
       }

       return returnValue;
    }
  
    getServiceClasses(cases: {statusKey:string, patientID:number, dob: string, name:string, serviceID: number, service:string}) {
       
       var returnValue = "";

          switch (cases.service) {
            case 'CoPay':
                returnValue = 'label label-primary'
                break;
            case 'BV':
                returnValue = 'label label-success'
                break;
            case 'PA':
                returnValue = 'label label-warning'
                break;

            case 'PAP':
                returnValue = 'label label-info'
                break;
            default: returnValue = 'label label-default'
        }

       return returnValue;
    }

  constructor(private serverService: ServerService) { }

  onSave(){
    this.serverService.storeServers(this.cases)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );
  }
   onGet(){
    this.serverService.getServers()
    .subscribe(
           (servers: any[]) => this.cases = servers,
      (error) => console.log(error)
      );
  }

  ngOnInit() {

  }

}
