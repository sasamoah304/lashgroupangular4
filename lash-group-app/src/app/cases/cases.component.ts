import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],

})
export class CasesComponent implements OnInit {

  filteredCases = '';
  case = [];

  cases = [{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "PA"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"InProgress","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "PA"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"InProgress","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "PA"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "PA"},
{"statusKey":"InProgress","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "PA"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"Completed","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"InProgress","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "PA"},
{"statusKey":"ActionNeeded","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "BV"},
{"statusKey":"InProgress","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"}];

  services = ["CoPay","BV", "PA", "AM", "ANT"];

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
  constructor() { }

  ngOnInit() {
  }

}
