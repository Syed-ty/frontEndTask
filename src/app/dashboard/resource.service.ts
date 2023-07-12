

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  currentDetail: any;

  constructor(private http: HttpClient) { }

  private sharedData: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.sharedData.asObservable();

  setData(updatedData:any) {
    this.sharedData.next(updatedData);
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


}
