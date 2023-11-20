import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"", pathMatch:"full",component:HomeComponent},
  {path:"certificates", component:CertificatesComponent},
  {path:"products/:urunKategoriGrupId", component:ProductsComponent},
  {path:"products/:urunKategoriGrupId/productDetail/:urunId",component:ProductDetailComponent},
  {path:"productDetail",component:ProductDetailComponent},
  {path:"categories",component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
