import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { UrunDetay } from 'src/app/models/urun_detay';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrunDetayService {

  constructor(private httpClient:HttpClient) { }

  getUrunDetayByUrunId(urunId:Number):Observable<SingleResponseModel<UrunDetay>>{
    let newPath = environment.apiUrl+"tr/UrunDetay/GetUrunDetayByUrunId?urunId="+urunId;
    return this.httpClient.get<SingleResponseModel<UrunDetay>>(newPath)
  }
}
