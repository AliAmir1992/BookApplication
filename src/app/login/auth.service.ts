import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Book } from "../model/book";
import { Subject } from "../../../node_modules/rxjs";

@Injectable()
export class AuthService {

  credentials: any;
  public isUserLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.ReadCredentials().subscribe(
      data => { this.credentials = data; }
    )
  }
  ReadCredentials() {
    return this.http.get("./assets/credentials.json").pipe(
      map(
        (res: any) => {
          return res;
        },
        (err: HttpErrorResponse) => {
          return err;
        }
      )
    );
  }

  Login(UserId: string, Password: string) {
    if (UserId == this.credentials.userId && Password == this.credentials.passowrd) {
      sessionStorage.setItem("LoggedInUser", JSON.stringify(UserId));
      this.isUserLoggedIn.next(true);
      return true;
    }
    else
      return false;
  }
  Logout() {
    sessionStorage.setItem("LoggedInUser", null);
    this.isUserLoggedIn.next(false);
  }
  isLoggedIn() {
    const LoggedInUser = sessionStorage.getItem('LoggedInUser');
    if (JSON.parse(sessionStorage.getItem('LoggedInUser'))) {
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
  }
}