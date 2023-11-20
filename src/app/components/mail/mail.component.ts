import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';
import { UrunKategoriGrup } from 'src/app/models/urunKategoriGrup';
import { UrunListesi } from 'src/app/models/urun_listesi';
import { ErrorService } from 'src/app/services/errorService/error.service';
import { MailService } from 'src/app/services/mailService/mail.service';
import { UrunKategoriGrupService } from 'src/app/services/urunKategoriGrupService/urun-kategori-grup.service';
import { UrunListesiService } from 'src/app/services/urunListesiService/urun-listesi.service';

declare var name :any

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  @Input()  inputUrun: UrunListesi
  urun:UrunListesi
  urunListesi:UrunListesi[] = []
  
  urunKategoriGrup: UrunKategoriGrup[] = []
  mailForm : FormGroup
  collectionResult : number
  randomNumber: number
  randomNumber2 : number
  
  
  
  constructor(
    private formBuilder:FormBuilder,
    private mailService:MailService,
    private toastrService:ToastrService,
    private translateService: TranslateService,
    private urunListesiService : UrunListesiService,
    private urunKategoriGrupService : UrunKategoriGrupService,
    private errorService : ErrorService
    ) { }

  ngOnInit(): void {
    this.mailAddForm()
    this.calculate()
    this.editMailForm()
  }

  mailAddForm() {
    this.mailForm = this.formBuilder.group({
      productName: ["",Validators.required],
      firstNameLastName:["",Validators.required],
      email:["",Validators.required],
      phoneNumber:["",Validators.required],
      mailBody:["",Validators.required],
      mailTitle:["Exproof Web Sitesinden Mail Var",Validators.required],
      senderOfMailSite:["exproof.esit.com.tr",Validators.required],
      calculate:["",Validators.required],
      selectedCategoryId:null,
      selectedProductName:null,
    })
}

sendMail(){
  if (this.mailForm.valid) {
    let addSendMailmodel = Object.assign({},this.mailForm.value)
    if (this.collectionResult == addSendMailmodel.calculate) {
      this.mailService.sendMail(addSendMailmodel).pipe(
        catchError((err:HttpErrorResponse)=> {
            this.errorService.checkError(err)
            this.calculate()
            return of();
        }))
        .subscribe(response => {
          if (response.success) {
            this.toastrService.success(response.message)
            this.calculate()
          }
        })
    }
    else{
      this.toastrService.warning(this.translateService.instant("general.calculateUnsuccess"), this.translateService.instant("general.attention"))
    }
    
  }else{
    this.toastrService.warning(this.translateService.instant("general.formMissing"), this.translateService.instant("general.attention"));
  }
}

editMailForm(){
  if(this.inputUrun != null && this.inputUrun != undefined)
  {
    if (this.inputUrun.id != null) {
      this.mailForm.patchValue({
        productName:this.inputUrun.urun_adi
      });
    }
  }else{
    this.urunKategoriGrupService.getAllUrunListesiByKategoriKodu().subscribe(response => {
      this.urunKategoriGrup = response.data
    })
  }

}

changeCategoryProduct(){
  this.urunListesiService.getByIdAllUrunListesi(this.mailForm.value.selectedCategoryId).subscribe(response => {
    this.urunListesi = response.data
  })
}

changeUrun(){
    this.mailForm.patchValue({
      productName:this.mailForm.value.selectedProductName
    });
}


calculate (){
  this.randomNumber = Math.floor(Math.random() *10);
  this.randomNumber2 = Math.floor(Math.random() *10);
  this.collectionResult = this.randomNumber + this.randomNumber2
}

}
