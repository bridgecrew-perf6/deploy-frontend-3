import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { Educacion } from './modelo/educacion';
import { Experiencia } from './modelo/experiencia';
import { Persona } from './modelo/persona';
import { Proyectos } from './modelo/proyectos';
import { Tecnologias } from './modelo/tecnologias';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(public authService: AuthService){}
  public get isLoggedIn():boolean {
    return (localStorage.getItem('auth') != null); // check if token is expired

}
logout(){
  this.authService.logout();
}
}
