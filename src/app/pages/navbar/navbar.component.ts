import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

private readonly _Router = inject(Router)
private readonly _AuthService = inject(AuthService)
logOut(){
  sessionStorage.removeItem('token');
  this._Router.navigate(['/login']);
this._AuthService.userInfo = null 
}


}
