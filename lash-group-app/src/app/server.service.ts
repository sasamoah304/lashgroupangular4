import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]){
    return this.http.post('http://www.mocky.io/v2/590212490f00006b18d2cb05/', servers);
  }

  getServers(){
    return this.http.get('http://www.mocky.io/v2/590212490f00006b18d2cb05')
    // .map(
    //     (response: Response) => {
    //     const data = response.json();
    //     return data;
    //     }
    //   )
    // .catch (
    //     (error: Response) => {
    //       return Observable.throw(error);
    //     }
    //   );

  }

}
