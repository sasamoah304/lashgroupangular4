import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

import { Response } from '@angular/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],

})
export class CasesComponent implements OnInit {

  
  cases = new Array<any>();
  caseservices = new Array<any>();
  totalRec : number;
  page: number = 1;

  filteredCases = '';

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

  constructor(private serverService: ServerService, private dashServiceData: DataService) { 
   
  }

  onSave(){
    this.serverService.storeServers(this.cases)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );
  }

   private loadCases() {
      this
          .serverService
          .getServers()
          .subscribe((resp: Response) => {
              this.cases = resp.json();
              this.totalRec = this.cases.length;
              console.log(this.totalRec);
              console.log(this.page);

          });
  }

 private loadCaseServices (){
    return this.dashServiceData.getDashboarddata() 

  }

  ngOnInit() {

    this.caseservices = this.loadCaseServices();
    this.loadCases();
  }

}
