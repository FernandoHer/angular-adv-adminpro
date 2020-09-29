import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interfaces';
import { LoginForm } from '../interfaces/login-form.interfaces';


const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

public auth2: any;

  constructor(private http: HttpClient,
    private router: Router,
    private ngzone: NgZone) {


      this.googleInit();
    }

    googleInit() {

      return new Promise( resolve => {
        gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id:
          '675959597355-o9enigl29l0fvhlt2l918emagqjc16k9.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      resolve();
      });
      
    });
    }



  logout() {
    localStorage.removeItem(`token`);
    
    this.auth2.signOut().then( () => {

      this.ngzone.run( () => {
         this.router.navigateByUrl('/login');
      });
    });
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${ base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe (
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      }),
      map( resp => true ),
      catchError( error => of(false))
    );
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData)
      .pipe(
          tap((resp: any) => {
            localStorage.setItem('token', resp.token);
      })
    );
  }

  LoginGoogle(token) {
    return this.http.post(`${base_url}/login/google`, {token}).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }
}

