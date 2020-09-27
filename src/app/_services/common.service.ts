import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {



  baseurl = environment.API_ENDPOINT;

  constructor(private http : HttpClient) { }


  postInfo(endpoint: string, postObject: Object) {
    const url = this.baseurl + endpoint;
    return this.http.post<any>(url, postObject);
  }


  getData(endpoint) {
    const url = this.baseurl + endpoint;

    return this.http.get(url);

  }

  deleteProdut(endpoint){

    const url = this.baseurl + endpoint;

    return this.http.delete(url);

  }
}
