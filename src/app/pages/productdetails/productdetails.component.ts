import { ProductService } from './../../core/services/products/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../core/interfaces/products/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [ CarouselModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})



export class ProductdetailsComponent implements OnInit {

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     }

  //   },
  //   nav: false
  // }




  private readonly _ActivatedRoute = inject(ActivatedRoute) 

productID!:string
productDetails:IProduct|null = null
constructor( private  _ProductService :ProductService){}

ngOnInit(): void {
    
this._ActivatedRoute.paramMap.subscribe({

next:(p)=>{
  this.productID = p.get('p_id')  ! ;
console.log(this.productID);

  

}

})


this._ProductService.getSpecificproducts(this.productID).subscribe({


  next:(res)=>{
    console.log(res);
    this.productDetails = res
  
  console.log(this.productDetails);
  
  },
  error:(err)=>{
    console.log(err);
    
  }
})

}
}
