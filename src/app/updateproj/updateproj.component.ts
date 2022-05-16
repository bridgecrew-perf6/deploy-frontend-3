import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Proyectos } from '../modelo/proyectos';

@Component({
  selector: 'app-updateproj',
  templateUrl: './updateproj.component.html',
  styleUrls: ['./updateproj.component.css']
})
export class UpdateprojComponent implements OnInit {
proyecto: Proyectos = new Proyectos;
  constructor(public api:ApiService, public router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id:any = localStorage.getItem("id");
    this.api.getProyectoId(+id).subscribe(data=>{
      this.proyecto=data;
    })
  }

  Actualizar(proyecto:Proyectos){
    this.api.updateProyecto(proyecto).subscribe(data =>{
      this.proyecto=data;
      alert("Actualizado con éxito!");
      this.router.navigate(['/perfil']);
    })
  }
}
