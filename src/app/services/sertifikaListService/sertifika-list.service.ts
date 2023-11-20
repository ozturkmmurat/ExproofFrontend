import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SertifikaList } from 'src/app/models/sertifikaList';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SertifikaListService {

  constructor(private httpClient:HttpClient) { }

  getSertifikaListBySertifikaId(id:number):Observable<SingleResponseModel<SertifikaList>>{
    let newPath = environment.apiUrl+"api/SertifikaList/GetSertifikaListBySertifikaId?=id"+id;
    return this.httpClient.get<SingleResponseModel<SertifikaList>>(newPath)
  }
}
