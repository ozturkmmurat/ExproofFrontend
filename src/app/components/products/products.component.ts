import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrunListesi } from 'src/app/models/urun_listesi';
import { UrunListesiService } from 'src/app/services/urunListesiService/urun-listesi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  urunListesi:UrunListesi[]=[];
   urun : UrunListesi;

  constructor(
    private activatedRoute:ActivatedRoute,
    private urunListesiService: UrunListesiService
  ) { }
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["urunKategoriGrupId"]){
        this.getUrunListesiById(params["urunKategoriGrupId"])
      }
    })
  }

  getUrunListesiById(grupId:number){
    this.urunListesiService.getByIdAllUrunListesi(grupId).subscribe(response => {
      this.urunListesi = response.data
    })
  }

}
