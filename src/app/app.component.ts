import { Component, Input, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UrunKategoriGrup } from './models/urunKategoriGrup';
import { UrunKategoriGrupService } from './services/urunKategoriGrupService/urun-kategori-grup.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language:string = "TR";
  title = 'ExproofFrontend';
  
  urunKategoriGrup$: Observable<UrunKategoriGrup[]>;
  langs = ["tr", "en"]
  /**
   *
   */
  constructor(
     private urunKategoriGrupService:UrunKategoriGrupService,
     public translateService: TranslateService,
     private router:Router,
     private route:ActivatedRoute
     ) {
      this.translateService.addLangs(["tr", "en"]);
      this.checkBrowserLanguage()

    
  }

  ngOnInit():void{
    this.getUrunListesiByKategoriKodu();
  }

  public get translationFormTypeScript(): string {
    return this.translateService.instant("example5.fromTypeScript");
  }

  
  public onChange(selectedLanguage: string): void {
    this.translateService.use(selectedLanguage);
    this.language = selectedLanguage;
  }

  checkBrowserLanguage(){
    if(this.langs.length >= 0)
    {
        var stringBrowserLang = this.translateService.getBrowserLang()
        var browserLang = this.translateService.getBrowserLang()
          if (this.langs.includes(String(stringBrowserLang))) {
            this.translateService.use(String(browserLang))
            this.translateService.defaultLang = String(browserLang)
            this.language = String(browserLang).toUpperCase()
          }else{
            this.translateService.use("en")
            this.translateService.defaultLang = "en"
            this.language = "en".toUpperCase() 
          }
    }
  }

  public click(selectedLanguage:string):void{
    this.translateService.use(selectedLanguage);
    this.translateService.defaultLang = selectedLanguage;
    this.language = selectedLanguage.toUpperCase();
    this.getUrunListesiByKategoriKodu();
  }
  public activaLanguae(){
    return this.translateService.defaultLang;
  }

  getUrunListesiByKategoriKodu(){
    this.urunKategoriGrupService.getAllUrunListesiByKategoriKodu().subscribe(response => {
      this.urunKategoriGrupService.urunKategoriGrup$.next(response.data)
      this.urunKategoriGrup$ = this.urunKategoriGrupService.urunKategoriGrup$
    })
  }
}
