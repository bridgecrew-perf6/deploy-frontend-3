import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Idiomas } from '../modelo/idiomas';

@Component({
  selector: 'app-addlang',
  templateUrl: './addlang.component.html',
  styleUrls: ['./addlang.component.css']
})
export class AddlangComponent implements OnInit {
  idioma: Idiomas = new Idiomas;

  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
  }
  GuardarLang(){
    this.api.createIdiomas(this.idioma)
    .subscribe(data=>{
      alert("Se agregó con éxito!");
      this.router.navigate(['/perfil']);
    })
  }

}
