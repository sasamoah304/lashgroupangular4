import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

dashboardItems = new Array<any>();

  // dashboardItems  = [
  // {"id" :"14", "name" :"Benefit Verification", "service":"BV"}, 
  // {"id" :"14", "name":"Prior Authorization", "service":"PA"}, 
  // {"id" :"14", "name":"CoPay", "service":"CoPay"},
  // {"id" :"14", "name" :"PAP", "service":"PAP"},
  // {"id" :"14", "name": "Prescription Referal", "service":"PR"}
  // ];

  constructor(private dashboarddata: DataService) { }

  ngOnInit() {
    this.dashboardItems = this.loadDashboard();
  }

  private loadDashboard (){
    return this.dashboarddata.getDashboarddata() 

  }

}
