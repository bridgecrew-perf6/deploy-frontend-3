import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Idiomas } from '../modelo/idiomas';

@Component({
  selector: 'app-updatelang',
  templateUrl: './updatelang.component.html',
  styleUrls: ['./updatelang.component.css']
})
export class UpdatelangComponent implements OnInit {
idioma: Idiomas = new Idiomas;
  constructor(public api:ApiService, public router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id:any = localStorage.getItem("id");
    this.api.getLangId(+id).subscribe(data=>{
      this.idioma=data;
    })
  }

  Actualizar(idioma:Idiomas){
    this.api.updateLang(idioma).subscribe(data =>{
      this.idioma=data;
      alert("Actualizado con éxito!");
      this.router.navigate(['/perfil']);
    })
}
}
