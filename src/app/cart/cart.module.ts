import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './component/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CartModule { }
