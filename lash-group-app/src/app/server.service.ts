import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]){
    this.http.post('http://www.mocky.io/v2/590212490f00006b18d2cb05/', servers);
  }

}
