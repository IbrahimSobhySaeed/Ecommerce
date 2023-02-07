import { CartModule } from './cart/cart.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import{HttpClientModule} from "@angular/common/http"
import { CommonModule } from '@angular/common';
import{ProductsModule} from'./products/products.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        CommonModule,
        RouterModule,
        CartModule,
         ProductsModule



    ]
})
export class AppModule { }
