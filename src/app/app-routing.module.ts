
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/component/cart/cart.component';
import { ProductDetailsComponent } from './products/component/product-details/product-details.component';
import { AllProductComponent } from './products/component/all-product/all-product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:"full"},
  {path:'product',component:AllProductComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
