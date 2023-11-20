import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { UrunGallery } from 'src/app/models/urunGallery';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrunGalleryService {

  constructor(private httpClient:HttpClient) { }

  getUrunGalleryByUrunId(id:number):Observable<ListResponseModel<UrunGallery>>{
    let newPath = environment.apiUrl+"api/UrunGallery/GetAllUrunGalleryByUrunId?id="+id;
    return this.httpClient.get<ListResponseModel<UrunGallery>>(newPath);

  }
}
