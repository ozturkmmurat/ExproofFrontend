import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Aksesuarlar } from 'src/app/models/aksesuarlar';
import { SertifikaTur } from 'src/app/models/sertifikaTur';
import { UrunGallery } from 'src/app/models/urunGallery';
import { UrunDetay } from 'src/app/models/urun_detay';
import { UrunListesi } from 'src/app/models/urun_listesi';
import { AksesuarlarService } from 'src/app/services/aksesuarlarService/aksesuarlar.service';
import { SertifikaTurService } from 'src/app/services/sertifikaTurService/sertifika-tur.service';
import { UrunDetayService } from 'src/app/services/urundetayService/urun-detay.service';
import { UrunGalleryService } from 'src/app/services/urunGalleryService/urun-gallery.service';
import { UrunListesiService } from 'src/app/services/urunListesiService/urun-listesi.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Mail } from 'src/app/models/mail';
import { MailDto } from 'src/app/models/mailDto';
import { MailService } from 'src/app/services/mailService/mail.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  urun: UrunDetay;
  aksesuarlar: Aksesuarlar;
  aksesualarList: Aksesuarlar[] = [];
  sertifikaTur: SertifikaTur[] = [];
  urunListesi: UrunListesi;
  urunGallery : UrunGallery[] = [];
  collectionResult : number
  randomNumber: number
  randomNumber2 : number
  constructor(
    private activatedRoute: ActivatedRoute,
    private urunDetayService: UrunDetayService,
    private aksesuarlarService: AksesuarlarService,
    private sertifikaTurService: SertifikaTurService,
    private urunListesiService: UrunListesiService,
    private domSanitizer: DomSanitizer,
    private urunGalleryService: UrunGalleryService,
    private modalService: NgbModal,
    private formBuilder:FormBuilder,
    private mailService:MailService,
    private toastrService:ToastrService,
    private translateService: TranslateService
    
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["urunId"]) {
        this.getUrunDetayByUrunId(params["urunId"])
        this.getAksesuarlar(params["urunId"])
        this.getSertifikaLogo(params["urunId"])
        this.productInformation(params["urunId"])
        this.getProductUrunGallery(params["urunId"])
      }
    })
  }

  getUrunDetayByUrunId(urunId: number) {
    this.urunDetayService.getUrunDetayByUrunId(urunId).subscribe(response => {
      this.urun = response.data
      this.updateImageUrl()
    })
  }

  getAksesuarlar(urunId: number) {
    this.aksesuarlarService.getAksesualar(urunId).subscribe(response => {
      this.aksesualarList = response.data
    })
  }

  getSertifikaLogo(urunId: number) {
    this.sertifikaTurService.getSertifikaListBySertifikaId(urunId).subscribe(response => {
      this.sertifikaTur = response.data
    })
  }

  productInformation(id: number) {
    this.urunListesiService.getUrunListesiById(id).subscribe(response => {
      this.urunListesi = response.data
    })
  }

  getProductUrunGallery(id:number){
    this.urunGalleryService.getUrunGalleryByUrunId(id).subscribe(response => {
      this.urunGallery = response.data
    })
  }

  updateImageUrl() {
    $(document).ready(function () {
      var setUrl = "https://esit.com.tr"
      var x = document.querySelectorAll("#collapseOne img")
      for (let index = 0; index < x.length; index++) {
        var url = x[index].getAttribute("src")
        var updateUrl = x[index].setAttribute("src", setUrl + url)
      }
    })
  }

  @ViewChild('mailForm') mailFormChild: any; 
  openLg(): void {
    this.modalService.open(this.mailFormChild, { size: 'lg' });
  }

}



