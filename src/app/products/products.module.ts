import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './component/all-product/all-product.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './component/product/product.component';



@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetailsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    RouterModule
  ]
})
export class ProductsModule { }
