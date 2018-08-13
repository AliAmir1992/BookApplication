import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { RouteGuard } from './_core/RouteGuard';

export const routeConfig: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'book',
    component: BookComponent,
    canActivate : [RouteGuard]
  },
  {
    path : '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }