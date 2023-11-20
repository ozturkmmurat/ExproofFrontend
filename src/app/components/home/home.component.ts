import { group } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { UrunKategoriGrup } from 'src/app/models/urunKategoriGrup';
import { UrunListesi } from 'src/app/models/urun_listesi';
import { UrunKategoriGrupService } from 'src/app/services/urunKategoriGrupService/urun-kategori-grup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urunKategoriGrupList: UrunKategoriGrup[] = [];
  urunKategoriGrup$: Observable<UrunKategoriGrup[]>;
  urunListesi:UrunListesi
  constructor(
    private urunKategoriGrupService: UrunKategoriGrupService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getUrunListesiByKategoriKodu();
  }

  getUrunListesiByKategoriKodu() {
    this.urunKategoriGrup$ = this.urunKategoriGrupService.urunKategoriGrup$
  }

  @ViewChild('mailForm') mailFormChild: any; 
  openLg(): void {
    this.modalService.open(this.mailFormChild, { size: 'lg' });
  }
}
