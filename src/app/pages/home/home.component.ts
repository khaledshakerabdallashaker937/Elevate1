import { CategoriesService } from './../../core/services/categories/categories.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../../core/interfaces/products/iproduct';
import { ProductService } from './../../core/services/products/product.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ICategory } from '../../core/interfaces/categories/icategory';
import { UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../../shared/pipes/search/search.pipe';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/authentication/auth.service';
@Component({
  selector: 'app-home',
  imports: [CarouselModule , UpperCasePipe ,SearchPipe ,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy {

  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: false
  }



  categoriesSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200:{
        items:6
      },
    },
    nav: false
  }


searchValue:string = ' '
categoriesData!:ICategory[]

productsData!:IProduct[]
productsSub!:Subscription


private readonly _AuthService = inject(AuthService) 

  constructor(private _ProductService:ProductService, private _CategoriesService:CategoriesService){}


  ngOnInit(): void {

 console.log(this._AuthService.userInfo);
this._CategoriesService .getAllCategories().subscribe({
  next:(res)=>{
console.log(res.data);

this.categoriesData = res.data

  }
})

  this.productsSub = this._ProductService.getAllProducts().subscribe({
    //Data
    next:(res)=>{
      this.productsData = res
    console.log(this.productsData);


    },
    error:(err)=>{
      console.log(err);
      
    },
    complete:()=>{

    }
   })
  }
ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
}
}
