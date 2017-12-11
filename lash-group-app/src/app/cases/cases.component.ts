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

  cases = this.onGet();

  caseservices = ["CoPay","BV", "PA", "AM", "ANT"];

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
       if(cases.service === 'CoPay'){
         returnValue = 'label label-primary'
       }
       if(cases.service === 'BV'){
         returnValue = 'label label-success'
       }
       if(cases.service === 'PA'){
         returnValue = 'label label-warning'
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
