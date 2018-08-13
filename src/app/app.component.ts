import { Component, ViewContainerRef } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Book Application';
  isLoggedIn : boolean;
  subscription : any;
  constructor(private authService : AuthService, private router : Router) {
    this.isLoggedIn = JSON.parse(sessionStorage.getItem('LoggedInUser')) ? true : false;
    this.subscription = this.authService.isUserLoggedIn.subscribe(
      (data) => {
        debugger;
        this.isLoggedIn = data;
      }
    );
  }
  Logout(){
    this.authService.Logout();
    this.router.navigate(['/']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
