
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';

import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthComponent } from './layouts/auth-layout/auth/auth.component';
import { MainComponent } from './layouts/main-layout/main/main.component';

export const routes: Routes = [


{path:'' ,component:AuthComponent ,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login' ,component:LoginComponent ,title:'login' },
    {path:'register' , loadComponent:()=> import('./pages/register/register.component').then((component)=> component.RegisterComponent) ,title:'register' }
]  },

{path:'',component:MainComponent , children:[
    {path:'', redirectTo:'home' ,pathMatch:'full' } , 
    {path:'home' ,component:HomeComponent,title:'home' },
    {path:'products' , loadComponent:()=>import('./pages/products/products.component').then((classes)=> classes.ProductsComponent ) ,title:'products' },
    {path:'brands',  loadComponent:()=>import('./pages/brands/brands.component').then((classes)=> classes.BrandsComponent ) ,title:'Brands'},
    {path:'categories',  loadComponent:()=>import('./pages/categories/categories.component').then((classes)=> classes.CategoriesComponent ) ,title:'Categories'},
    {path:'cart', loadComponent:()=>import('./pages/cart/cart.component').then((classes)=> classes.CartComponent ) ,title:'Cart'},
    {path:'product-details/:p_id', loadComponent:()=>import('./pages/productdetails/productdetails.component').then((classes)=> classes.ProductdetailsComponent ) ,title:'details'},
    {path:'**',component:NotfoundComponent,title:'Error 404'}

] },

];    
