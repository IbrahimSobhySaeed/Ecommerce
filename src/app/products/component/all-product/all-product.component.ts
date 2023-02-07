
import { ProductService } from './../../service/product.service';
import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  productList:any[]=[];
  categories:any[]=[];
  cartProduct:any[]=[];
  constructor(public _ProductService:ProductService ) { }

  ngOnInit(): void {
    this.getProducts();
    this. getCategories();
  }

  getProducts(){
    this._ProductService.getAllProduct().subscribe(result=>{
      this.productList=result;
    },error=>{console.log(error)})
  }

  getCategories(){
    this._ProductService.getAllCategory().subscribe(result=>{
      this.categories=result;
    },error=>{console.log(error)})
  }

  filterCategory(event:any){
    let value=event.target.value;
    if (value =="All") {
      this.getProducts()
    }
    else{
      this.getProductByCatigory(value);

    }

  }


  getProductByCatigory(keyword:any){
      this._ProductService.getProductsByCategory(keyword).subscribe((result:any)=>{
      this.productList=result;
      },error=>{console.log(error)})
  }


  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!);
      let exsit=this.cartProduct.find(item=>item.item.id==event.item.id);
      if(exsit){



        alert("this product is already in cart");
      }
      else{
        this.cartProduct.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProduct));
      }
    }
    else{
      this.cartProduct.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProduct));
    }






  }


}
