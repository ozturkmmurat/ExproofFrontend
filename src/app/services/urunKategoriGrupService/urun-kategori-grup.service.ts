import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { UrunKategoriGrup } from 'src/app/models/urunKategoriGrup';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrunKategoriGrupService {

  urunKategoriGrupList:UrunKategoriGrup[] = [];
  constructor(
    private httpClient:HttpClient,
    private translateService:TranslateService
    ) { }
    
    urunKategoriGrup$ = new BehaviorSubject<UrunKategoriGrup[]>(this.urunKategoriGrupList);


    get currentUrunKategoriGrup$(): Observable<UrunKategoriGrup[]> {
      return this.urunKategoriGrup$.asObservable();
    }
  
    get currentUrunKategoriGrup(): UrunKategoriGrup[] {
      return this.urunKategoriGrup$.value;
    }

  getAllUrunListesiByKategoriKodu():Observable<ListResponseModel<UrunKategoriGrup>>{
    let newPath =  environment.apiUrl +this.translateService.defaultLang+ "/UrunKategoriGrup/GetUrunListesiByKategoriKodu?language="+this.translateService.defaultLang
    return this.httpClient.get<ListResponseModel<UrunKategoriGrup>>(newPath)
  }
}
