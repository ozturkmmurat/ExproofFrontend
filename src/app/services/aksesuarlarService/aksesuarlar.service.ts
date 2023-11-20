import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aksesuarlar } from 'src/app/models/aksesuarlar';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AksesuarlarService {

  constructor(private httpClient:HttpClient) { }

  getAksesualar(id:number):Observable<ListResponseModel<Aksesuarlar>>{
    let newPath = environment.apiUrl+"api/Aksesuarlar/GetAksesuarlar?id="+id;
    return this.httpClient.get<ListResponseModel<Aksesuarlar>>(newPath)
  }
}
