import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { EMPTY, Observable, catchError, retry, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService,
    private router:Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.loginService.getToken();
    if(token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization', "Bearer "+ localStorage.getItem("token")?.toString())
      })
      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Forbidden || error.status === HttpStatusCode.Unauthorized) {
            //this.loginService.logout();
            alert("NO TIENES PERMISOS!")
            this.router.navigate(['/']);
            return EMPTY;
          } else {
            return throwError(() => error);
          }
        })
      );
    }else{
      this.router.navigate(['/']);
    };

    return next.handle(request);
  }
}
