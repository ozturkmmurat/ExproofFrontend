import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UrunKategoriGrup } from 'src/app/models/urunKategoriGrup';
import { UrunKategoriGrupService } from 'src/app/services/urunKategoriGrupService/urun-kategori-grup.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  urunKategoriGrupList: UrunKategoriGrup[] = [];
  urunKategoriGrup$: Observable<UrunKategoriGrup[]>;
  constructor(
    private urunKategoriGrupService: UrunKategoriGrupService
  ) { }

  ngOnInit(): void {
    this.getUrunListesiByKategoriKodu();
  }

  getUrunListesiByKategoriKodu() {
    this.urunKategoriGrup$ = this.urunKategoriGrupService.urunKategoriGrup$
  }

}
