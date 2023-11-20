import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SertifikaTur } from 'src/app/models/sertifikaTur';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SertifikaTurService {

  constructor(private httpClient:HttpClient) { }

  getSertifikaListBySertifikaId(id:number):Observable<ListResponseModel<SertifikaTur>>{
    let newPath = environment.apiUrl+"api/SertifikaTur/GetSertifikaListBySertifikaId?id="+id
    return this.httpClient.get<ListResponseModel<SertifikaTur>>(newPath)
  }
}
