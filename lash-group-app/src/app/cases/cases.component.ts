import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

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
{"statusKey":"InProgress","patientID": 1234, "dob": "02/02/1979", "name": "Adam, Jones", "serviceID": 6789, "service": "CoPay"}]

  constructor() { }

  ngOnInit() {
  }

}
