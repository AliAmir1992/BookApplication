import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BookService } from './book/book.service';
import { ModalContentComponent } from './_shared/modal-content.component';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouteGuard } from './_core/RouteGuard';
import { AuthService } from './login/auth.service';
import { PaginationService } from './_shared/pagination.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ModalContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [ModalContentComponent],
  providers: [BookService, AuthService, PaginationService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
