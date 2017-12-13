import { Component, OnInit } from '@angular/core';
 // import { Cases } from '../cases/cases.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  dashboardItems  = [
  {"id" :"14", "name" :"Benefit Verification", "service":"BV"}, 
  {"id" :"14", "name":"Prior Authorization", "service":"PA"}, 
  {"id" :"14", "name":"CoPay", "service":"CoPay"},
  {"id" :"14", "name" :"PAP", "service":"PAP"},
  {"id" :"14", "name": "Prescription Referal", "service":"PR"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
