import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  idField: FormControl;
  passwordField: FormControl;
  invalidMessage: boolean;
  errorMessage: any;
  constructor(private authService: AuthService, private router: Router, ) { }

  ngOnInit() {
    this.idField = new FormControl('', [
      Validators.required
    ]);
    this.passwordField = new FormControl('', [
      Validators.required
    ]);
    this.myForm = new FormGroup({
      idField: this.idField,
      passwordField: this.passwordField
    });
  }
  login() {
    if (this.authService.Login(this.idField.value, this.passwordField.value))
      this.router.navigate(["/book"]);
    else {
      this.errorMessage = "Invalid id or password";
      this.invalidMessage = true;
      setTimeout(f => {
        this.invalidMessage = false;
      }, 2000);
    }

  }

}
