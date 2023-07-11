

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  currentDetail: any;

  constructor(private http: HttpClient) { }

  getApi() {
    return this.http.get<{
      err: boolean,
      response:any,
      message:any;
    }> (`${environment.baseUrl}/task/getalldata`)
  }

 addApi(datas:any){
    return this.http.post<{
      err: boolean,
      response:any,
      message:any;
    }> (`${environment.baseUrl}/scrap/add-url`,datas)
  }

  EditApi(id:any,datas:any){
    return this.http.post<{
      error: boolean,
      response:any,
      message:any;
    }> (`${environment.baseUrl}/task/update/${id}`,datas)
  }


   deleteApi(id:any){
    return this.http.post<{
      error:boolean,
      response:any,
      message:any
    }> (`${environment.baseUrl}/task/delete`,id)
   }



}
