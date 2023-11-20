import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLanguage(){
    return localStorage.getItem("language") || 'tr';
  }

  add(key : string, value : string){
    return localStorage.setItem(key,value)
  }

  remove(key : string){
    return localStorage.removeItem(key);
  }

  update(key : string, value : string){
    return localStorage.setItem(key,value)
  }
}
