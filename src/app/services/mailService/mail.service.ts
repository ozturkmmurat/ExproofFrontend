import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from 'src/app/models/mail';
import { MailDto } from 'src/app/models/mailDto';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient:HttpClient) {
      
   }
   sendMail(mailDto:MailDto):Observable<ResponseModel>{
      let newPath = environment.apiUrl+"tr/Mail/SendMail";
      return this.httpClient.post<ResponseModel>(newPath,mailDto)
   }
}
