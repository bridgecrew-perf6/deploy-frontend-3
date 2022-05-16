import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Persona } from '../modelo/persona';

@Component({
  selector: 'app-updatepersona',
  templateUrl: './updatepersona.component.html',
  styleUrls: ['./updatepersona.component.css']
})
export class UpdatepersonaComponent implements OnInit {
persona: Persona = new Persona;
  constructor(public api: ApiService, public router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id:any = localStorage.getItem("id");
    this.api.getPersonaId(+id).subscribe(data=>{
      this.persona=data;
    })
  }

  Actualizar(persona:Persona){
    this.api.updatePersona(persona).subscribe(data =>{
      this.persona=data;
      alert("Actualizado con éxito!");
      this.router.navigate(['/perfil']);
    })
  }
}
