import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Proyectos } from '../modelo/proyectos';

@Component({
  selector: 'app-addproj',
  templateUrl: './addproj.component.html',
  styleUrls: ['./addproj.component.css']
})
export class AddprojComponent implements OnInit {
 proyecto: Proyectos = new Proyectos;
  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.api.createProj(this.proyecto)
    .subscribe(data=>{
      alert("Se agregó con éxito!");
      this.router.navigate(['/perfil']);
    })
  }
}
