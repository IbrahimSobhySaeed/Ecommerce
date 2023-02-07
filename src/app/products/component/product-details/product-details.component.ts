import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
id:any;
data:any={};
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService ) {
    this.id=this._ActivatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);

   }

  ngOnInit(): void {
    this.getdata();
  }
getdata(){
  this._ProductService.getProductsByID(this.id).subscribe(res=>{
    this.data=res;
    console.log(this.data);

  })
}


}
