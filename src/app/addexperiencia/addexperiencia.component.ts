import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Experiencia } from '../modelo/experiencia';

@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {
 experiencia:Experiencia = new Experiencia;
  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
  }
  GuardarExp(){
    this.api.createExperiencia(this.experiencia)
    .subscribe(data=>{
      alert("Se agregó con éxito!");
      this.router.navigate(['/perfil']);
    })
  }
}
