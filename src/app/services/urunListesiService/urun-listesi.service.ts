import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { UrunListesi } from 'src/app/models/urun_listesi';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrunListesiService {

  constructor(
    private httpClient:HttpClient,
    private translateService:TranslateService
    ) { }

  getByIdAllUrunListesi(id:number):Observable<ListResponseModel<UrunListesi>>{
    let newPath = environment.apiUrl+this.translateService.defaultLang+"/UrunListesi/GetAllUrunListesiByGrupId?grupId="+id+"&language="+this.translateService.defaultLang;
    return this.httpClient.get<ListResponseModel<UrunListesi>>(newPath);
  }

  getUrunListesiById(id:number):Observable<SingleResponseModel<UrunListesi>>{
    let newPath = environment.apiUrl+this.translateService.defaultLang+"/UrunListesi/GetUrunListesiById?id="+id+"&language="+this.translateService.defaultLang;
    return this.httpClient.get<SingleResponseModel<UrunListesi>>(newPath);
  }

  getUrunListesiByKategoriKodu():Observable<ListResponseModel<UrunListesi>>{
    let newPath = environment.apiUrl+this.translateService.defaultLang+"/UrunListesi/GetUrunListesiByKategoriKodu?language="+this.translateService.defaultLang
    return this.httpClient.get<ListResponseModel<UrunListesi>>(newPath);
  }
}
