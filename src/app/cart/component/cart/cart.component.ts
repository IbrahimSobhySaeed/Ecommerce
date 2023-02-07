import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartproduct:any[]=[];
success:boolean=false;
total:any;
  constructor( private _CartService:CartService) { }

  ngOnInit(): void {
    this.getCartProduct();
  }

  getCartProduct(){
    if("cart" in localStorage){
      this.cartproduct=JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotalPrice();

  }

  getCartTotalPrice(){
    this.total=0;
    for(let prod in this.cartproduct){
      this.total += this.cartproduct[prod].item.price * this.cartproduct[prod].quantity;

    }

  }

  minisAmount(index:number){
    this.cartproduct[index].quantity--;
    this.getCartTotalPrice();
    localStorage.setItem("cart",JSON.stringify(this.cartproduct));

  }
  plusAmount(index:number){
    this.cartproduct[index].quantity++;
    this.getCartTotalPrice();
    localStorage.setItem("cart",JSON.stringify(this.cartproduct));
  }



  detectchanges(){
    localStorage.setItem("cart",JSON.stringify(this.cartproduct));
    this.getCartTotalPrice();
  }

  deleteProduct(index:number){
    this.cartproduct.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(this.cartproduct));
    this.getCartTotalPrice();
  }

  clearShoppingCart(){
    this.cartproduct=[];
    localStorage.setItem("cart",JSON.stringify(this.cartproduct));
    this.getCartTotalPrice();

  }


  addCart(){
    let products=this.cartproduct.map(item=>{
      return {productId:item.item.id,quantity:item.quantity}
    })
    let model={
      "userId" :2,
      "date":new Date(),
      "products":products
    }
    this._CartService.creatNewCart(model).subscribe(res=>{
      this.success=true;
    })

  }

}
