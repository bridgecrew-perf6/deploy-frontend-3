import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse}  from'@angular/common/http';
import {Router} from '@angular/router';
import { Observable,throwError } from 'rxjs';
import { tap, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';




@Injectable({
  providedIn: 'root'
})

export class AuthService {
url='Http://localhost:8080/signup';

  constructor(private http: HttpClient, private apiService: ApiService) { 
    const token = localStorage.getItem('auth');
  }
  

  login(usuario:string,password:string){
    return this.apiService.login(usuario,password).pipe(
      tap((response:any) =>{
        localStorage.setItem('auth', response.token);
  })
    );


}
logout(){
  localStorage.removeItem('auth');
}

register(username:string,password:string){
  return this.http.post(this.url,{username,password})
}

public get isLoggedIn():boolean {
    return (localStorage.getItem('auth') != null); // check if token is expired

}


}