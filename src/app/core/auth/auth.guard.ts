import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DateService } from '../date/date.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private dateService: DateService) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      return true
    } else {
      this.router.navigate(['/cadastro'], { queryParams: { returnUrl: state.url } })
      return false;
    }
  }

  getUsuario() {
    var retrievedObject: any = localStorage.getItem('usuario');
    var usuario = JSON.parse(retrievedObject)
    return usuario;
  }
  
}
