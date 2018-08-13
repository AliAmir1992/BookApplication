import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Book } from "../model/book";

@Injectable()
export class BookService {
  inEditBook: Book;
  constructor(private http: HttpClient) { }


  inEditBookDetails(book: Book) {
    this.inEditBook = new Book(book.Title, book.Description,book.PageCount,book.Excerpt,book.PublishDate,book.ID);
  }

  getinEditBookDetails(): Book {
    return this.inEditBook;
  }
  EditBook(book: Book) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };
    return this.http.put("http://fakerestapi.azurewebsites.net/api/Books/?id=" + book.ID, book, httpOptions).pipe(
      map(
        (res: any) => {
          debugger;
          return res;
        },
        (err: HttpErrorResponse) => {
          debugger;
          return err;
        }
      )
    );
  }

  DeleteBook(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };
    return this.http.delete("http://fakerestapi.azurewebsites.net/api/Books/?id=" + id, httpOptions).pipe(
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

  AddBook(book: Book) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };
    // return this.httpClient.post(this.constant.BASE_URL + "/AEAPICORS/api/cass/verify", address, httpOptions).pipe(
    return this.http.post("http://fakerestapi.azurewebsites.net/api/Books", book, httpOptions).pipe(
      map(
        (res: any) => {
          debugger;
          return res;
        },
        (err: HttpErrorResponse) => {
          debugger;
          return err;
        }
      )
    );
  }

  GetAllBooks() {
    return this.http.get("http://fakerestapi.azurewebsites.net/api/Books").pipe(
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
}